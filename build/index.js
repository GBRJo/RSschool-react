var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 40,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 82,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          let body = new PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(createReadableStreamFromReadable(body), {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => Root,
  links: () => links,
  meta: () => meta
});
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { Provider } from "react-redux";

// app/hooks/ThemeContext.tsx
import { createContext, useState, useCallback } from "react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var ThemeContext = createContext(
  void 0
), ThemeProvider = ({
  children
}) => {
  let [theme, setTheme] = useState("light"), toggleTheme = useCallback(() => {
    setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
  }, []);
  return /* @__PURE__ */ jsxDEV2(ThemeContext.Provider, { value: { theme, toggleTheme }, children }, void 0, !1, {
    fileName: "app/hooks/ThemeContext.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/store/store.ts
import { configureStore } from "@reduxjs/toolkit";

// app/store/selectedPeopleSlice.ts
import { createSelector, createSlice } from "@reduxjs/toolkit";
var initialState = {
  selectedPeople: [],
  activePersonId: null
}, selectedPeopleSlice = createSlice({
  name: "selectedPeople",
  initialState,
  reducers: {
    togglePersonSelection(state, action) {
      let person = action.payload, index = state.selectedPeople.findIndex((p) => p.url === person.url);
      index >= 0 ? state.selectedPeople.splice(index, 1) : state.selectedPeople.push(person);
    },
    clearSelection(state) {
      state.selectedPeople = [];
    }
  }
}), { togglePersonSelection, clearSelection } = selectedPeopleSlice.actions, getSelectedPeople = (state) => state.selectedPeople.selectedPeople, getSelectedPeopleUrls = createSelector(
  [getSelectedPeople],
  (selectedPeople) => selectedPeople.map((p) => p.url)
), selectedPeopleSlice_default = selectedPeopleSlice.reducer;

// app/store/activeCardSlice.ts
import { createSlice as createSlice2 } from "@reduxjs/toolkit";
var initialState2 = {
  activeCardId: null
}, activeCardSlice = createSlice2({
  name: "activeCard",
  initialState: initialState2,
  reducers: {
    setActiveCard: (state, action) => {
      state.activeCardId = action.payload;
    }
  }
}), { setActiveCard } = activeCardSlice.actions, activeCardSlice_default = activeCardSlice.reducer;

// app-next/api/hello.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
var api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: ({ search, page }) => `people/?page=${page}&search=${encodeURIComponent(search)}`
    }),
    getPersonById: builder.query({
      query: (id) => `people/${id}/`
    })
  })
}), useGetPeopleQuery = api.endpoints.getPeople.useQuery, useGetPersonByIdQuery = api.endpoints.getPersonById.useQuery;

