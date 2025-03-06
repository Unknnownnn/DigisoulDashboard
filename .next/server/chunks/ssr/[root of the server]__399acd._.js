module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/components/dashboard-profile.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DashboardProfile": (()=>DashboardProfile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function DashboardProfile({ name, walletId, multiplier, avatarUrl }) {
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editedName, setEditedName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(name);
    const [soulPoints, setSoulPoints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [connectedAddress, setConnectedAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(walletId);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Get connected wallet address
        const getAddress = async ()=>{
            if (typeof window.ethereum !== 'undefined') {
                try {
                    const accounts = await window.ethereum.request({
                        method: 'eth_requestAccounts'
                    });
                    if (accounts[0]) {
                        setConnectedAddress(accounts[0]);
                    }
                } catch (error) {
                    console.error('Error fetching wallet address:', error);
                }
            }
        };
        getAddress();
        // Listen for account changes
        if (window.ethereum) {
            window.ethereum.on('accountsChanged', function(accounts) {
                if (accounts[0]) {
                    setConnectedAddress(accounts[0]);
                }
            });
        }
        // Listen for soul points updates from the DashboardTabs component
        const handleSoulPointsUpdate = (event)=>{
            setSoulPoints(event.detail.points);
        };
        window.addEventListener('soulPointsUpdate', handleSoulPointsUpdate);
        return ()=>{
            window.removeEventListener('soulPointsUpdate', handleSoulPointsUpdate);
        };
    }, []);
    const handleEditProfile = ()=>{
        if (isEditing) {
            // Save the changes
            // Here you would typically make an API call to update the profile
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };
    const copyWalletId = async (walletId)=>{
        try {
            await navigator.clipboard.writeText(walletId);
            // You could add a toast notification here
            alert('Wallet ID copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy wallet ID:', err);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl bg-[#060709] p-6",
        id: "myClasses",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: avatarUrl,
                            alt: "Profile",
                            className: "w-24 h-24 rounded-full"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard-profile.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-profile.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-4 py-2 text-sm ${isEditing ? 'bg-green-500/20 text-green-500' : 'bg-[#1c1d29] hover:bg-[#2a2b3d]'} rounded-lg transition-colors`,
                        onClick: handleEditProfile,
                        children: isEditing ? 'Save profile' : 'Edit profile'
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard-profile.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard-profile.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: editedName,
                                onChange: (e)=>setEditedName(e.target.value),
                                className: "text-2xl font-bold bg-[#1c1d29] rounded px-2 py-1 w-full"
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard-profile.tsx",
                                lineNumber: 112,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold",
                                children: editedName
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard-profile.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 flex items-center gap-2",
                                children: [
                                    connectedAddress,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "hover:text-gray-300",
                                        onClick: ()=>copyWalletId(connectedAddress),
                                        title: "Copy wallet ID",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-profile.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/dashboard-profile.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard-profile.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard-profile.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard-profile.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-medium",
                                        children: "Soul Points"
                                    }, void 0, false, {
                                        fileName: "[project]/components/dashboard-profile.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-blue-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Multiplier"
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-profile.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-bold",
                                                children: [
                                                    multiplier,
                                                    "x"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard-profile.tsx",
                                                lineNumber: 140,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dashboard-profile.tsx",
                                        lineNumber: 138,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dashboard-profile.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: soulPoints.filter((point)=>point.connected).map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-2 rounded bg-[#1c1d29]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white",
                                                children: point.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/dashboard-profile.tsx",
                                                lineNumber: 150,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-green-500",
                                                children: [
                                                    "+",
                                                    point.points
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dashboard-profile.tsx",
                                                lineNumber: 151,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, point.name, true, {
                                        fileName: "[project]/components/dashboard-profile.tsx",
                                        lineNumber: 146,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard-profile.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard-profile.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard-profile.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard-profile.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/dasboard-tabs.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "DashboardTabs": (()=>DashboardTabs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const TABS = [
    {
        id: 'credit',
        label: 'Credit'
    },
    {
        id: 'on-chain',
        label: 'On-chain Activities'
    },
    {
        id: 'social',
        label: 'Social'
    },
    {
        id: 'identity',
        label: 'Identity'
    },
    {
        id: 'gaming',
        label: 'Gaming'
    },
    {
        id: 'legal',
        label: 'Legal Identity'
    }
];
const INITIAL_SOCIAL_CONNECTIONS = [
    // Credit Category
    {
        id: 'creditScore',
        name: 'Credit Score',
        icon: '💳',
        description: 'Connect your traditional credit score.',
        connected: false,
        soulPoints: 200,
        url: 'https://credit.example.com/connect',
        category: 'credit'
    },
    {
        id: 'creditKarma',
        name: 'Credit Karma',
        icon: '📊',
        description: 'Link your Credit Karma account.',
        connected: false,
        soulPoints: 150,
        url: 'https://creditkarma.example.com/connect',
        category: 'credit'
    },
    // On-chain Activities
    {
        id: 'ethereumWallet',
        name: 'Ethereum Wallet',
        icon: '⟠',
        description: 'Connect your Ethereum wallet activity.',
        connected: false,
        soulPoints: 180,
        url: 'https://ethereum.example.com/connect',
        category: 'on-chain'
    },
    {
        id: 'defiScore',
        name: 'DeFi Score',
        icon: '🏦',
        description: 'Link your DeFi protocol interactions.',
        connected: false,
        soulPoints: 160,
        url: 'https://defi.example.com/connect',
        category: 'on-chain'
    },
    // Social Category
    {
        id: 'x',
        name: 'X',
        icon: '𝕏',
        description: 'Connect to X to verify your social media presence.',
        connected: false,
        soulPoints: 100,
        url: 'https://x.com/oauth',
        category: 'social',
        verificationRequired: true,
        verificationData: {
            type: 'username',
            message: 'Verify X Account',
            placeholder: '@username'
        }
    },
    {
        id: 'linkedin',
        name: 'LinkedIn',
        icon: '💼',
        description: 'Verify your professional network.',
        connected: false,
        soulPoints: 120,
        url: 'https://linkedin.com/oauth',
        category: 'social'
    },
    {
        id: 'google',
        name: 'Google',
        icon: 'G',
        description: 'Connect your Google account.',
        connected: false,
        soulPoints: 80,
        url: 'https://accounts.google.com/oauth',
        category: 'social'
    },
    // Identity Category
    {
        id: 'sibilScore',
        name: 'Sibil Score',
        icon: '📊',
        description: 'Connect your Sibil Score to boost your reputation.',
        connected: false,
        soulPoints: 150,
        url: 'https://sibil.example.com/connect',
        category: 'identity',
        verificationRequired: true,
        verificationData: {
            type: 'score',
            message: 'Your Sibil Score',
            score: 750
        }
    },
    {
        id: 'brightid',
        name: 'BrightID',
        icon: '🌟',
        description: 'Verify your unique human identity.',
        connected: false,
        soulPoints: 140,
        url: 'https://brightid.org/connect',
        category: 'identity'
    },
    // Gaming Category
    {
        id: 'steam',
        name: 'Steam',
        icon: '🎮',
        description: 'Connect your Steam gaming profile.',
        connected: false,
        soulPoints: 90,
        url: 'https://steam.example.com/connect',
        category: 'gaming'
    },
    {
        id: 'xbox',
        name: 'Xbox',
        icon: '🎯',
        description: 'Link your Xbox gaming achievements.',
        connected: false,
        soulPoints: 80,
        url: 'https://xbox.example.com/connect',
        category: 'gaming'
    },
    // Legal Identity
    {
        id: 'mAdhar',
        name: 'mAdhar',
        icon: '🆔',
        description: 'Verify your identity with mAdhar.',
        connected: false,
        soulPoints: 200,
        url: 'https://madhar.example.com/verify',
        category: 'legal',
        verificationRequired: true,
        verificationData: {
            type: 'aadhar',
            message: 'Verify Aadhar',
            lastDigits: '4321'
        }
    },
    {
        id: 'passport',
        name: 'Passport Verification',
        icon: '📘',
        description: 'Verify your passport credentials.',
        connected: false,
        soulPoints: 180,
        url: 'https://passport.example.com/verify',
        category: 'legal'
    }
];
function DashboardTabs() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('credit');
    const [connections, setConnections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(INITIAL_SOCIAL_CONNECTIONS);
    // Emit soul points information whenever connections change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const soulPointsInfo = connections.map((conn)=>({
                name: conn.name,
                points: conn.soulPoints,
                connected: conn.connected
            }));
        window.dispatchEvent(new CustomEvent('soulPointsUpdate', {
            detail: {
                points: soulPointsInfo
            }
        }));
    }, [
        connections
    ]);
    const handleConnection = async (connectionId)=>{
        const connection = connections.find((c)=>c.id === connectionId);
        if (!connection) return;
        if (connection.connected) {
            // Handle disconnection
            setConnections((prev)=>prev.map((conn)=>conn.id === connectionId ? {
                        ...conn,
                        connected: false
                    } : conn));
            return;
        }
        // Check if MetaMask is installed
        if (typeof window.ethereum === 'undefined') {
            alert('Please install MetaMask to connect services!');
            return;
        }
        // Show verification page if required
        if (connection.verificationRequired) {
            const getServiceStyles = (id)=>{
                switch(id){
                    case 'x':
                        return {
                            background: '#000000',
                            buttonColor: '#1d9bf0',
                            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
                        };
                    case 'google':
                        return {
                            background: '#ffffff',
                            buttonColor: '#1a73e8',
                            fontFamily: 'Roboto, arial, sans-serif'
                        };
                    case 'sibilScore':
                        return {
                            background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
                            buttonColor: '#4ade80',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        };
                    case 'mAdhar':
                        return {
                            background: 'linear-gradient(135deg, #FF6B6B 0%, #556270 100%)',
                            buttonColor: '#ffd700',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        };
                    default:
                        return {
                            background: '#0a0b14',
                            buttonColor: '#22c55e',
                            fontFamily: 'system-ui, -apple-system, sans-serif'
                        };
                }
            };
            const styles = getServiceStyles(connection.id);
            const verificationPage = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Verify ${connection.name}</title>
            <style>
              body {
                margin: 0;
                padding: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                background: ${styles.background};
                color: ${connection.id === 'google' ? '#202124' : 'white'};
                font-family: ${styles.fontFamily};
              }
              .container {
                background: ${connection.id === 'x' ? '#000000' : 'rgba(255,255,255,0.1)'};
                border: 1px solid ${connection.id === 'x' ? '#333333' : 'rgba(255,255,255,0.2)'};
                padding: 2rem;
                border-radius: 1rem;
                max-width: 400px;
                width: 90%;
                text-align: center;
              }
              .title {
                font-size: 1.5rem;
                margin-bottom: 1rem;
                color: ${connection.id === 'google' ? '#202124' : 'white'};
              }
              .info {
                font-size: ${connection.id === 'mAdhar' ? '2rem' : '1.5rem'};
                color: ${styles.buttonColor};
                margin: 1.5rem 0;
                ${connection.id === 'mAdhar' ? 'font-family: monospace; letter-spacing: 2px;' : ''}
              }
              .message {
                opacity: 0.8;
                margin-bottom: 1.5rem;
              }
              .buttons {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
              }
              button {
                width: 100%;
                padding: 0.75rem;
                border: none;
                border-radius: 0.5rem;
                cursor: pointer;
                font-size: 1rem;
                transition: all 0.2s;
              }
              .confirm {
                background: ${styles.buttonColor};
                color: ${connection.id === 'mAdhar' ? 'black' : 'white'};
              }
              .cancel {
                background: transparent;
                border: 1px solid ${connection.id === 'x' ? '#333333' : 'rgba(255,255,255,0.2)'};
                color: ${connection.id === 'google' ? styles.buttonColor : 'white'};
              }
              button:hover {
                opacity: 0.9;
              }
            </style>
          </head>
          <body>
            <div class="container">
              ${getVerificationContent(connection)}
            </div>
            <script>
              document.querySelector('.confirm')?.addEventListener('click', () => {
                window.opener.postMessage({
                  type: 'verification',
                  connectionId: '${connection.id}',
                  confirmed: true
                }, '*');
              });
              
              document.querySelector('.cancel')?.addEventListener('click', () => {
                window.opener.postMessage({
                  type: 'verification',
                  connectionId: '${connection.id}',
                  confirmed: false
                }, '*');
                window.close();
              });
            </script>
          </body>
        </html>
      `;
            const width = 500;
            const height = 400;
            const left = window.screenX + (window.outerWidth - width) / 2;
            const top = window.screenY + (window.outerHeight - height) / 2;
            const verificationWindow = window.open('about:blank', `Verify ${connection.name}`, `width=${width},height=${height},left=${left},top=${top}`);
            if (verificationWindow) {
                verificationWindow.document.write(verificationPage);
                // Handle verification response
                const handleMessage = (event)=>{
                    if (event.data.type === 'verification' && event.data.connectionId === connection.id) {
                        window.removeEventListener('message', handleMessage);
                        if (event.data.confirmed) {
                            verificationWindow.close();
                            proceedWithConnection(connection);
                        }
                    }
                };
                window.addEventListener('message', handleMessage);
            }
        } else {
            proceedWithConnection(connection);
        }
    };
    const getVerificationContent = (connection)=>{
        if (!connection.verificationData) return '';
        switch(connection.verificationData.type){
            case 'score':
                return `
          <h2 class="title">Your Sibil Score</h2>
          <div class="info">${connection.verificationData.score}</div>
          <p class="message">Would you like to connect this score to your profile?</p>
          <div class="buttons">
            <button class="confirm">Continue with Sibil</button>
            <button class="cancel">Cancel</button>
          </div>
        `;
            case 'username':
                return `
          <img src="https://about.twitter.com/content/dam/about-twitter/x/large-x-logo.png.twimg.1920.png" 
               alt="X logo" 
               style="width: 40px; height: 40px; margin-bottom: 1rem;">
          <h2 class="title">Sign in to X</h2>
          <div class="info">@johndoe</div>
          <p class="message">Confirm your X account to continue</p>
          <div class="buttons">
            <button class="confirm">Continue with X</button>
            <button class="cancel">Not you?</button>
          </div>
        `;
            case 'aadhar':
                return `
          <h2 class="title">Verify with mAadhar</h2>
          <div class="info">XXXX XXXX ${connection.verificationData.lastDigits}</div>
          <p class="message">Confirm your Aadhar number to continue</p>
          <div class="buttons">
            <button class="confirm">Verify Identity</button>
            <button class="cancel">Cancel</button>
          </div>
        `;
            default:
                return '';
        }
    };
    const proceedWithConnection = async (connection)=>{
        try {
            console.log('Requesting MetaMask connection...');
            // Request account access without chain restriction
            const provider = window.ethereum;
            // Now request account access
            console.log('Requesting account access...');
            const accounts = await provider.request({
                method: 'eth_requestAccounts'
            });
            if (!accounts || accounts.length === 0) {
                throw new Error('No accounts returned from MetaMask');
            }
            // Get current network for logging
            const chainId = await provider.request({
                method: 'eth_chainId'
            });
            console.log('MetaMask connected:', accounts[0], 'on chain:', chainId);
            // Create a mock connection page
            const mockPage = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Connecting to ${connection.name}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                margin: 0;
                background: #0a0b14;
                color: white;
              }
              .loader {
                border: 4px solid #1c1d29;
                border-top: 4px solid #22c55e;
                border-radius: 50%;
                width: 50px;
                height: 50px;
                animation: spin 1s linear infinite;
                margin-bottom: 20px;
              }
              @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
              }
              .success {
                color: #22c55e;
                text-align: center;
              }
              .steps {
                margin: 20px 0;
                text-align: left;
                width: 80%;
                max-width: 400px;
              }
              .step {
                margin: 10px 0;
                display: flex;
                align-items: center;
                gap: 10px;
              }
              .step.completed {
                color: #22c55e;
              }
              .check {
                font-size: 1.2em;
              }
            </style>
          </head>
          <body>
            <div class="loader"></div>
            <p>Connecting to ${connection.name}...</p>
            <div class="steps">
              <div class="step" id="step1">
                <span class="check">✓</span>
                <span class="completed">MetaMask connected</span>
              </div>
              <div class="step" id="step2">
                <span class="check">⭕</span>
                <span>Initializing connection...</span>
              </div>
              <div class="step" id="step3">
                <span class="check">⭕</span>
                <span>Minting verification token...</span>
              </div>
            </div>
          </body>
        </html>
      `;
            // Open connection window
            const width = 500;
            const height = 600;
            const left = window.screenX + (window.outerWidth - width) / 2;
            const top = window.screenY + (window.outerHeight - height) / 2;
            const connectionWindow = window.open('about:blank', `Connect ${connection.name}`, `width=${width},height=${height},left=${left},top=${top}`);
            if (connectionWindow) {
                // Write the mock page content
                connectionWindow.document.write(mockPage);
                // Step 2: Initialize
                setTimeout(()=>{
                    const step2 = connectionWindow?.document.getElementById('step2');
                    if (step2) {
                        step2.innerHTML = `
              <span class="check">✓</span>
              <span class="completed">Connection initialized</span>
            `;
                    }
                    // Step 3: Mint token
                    setTimeout(async ()=>{
                        try {
                            // Simulate a token mint transaction
                            const transactionParameters = {
                                to: accounts[0],
                                from: accounts[0],
                                value: '0x0',
                                data: '0x'
                            };
                            await window.ethereum.request({
                                method: 'eth_sendTransaction',
                                params: [
                                    transactionParameters
                                ]
                            });
                            const step3 = connectionWindow?.document.getElementById('step3');
                            if (step3) {
                                step3.innerHTML = `
                  <span class="check">✓</span>
                  <span class="completed">Verification token minted</span>
                `;
                            }
                            // Show final success message
                            setTimeout(()=>{
                                if (connectionWindow?.document?.body) {
                                    connectionWindow.document.body.innerHTML = `
                    <div class="success">
                      <h2>✓ Connected Successfully!</h2>
                      <p>You've earned ${connection.soulPoints} Soul Points</p>
                      <p>Verification token has been minted to your wallet</p>
                      <p>This window will close automatically...</p>
                    </div>
                  `;
                                }
                                // Update connection state
                                setConnections((prev)=>prev.map((conn)=>conn.id === connection.id ? {
                                            ...conn,
                                            connected: true
                                        } : conn));
                                // Close window after showing success
                                setTimeout(()=>connectionWindow?.close(), 2000);
                            }, 1000);
                        } catch (mintError) {
                            const errorMessage = mintError instanceof Error ? mintError.message : 'Unknown error';
                            if (connectionWindow?.document?.body) {
                                connectionWindow.document.body.innerHTML = `
                  <div style="color: #ef4444; text-align: center;">
                    <h2>❌ Transaction Failed</h2>
                    <p>Failed to mint verification token: ${errorMessage}</p>
                    <p>Please try again later.</p>
                  </div>
                `;
                            }
                            setTimeout(()=>connectionWindow?.close(), 3000);
                        }
                    }, 1000);
                }, 1000);
            }
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            alert(`Connection failed: ${errorMessage}. Please try again.`);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl bg-[#060709] p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2 overflow-x-auto pb-4",
                children: TABS.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(tab.id),
                        className: `px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${activeTab === tab.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`,
                        children: tab.label
                    }, tab.id, false, {
                        fileName: "[project]/components/dasboard-tabs.tsx",
                        lineNumber: 627,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/dasboard-tabs.tsx",
                lineNumber: 625,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2",
                children: connections.filter((connection)=>connection.category === activeTab).map((connection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: "myClasses",
                        className: "p-4 rounded-xl bg-[#1c1d29] flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 rounded-full bg-[#14151f] flex items-center justify-center text-xl",
                                        children: connection.icon
                                    }, void 0, false, {
                                        fileName: "[project]/components/dasboard-tabs.tsx",
                                        lineNumber: 650,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-medium",
                                                children: connection.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/dasboard-tabs.tsx",
                                                lineNumber: 654,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-400",
                                                children: connection.description
                                            }, void 0, false, {
                                                fileName: "[project]/components/dasboard-tabs.tsx",
                                                lineNumber: 655,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-yellow-500",
                                                children: [
                                                    "+",
                                                    connection.soulPoints,
                                                    " Soul Points"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/dasboard-tabs.tsx",
                                                lineNumber: 656,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/dasboard-tabs.tsx",
                                        lineNumber: 653,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/dasboard-tabs.tsx",
                                lineNumber: 649,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleConnection(connection.id),
                                className: `px-4 py-2 rounded-lg text-sm transition-colors ${connection.connected ? 'bg-green-500/20 text-green-500 hover:bg-green-500/30' : 'bg-white/5 text-white hover:bg-white/10'}`,
                                children: connection.connected ? 'Connected' : 'Connect'
                            }, void 0, false, {
                                fileName: "[project]/components/dasboard-tabs.tsx",
                                lineNumber: 659,
                                columnNumber: 13
                            }, this)
                        ]
                    }, connection.id, true, {
                        fileName: "[project]/components/dasboard-tabs.tsx",
                        lineNumber: 645,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/dasboard-tabs.tsx",
                lineNumber: 641,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dasboard-tabs.tsx",
        lineNumber: 624,
        columnNumber: 5
    }, this);
}
}}),
"[project]/components/solid-score.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "SolidScore": (()=>SolidScore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function SolidScore({ score, maxScore, increase }) {
    const [showInfo, setShowInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentScore, setCurrentScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const maxPossibleScore = 1750 // Total possible points from all connections (sum of all soulPoints)
    ;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Listen for soul points updates
        const handleSoulPointsUpdate = (event)=>{
            const totalPoints = event.detail.points.reduce((total, point)=>total + (point.connected ? point.points : 0), 0);
            // Animate the score change
            let current = currentScore;
            const animate = ()=>{
                if (current < totalPoints) {
                    current += 1;
                    setCurrentScore(current);
                    requestAnimationFrame(animate);
                } else if (current > totalPoints) {
                    current -= 1;
                    setCurrentScore(current);
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        };
        window.addEventListener('soulPointsUpdate', handleSoulPointsUpdate);
        return ()=>{
            window.removeEventListener('soulPointsUpdate', handleSoulPointsUpdate);
        };
    }, [
        currentScore
    ]);
    const percentage = currentScore / maxPossibleScore * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl bg-[#060709] p-6",
        id: "myClasses",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium",
                        children: "Soul Score"
                    }, void 0, false, {
                        fileName: "[project]/components/solid-score.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-gray-400 hover:text-gray-300",
                        onClick: ()=>setShowInfo(!showInfo),
                        title: "Show information about Soul Score",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            }, void 0, false, {
                                fileName: "[project]/components/solid-score.tsx",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/solid-score.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/solid-score.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/solid-score.tsx",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            showInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4 p-3 bg-[#1c1d29] rounded-lg text-sm text-gray-300",
                children: [
                    "Your Soul Score represents your overall reputation and trustworthiness in the ecosystem. Connect services to increase your score up to a maximum of ",
                    maxPossibleScore,
                    " points."
                ]
            }, void 0, true, {
                fileName: "[project]/components/solid-score.tsx",
                lineNumber: 70,
                columnNumber: 11
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-end gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-5xl font-bold text-[#22c55e]",
                        children: currentScore
                    }, void 0, false, {
                        fileName: "[project]/components/solid-score.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400 mb-2",
                        children: [
                            "/",
                            maxPossibleScore
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/solid-score.tsx",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/solid-score.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-2 bg-[#1c1d29] rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 top-0 h-full bg-[#22c55e] transition-all duration-300",
                    style: {
                        width: `${percentage}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/solid-score.tsx",
                    lineNumber: 82,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/solid-score.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/solid-score.tsx",
        lineNumber: 55,
        columnNumber: 7
    }, this);
}
}}),
"[project]/components/wallet-value.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "WalletValue": (()=>WalletValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function WalletValue({ connectedWallets }) {
    const [account, setAccount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null); // Store the MetaMask account
    const [walletBalance, setWalletBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // Store wallet balance
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const connectWallet = async ()=>{
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            } else {
                alert('MetaMask not detected!');
            }
        };
        connectWallet();
    }, []);
    if (!account) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Please connect your MetaMask wallet!"
        }, void 0, false, {
            fileName: "[project]/components/wallet-value.tsx",
            lineNumber: 41,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl bg-[#060709] p-6",
        id: "myClasses",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium",
                        children: "Wallet Value"
                    }, void 0, false, {
                        fileName: "[project]/components/wallet-value.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-gray-400 hover:text-gray-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-5 h-5",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M9 5l7 7-7 7"
                            }, void 0, false, {
                                fileName: "[project]/components/wallet-value.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/wallet-value.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/wallet-value.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/wallet-value.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl font-bold mb-2",
                children: [
                    walletBalance.toLocaleString('en-US', {
                        minimumFractionDigits: 2
                    }),
                    " ETH"
                ]
            }, void 0, true, {
                fileName: "[project]/components/wallet-value.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm text-blue-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            connectedWallets,
                            " WALLETS CONNECTED"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/wallet-value.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex -space-x-2",
                        children: Array.from({
                            length: connectedWallets
                        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-full bg-gray-700 border-2 border-[#14151f]"
                            }, i, false, {
                                fileName: "[project]/components/wallet-value.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/wallet-value.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/wallet-value.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/wallet-value.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__399acd._.js.map