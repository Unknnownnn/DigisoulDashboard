  await window.ethereum.request({
    method: 'eth_sendTransaction',
    params: [transactionParameters],
  })

  const step3 = connectionWindow?.document.getElementById('step3')
  if (step3) {
    step3.innerHTML = `
      <span class="check">✓</span>
      <span class="completed">Verification token minted</span>
    `

    // Update the final message to show "Verifying ID"
    if (connectionWindow?.document?.body) {
      const messageElement = connectionWindow.document.querySelector('p');
      if (messageElement) {
        messageElement.innerHTML = 'Verifying ID...';
      }
    }

    // Open new window for ZKP verification
    const width = 500;
    const height = 400;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;

    const zkpWindow = window.open(
      'about:blank',
      'ZKP Verification',
      `width=${width},height=${height},left=${left},top=${top}`
    );

    if (zkpWindow) {
      zkpWindow.document.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>ZKP Verification</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                background: #000000;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                color: white;
                font-family: monospace;
              }
              .loader {
                width: 60px;
                height: 60px;
                border: 4px solid #333;
                border-top: 4px solid #22c55e;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin-bottom: 20px;
              }
              .text {
                font-size: 1.2em;
                letter-spacing: 2px;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
            </style>
          </head>
          <body>
            <div class="loader"></div>
            <div class="text">ZKP Verification</div>
          </body>
        </html>
      `);

      const randomDelay = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;

      // After ZKP verification, show success and close both windows
      setTimeout(() => {
        if (zkpWindow?.document?.body) {
          zkpWindow.document.body.innerHTML = `
            <div style="
              height: 100vh;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              text-align: center;
              background: #0a0b14;
              color: #22c55e;
            ">
              <h2>✓ Connected Successfully!</h2>
              <p>You've earned ${connection.soulPoints} Soul Points</p>
              <p>Verification token has been minted to your wallet</p>
              <p>ZKP Verification Complete</p>
              <p>This window will close automatically...</p>
            </div>
          `;

          // Update connection state
          setConnections(prev => prev.map(conn => 
            conn.id === connection.id ? { ...conn, connected: true } : conn
          ));

          // Close both windows after showing success
          setTimeout(() => {
            zkpWindow?.close();
            connectionWindow?.close();
          }, 2000);
        }
      }, randomDelay);
    }
  }

} catch (mintError: unknown) {
  // ... existing code ...
} 