// app/store/store.ts
var store = configureStore({
  reducer: {
    activeCard: activeCardSlice_default,
    selectedPeople: selectedPeopleSlice_default,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});

// app/index.css
var app_default = "/build/_assets/index-QFEZ24QT.css";

// app/root.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var links = () => [
  ...void 0 ? [{ rel: "stylesheet", href: void 0 }] : [],
  { rel: "stylesheet", href: app_default }
];
function meta() {
  return [
    { charset: "utf-8" },
    { title: "My React App" },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
    { name: "theme-color", content: "#000000" },
    { name: "description", content: "My beautiful React app" }
  ];
}
function Root() {
  return /* @__PURE__ */ jsxDEV3("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV3("head", { children: [
      /* @__PURE__ */ jsxDEV3(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("body", { children: [
      /* @__PURE__ */ jsxDEV3(Provider, { store, children: /* @__PURE__ */ jsxDEV3(ThemeProvider, { children: /* @__PURE__ */ jsxDEV3("div", { id: "root", children: /* @__PURE__ */ jsxDEV3(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV3(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => page_default2
});

// app-next/page.tsx
import { useEffect, useState as useState3 } from "react";

// app/components/button/Button.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Button = ({
  onClick,
  ariaLabel,
  imgSrc,
  imgAlt,
  text,
  className = "",
  disabled = !1,
  type = "button"
}) => /* @__PURE__ */ jsxDEV4(
  "button",
  {
    type,
    onClick,
    "aria-label": ariaLabel,
    disabled,
    className: `button ${className} ${disabled ? "disabled" : ""}`,
    children: [
      imgSrc && /* @__PURE__ */ jsxDEV4(
        "img",
        {
          src: imgSrc,
          alt: imgAlt || "",
          className: "button-icon",
          width: 24,
          height: 24
        },
        void 0,
        !1,
        {
          fileName: "app/components/button/Button.tsx",
          lineNumber: 33,
          columnNumber: 9
        },
        this
      ),
      text && /* @__PURE__ */ jsxDEV4("h5", { className: "button-text", children: text }, void 0, !1, {
        fileName: "app/components/button/Button.tsx",
        lineNumber: 41,
        columnNumber: 16
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/button/Button.tsx",
    lineNumber: 25,
    columnNumber: 5
  },
  this
);

// app/components/card/detailedCard/DetailedCard.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var getIdFromUrl = (url) => {
  let parts = url.split("/");
  return parts[parts.length - 2];
}, DetailedCard = ({ person }) => {
  let imageUrl = `https://starwars-visualguide.com/assets/img/characters/${getIdFromUrl(person.url)}.jpg`;
  return /* @__PURE__ */ jsxDEV5("div", { className: "detailed-card", children: [
    /* @__PURE__ */ jsxDEV5("img", { src: imageUrl, alt: person.name }, void 0, !1, {
      fileName: "app/components/card/detailedCard/DetailedCard.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "detailed-text", children: [
      /* @__PURE__ */ jsxDEV5("h3", { children: person.name }, void 0, !1, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { children: [
        "Height: ",
        person.height,
        " cm"
      ] }, void 0, !0, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { children: [
        "Mass: ",
        person.mass,
        " kg"
      ] }, void 0, !0, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { children: [
        "Hair Color: ",
        person.hair_color
      ] }, void 0, !0, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { children: [
        "Skin Color: ",
        person.skin_color
      ] }, void 0, !0, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { children: [
        "Eye Color: ",
        person.eye_color
      ] }, void 0, !0, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { children: [
        "Birth Year: ",
        person.birth_year
      ] }, void 0, !0, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("p", { children: [
        "Gender: ",
        person.gender
      ] }, void 0, !0, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/card/detailedCard/DetailedCard.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/card/detailedCard/DetailedCard.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};

// app-next/details/[personId]/page.tsx
import { Fragment, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var PersonDetails = ({ personId, onClose }) => {
  let {
    data: person,
    error,
    isLoading
  } = useGetPersonByIdQuery(personId || "");
  return personId ? /* @__PURE__ */ jsxDEV6("div", { className: "person-details", children: isLoading ? /* @__PURE__ */ jsxDEV6("div", { className: "spinner", children: "Loading..." }, void 0, !1, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 27,
    columnNumber: 9
  }, this) : error ? /* @__PURE__ */ jsxDEV6("p", { children: "Something went wrong..." }, void 0, !1, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 29,
    columnNumber: 9
  }, this) : person ? /* @__PURE__ */ jsxDEV6(Fragment, { children: [
    /* @__PURE__ */ jsxDEV6(DetailedCard, { person }, void 0, !1, {
      fileName: "app-next/details/[personId]/page.tsx",
      lineNumber: 32,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV6(
      Button,
      {
        ariaLabel: "Close",
        imgAlt: "Close Icon",
        type: "button",
        onClick: onClose,
        imgSrc: "/assets/close.svg"
      },
      void 0,
      !1,
      {
        fileName: "app-next/details/[personId]/page.tsx",
        lineNumber: 33,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) : /* @__PURE__ */ jsxDEV6("p", { children: "No person details available." }, void 0, !1, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this) : /* @__PURE__ */ jsxDEV6("p", { children: "No person ID provided." }, void 0, !1, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 21,
    columnNumber: 12
  }, this);
}, page_default = PersonDetails;

// app/components/card/baseCard/Card.tsx
import { useDispatch, useSelector } from "react-redux";

// app/hooks/useTheme.ts
import { useContext } from "react";
var useTheme = () => {
  let context = useContext(ThemeContext);
  if (!context)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};

// app/components/checkbox/Checkbox.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Checkbox = ({
  id,
  label,
  checked = !1,
  onChange,
  disabled
}) => {
  let handleChange = (event) => {
    onChange(event.target.checked);
  }, { theme } = useTheme();
  return /* @__PURE__ */ jsxDEV7("div", { className: `checkbox ${theme}`, children: [
    /* @__PURE__ */ jsxDEV7(
      "input",
      {
        type: "checkbox",
        checked,
        disabled,
        onChange: handleChange,
        className: "checkbox-input",
        id
      },
      void 0,
      !1,
      {
        fileName: "app/components/checkbox/Checkbox.tsx",
        lineNumber: 26,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV7("label", { htmlFor: id, className: "checkbox-label", children: label }, void 0, !1, {
      fileName: "app/components/checkbox/Checkbox.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/checkbox/Checkbox.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};

// app/components/card/baseCard/Card.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var Card = ({ person, onClick, isActive }) => {
  let dispatch = useDispatch(), isChecked = useSelector(getSelectedPeopleUrls).includes(person.url), handleCheckboxChange = () => {
    dispatch(togglePersonSelection(person));
  }, handleCheckboxClick = (event) => {
    event.stopPropagation();
  };
  return /* @__PURE__ */ jsxDEV8(
    "div",
    {
      "data-testid": "card",
      onClick,
      className: `card ${isActive ? "active" : ""}`,
      children: [
        /* @__PURE__ */ jsxDEV8("h2", { children: person.name }, void 0, !1, {
          fileName: "app/components/card/baseCard/Card.tsx",
          lineNumber: 34,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8("p", { children: [
          "Gender: ",
          person.gender,
          ", Height: ",
          person.height,
          " cm, Mass: ",
          person.mass,
          " ",
          "kg"
        ] }, void 0, !0, {
          fileName: "app/components/card/baseCard/Card.tsx",
          lineNumber: 35,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV8("div", { onClick: handleCheckboxClick, children: /* @__PURE__ */ jsxDEV8(
          Checkbox,
          {
            id: `checkbox-${person.url}`,
            checked: isChecked,
            onChange: handleCheckboxChange,
            label: `Select ${person.name} to keep in store`
          },
          void 0,
          !1,
          {
            fileName: "app/components/card/baseCard/Card.tsx",
            lineNumber: 40,
            columnNumber: 9
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/card/baseCard/Card.tsx",
          lineNumber: 39,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/card/baseCard/Card.tsx",
      lineNumber: 29,
      columnNumber: 5
    },
    this
  );
};

// app/components/cardList/CardList.tsx
import { useDispatch as useDispatch2, useSelector as useSelector2 } from "react-redux";
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var getIdFromUrl2 = (url) => {
  let parts = url.split("/");
  return parts[parts.length - 2];
}, CardList = ({
  results,
  onResultClick
}) => {
  let dispatch = useDispatch2(), activeCardId = useSelector2(
    (state) => state.activeCard.activeCardId
  ), handleCardClick = (id) => {
    dispatch(setActiveCard(id)), onResultClick(id);
  };
  return /* @__PURE__ */ jsxDEV9("div", { className: "card-list", children: results.map((result) => /* @__PURE__ */ jsxDEV9(
    Card,
    {
      person: result,
      onClick: () => handleCardClick(getIdFromUrl2(result.url)),
      isActive: getIdFromUrl2(result.url) === activeCardId
    },
    getIdFromUrl2(result.url),
    !1,
    {
      fileName: "app/components/cardList/CardList.tsx",
      lineNumber: 37,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/cardList/CardList.tsx",
    lineNumber: 35,
    columnNumber: 5
  }, this);
};

// app/components/floatingPanel/FloatingPanel.tsx
import { useRef } from "react";
import { useDispatch as useDispatch3, useSelector as useSelector3 } from "react-redux";
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var FloatingPanel = () => {
  let selectedPeople = useSelector3(
    (state) => state.selectedPeople.selectedPeople
  ), dispatch = useDispatch3(), { theme } = useTheme(), downloadLinkRef = useRef(null), handleClearSelection = () => {
    dispatch(clearSelection());
  }, handleLoad = () => {
    let headers = [
      "name",
      "birth_year",
      "eye_color",
      "gender",
      "hair_color",
      "height",
      "mass",
      "skin_color",
      "homeworld",
      "films",
      "species",
      "starships",
      "vehicles",
      "url",
      "created",
      "edited"
    ], csvRows = [];
    csvRows.push(headers.join(","));
    for (let person of selectedPeople) {
      let values = headers.map((header) => {
        let value = person[header];
        return Array.isArray(value) ? value.join(", ") : value;
      });
      csvRows.push(values.join(","));
    }
    let csvData = csvRows.join(`
`), blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" }), url = URL.createObjectURL(blob);
    downloadLinkRef.current && (downloadLinkRef.current.href = url, downloadLinkRef.current.download = `${selectedPeople.length}_people.csv`, downloadLinkRef.current.click());
  }, getElementText = (count) => count === 1 ? "element" : "elements";
  return selectedPeople.length === 0 ? null : /* @__PURE__ */ jsxDEV10("div", { className: `floating-panel ${theme}`, children: [
    /* @__PURE__ */ jsxDEV10("p", { children: [
      "Selected ",
      selectedPeople.length,
      " ",
      getElementText(selectedPeople.length)
    ] }, void 0, !0, {
      fileName: "app/components/floatingPanel/FloatingPanel.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV10(
      Button,
      {
        ariaLabel: "Submit",
        text: "Clean",
        onClick: handleClearSelection,
        className: "text-only"
      },
      void 0,
      !1,
      {
        fileName: "app/components/floatingPanel/FloatingPanel.tsx",
        lineNumber: 81,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10(
      Button,
      {
        ariaLabel: "Submit",
        text: "Download",
        onClick: handleLoad,
        className: "text-only"
      },
      void 0,
      !1,
      {
        fileName: "app/components/floatingPanel/FloatingPanel.tsx",
        lineNumber: 87,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV10("a", { ref: downloadLinkRef, style: { display: "none" }, children: "Download" }, void 0, !1, {
      fileName: "app/components/floatingPanel/FloatingPanel.tsx",
      lineNumber: 93,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/floatingPanel/FloatingPanel.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
};

// app/components/Input/SearchInput/SearchInput.tsx
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var SearchInput = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  onKeyDown
}) => /* @__PURE__ */ jsxDEV11("div", { className: "input", children: [
  /* @__PURE__ */ jsxDEV11("label", { htmlFor: name, children: label }, void 0, !1, {
    fileName: "app/components/Input/SearchInput/SearchInput.tsx",
    lineNumber: 30,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV11(
    "input",
    {
      type: "search",
      placeholder,
      value,
      onChange,
      name,
      id: name,
      onKeyDown
    },
    void 0,
    !1,
    {
      fileName: "app/components/Input/SearchInput/SearchInput.tsx",
      lineNumber: 31,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/Input/SearchInput/SearchInput.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this);

// app/components/pagination/Pagination.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => /* @__PURE__ */ jsxDEV12("div", { className: "pagination", children: [
  /* @__PURE__ */ jsxDEV12(
    Button,
    {
      disabled: currentPage === 1,
      ariaLabel: "Previous",
      imgSrc: "/assets/arrows-left.svg",
      imgAlt: "Left Icon",
      type: "button",
      className: "arrow-left icon-invert",
      onClick: () => {
        currentPage > 1 && onPageChange(currentPage - 1);
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/pagination/Pagination.tsx",
      lineNumber: 30,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ jsxDEV12("p", { children: [
    "Page ",
    currentPage,
    " of ",
    totalPages
  ] }, void 0, !0, {
    fileName: "app/components/pagination/Pagination.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV12(
    Button,
    {
      disabled: currentPage === totalPages,
      ariaLabel: "Next",
      imgSrc: "/assets/arrow-right.svg",
      imgAlt: "Right Icon",
      type: "button",
      className: "arrow-right icon-invert",
      onClick: () => {
        currentPage < totalPages && onPageChange(currentPage + 1);
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/pagination/Pagination.tsx",
      lineNumber: 42,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/pagination/Pagination.tsx",
  lineNumber: 29,
  columnNumber: 5
}, this);

// app/hooks/hooks.tsx
import { useCallback as useCallback2, useState as useState2 } from "react";
var useSearchFromLocalStorage = () => {
  let [search, setSearch] = useState2(() => typeof window < "u" ? localStorage.getItem("lastSearch") ?? "" : ""), updateSearch = useCallback2((newSearch) => {
    setSearch(newSearch);
  }, []), saveToLocalStorage = useCallback2((search2) => {
    typeof window < "u" && localStorage.setItem("lastSearch", search2);
  }, []);
  return [search, updateSearch, saveToLocalStorage];
};

// app-next/page.tsx
import { useNavigate } from "@remix-run/react";
import { Fragment as Fragment2, jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var App = () => {
  let [search, setSearch, saveToLocalStorage] = useSearchFromLocalStorage(), [currentPage, setCurrentPage] = useState3(1), [selectedDetail, setSelectedDetail] = useState3(null), { theme, toggleTheme } = useTheme(), navigate = useNavigate();
  useEffect(() => {
    let query = new URLSearchParams(window.location.search), initialPage = parseInt(query.get("page") || "1", 10);
    setCurrentPage(initialPage);
  }, []);
  let { data, error, isLoading } = useGetPeopleQuery({
    search,
    page: currentPage
  });
  useEffect(() => {
    console.log("Selected detail:", selectedDetail);
  }, [selectedDetail]), useEffect(() => {
    isLoading && console.log("Loading..."), error && console.error("API Error:", error), data && console.log("API Data:", data);
  }, [data, error, isLoading]);
  let handleSearchChange = (event) => {
    let newSearch = event.target.value.trim();
    setSearch(newSearch);
  }, handleSubmit = (event) => {
    event.preventDefault(), setCurrentPage(1), saveToLocalStorage(search), navigate("/?page=1");
  }, handleResultClick = (id) => {
    setSelectedDetail(id), navigate(`/?page=${currentPage}&detail=${id}`);
  }, handlePageChange = (page) => {
    setCurrentPage(page), navigate(`/?page=${page}`);
  }, handleContainerClick = () => {
    selectedDetail && (setSelectedDetail(null), navigate(`/?page=${currentPage}`));
  }, handleCloseDetails = () => {
    setSelectedDetail(null), navigate(`/?page=${currentPage}`);
  }, totalPages = data ? Math.ceil(data.count / 10) : 0, themeIcon = theme === "light" ? "/assets/dark.svg" : "/assets/light.svg";
  return /* @__PURE__ */ jsxDEV13("div", { className: `app ${theme}`, children: [
    /* @__PURE__ */ jsxDEV13("div", { className: "app-header", onClick: handleContainerClick, children: [
      /* @__PURE__ */ jsxDEV13("h1", { children: "Star Wars" }, void 0, !1, {
        fileName: "app-next/page.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ jsxDEV13("p", { children: "Something went wrong..." }, void 0, !1, {
        fileName: "app-next/page.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, this) : /* @__PURE__ */ jsxDEV13(Fragment2, { children: [
        /* @__PURE__ */ jsxDEV13("span", { children: "Here you can search some facts about persons from Star Wars by name." }, void 0, !1, {
          fileName: "app-next/page.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ jsxDEV13(
            SearchInput,
            {
              placeholder: "Type to search...",
              value: search,
              onChange: handleSearchChange,
              name: "search"
            },
            void 0,
            !1,
            {
              fileName: "app-next/page.tsx",
              lineNumber: 102,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ jsxDEV13(
            Button,
            {
              ariaLabel: "Search",
              imgSrc: "/assets/search.svg",
              imgAlt: "Search Icon",
              type: "submit",
              className: "search icon-invert"
            },
            void 0,
            !1,
            {
              fileName: "app-next/page.tsx",
              lineNumber: 108,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app-next/page.tsx",
          lineNumber: 101,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV13("div", { className: "buttons", children: /* @__PURE__ */ jsxDEV13(
          Button,
          {
            ariaLabel: "Theme",
            imgSrc: themeIcon,
            imgAlt: "Theme Icon",
            type: "button",
            className: "theme",
            onClick: toggleTheme
          },
          void 0,
          !1,
          {
            fileName: "app-next/page.tsx",
            lineNumber: 117,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app-next/page.tsx",
          lineNumber: 116,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app-next/page.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app-next/page.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13("div", { className: "results-container", children: [
      /* @__PURE__ */ jsxDEV13("div", { className: "results-list", onClick: handleContainerClick, children: isLoading ? /* @__PURE__ */ jsxDEV13("div", { className: "spinner", children: "Loading..." }, void 0, !1, {
        fileName: "app-next/page.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this) : /* @__PURE__ */ jsxDEV13(Fragment2, { children: [
        /* @__PURE__ */ jsxDEV13(
          CardList,
          {
            results: data?.results || [],
            onResultClick: handleResultClick
          },
          void 0,
          !1,
          {
            fileName: "app-next/page.tsx",
            lineNumber: 135,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ jsxDEV13(
          Pagination,
          {
            currentPage,
            totalPages,
            onPageChange: handlePageChange
          },
          void 0,
          !1,
          {
            fileName: "app-next/page.tsx",
            lineNumber: 139,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app-next/page.tsx",
        lineNumber: 134,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app-next/page.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV13("div", { className: "details-view", children: selectedDetail && /* @__PURE__ */ jsxDEV13(
        page_default,
        {
          personId: selectedDetail,
          onClose: handleCloseDetails
        },
        void 0,
        !1,
        {
          fileName: "app-next/page.tsx",
          lineNumber: 149,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app-next/page.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app-next/page.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV13(FloatingPanel, {}, void 0, !1, {
      fileName: "app-next/page.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app-next/page.tsx",
    lineNumber: 90,
    columnNumber: 5
  }, this);
}, page_default2 = App;

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => page_default2
});

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-V3O6XNFN.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-PVNSLVPX.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-FJ44GY64.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3X2ANSGJ.js", imports: ["/build/_shared/chunk-HNR7UIHW.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-YU6IHC36.js", imports: ["/build/_shared/chunk-7TVCQQYT.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-PPSB7LTS.js", imports: ["/build/_shared/chunk-7TVCQQYT.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "33ec43bc", hmr: { runtime: "/build/_shared\\chunk-FJ44GY64.js", timestamp: 1723065412727 }, url: "/build/manifest-33EC43BC.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, unstable_singleFetch: !1, unstable_lazyRouteDiscovery: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
