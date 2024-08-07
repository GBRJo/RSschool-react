import {
  Provider_default,
  ThemeProvider,
  activeCardSlice_default,
  api,
  configureStore,
  selectedPeopleSlice_default
} from "/build/_shared/chunk-HNR7UIHW.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-PVNSLVPX.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-FJ44GY64.js";
import "/build/_shared/chunk-UWV35TSL.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/store/store.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\store\\store.ts"
  );
  import.meta.hot.lastModified = "1722987057959.7554";
}
var store = configureStore({
  reducer: {
    activeCard: activeCardSlice_default,
    selectedPeople: selectedPeopleSlice_default,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = void 0;

// app/index.css
var app_default = "/build/_assets/index-QFEZ24QT.css";

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => {
  return [...cssBundleHref ? [{
    rel: "stylesheet",
    href: cssBundleHref
  }] : [], {
    rel: "stylesheet",
    href: app_default
  }];
};
function meta() {
  return [{
    charset: "utf-8"
  }, {
    title: "My React App"
  }, {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }, {
    name: "theme-color",
    content: "#000000"
  }, {
    name: "description",
    content: "My beautiful React app"
  }];
}
function Root() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Provider_default, { store, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { id: "root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 61,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
}
_c = Root;
var _c;
$RefreshReg$(_c, "Root");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Root as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-3X2ANSGJ.js.map
