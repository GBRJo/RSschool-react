import {
  ThemeContext,
  clearSelection,
  getSelectedPeopleUrls,
  setActiveCard,
  togglePersonSelection,
  useDispatch,
  useGetPeopleQuery,
  useGetPersonByIdQuery,
  useSelector
} from "/build/_shared/chunk-DOFVYQPE.js";
import {
  useNavigate
} from "/build/_shared/chunk-PVNSLVPX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  createHotContext
} from "/build/_shared/chunk-FJ44GY64.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app-next/page.tsx
var import_react4 = __toESM(require_react(), 1);

// app/components/button/Button.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\button\\\\Button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\button\\Button.tsx"
  );
  import.meta.hot.lastModified = "1722980744241.6316";
}
var Button = ({
  onClick,
  ariaLabel,
  imgSrc,
  imgAlt,
  text,
  className = "",
  disabled = false,
  type = "button"
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type, onClick, "aria-label": ariaLabel, disabled, className: `button ${className} ${disabled ? "disabled" : ""}`, children: [
    imgSrc && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: imgSrc, alt: imgAlt || "", className: "button-icon", width: 24, height: 24 }, void 0, false, {
      fileName: "app/components/button/Button.tsx",
      lineNumber: 33,
      columnNumber: 18
    }, this),
    text && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", { className: "button-text", children: text }, void 0, false, {
      fileName: "app/components/button/Button.tsx",
      lineNumber: 34,
      columnNumber: 16
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/button/Button.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c = Button;
var _c;
$RefreshReg$(_c, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/card/detailedCard/DetailedCard.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\card\\\\detailedCard\\\\DetailedCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\card\\detailedCard\\DetailedCard.tsx"
  );
  import.meta.hot.lastModified = "1722901663978.3706";
}
var getIdFromUrl = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};
var DetailedCard = ({
  person
}) => {
  const personId = getIdFromUrl(person.url);
  const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${personId}.jpg`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "detailed-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: imageUrl, alt: person.name }, void 0, false, {
      fileName: "app/components/card/detailedCard/DetailedCard.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "detailed-text", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { children: person.name }, void 0, false, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Height: ",
        person.height,
        " cm"
      ] }, void 0, true, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Mass: ",
        person.mass,
        " kg"
      ] }, void 0, true, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Hair Color: ",
        person.hair_color
      ] }, void 0, true, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Skin Color: ",
        person.skin_color
      ] }, void 0, true, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Eye Color: ",
        person.eye_color
      ] }, void 0, true, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Birth Year: ",
        person.birth_year
      ] }, void 0, true, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
        "Gender: ",
        person.gender
      ] }, void 0, true, {
        fileName: "app/components/card/detailedCard/DetailedCard.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/card/detailedCard/DetailedCard.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/card/detailedCard/DetailedCard.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c2 = DetailedCard;
var _c2;
$RefreshReg$(_c2, "DetailedCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app-next/details/[personId]/page.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app-next\\\\details\\\\[personId]\\\\page.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app-next\\details\\[personId]\\page.tsx"
  );
  import.meta.hot.lastModified = "1722987239538.8445";
}
var PersonDetails = ({
  personId,
  onClose
}) => {
  _s();
  const {
    data: person,
    error,
    isLoading
  } = useGetPersonByIdQuery(personId || "");
  if (!personId) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "No person ID provided." }, void 0, false, {
      fileName: "app-next/details/[personId]/page.tsx",
      lineNumber: 38,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "person-details", children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "spinner", children: "Loading..." }, void 0, false, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 41,
    columnNumber: 20
  }, this) : error ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "Something went wrong..." }, void 0, false, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 41,
    columnNumber: 72
  }, this) : person ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DetailedCard, { person }, void 0, false, {
      fileName: "app-next/details/[personId]/page.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Button, { ariaLabel: "Close", imgAlt: "Close Icon", type: "button", onClick: onClose, imgSrc: "/assets/close.svg" }, void 0, false, {
      fileName: "app-next/details/[personId]/page.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 41,
    columnNumber: 114
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: "No person details available." }, void 0, false, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 44,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app-next/details/[personId]/page.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s(PersonDetails, "TdfkqGCBp2NzyaPkrrMsLrnEn2c=", false, function() {
  return [useGetPersonByIdQuery];
});
_c3 = PersonDetails;
var page_default = PersonDetails;
var _c3;
$RefreshReg$(_c3, "PersonDetails");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/useTheme.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useTheme.ts"
  );
  import.meta.hot.lastModified = "1722901663983.5837";
}
var useTheme = () => {
  const context = (0, import_react.useContext)(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// app/components/checkbox/Checkbox.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\checkbox\\\\Checkbox.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\checkbox\\Checkbox.tsx"
  );
  import.meta.hot.lastModified = "1722901663979.369";
}
var Checkbox = ({
  id,
  label,
  checked = false,
  onChange,
  disabled
}) => {
  _s2();
  const handleChange = (event) => {
    onChange(event.target.checked);
  };
  const {
    theme
  } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: `checkbox ${theme}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "checkbox", checked, disabled, onChange: handleChange, className: "checkbox-input", id }, void 0, false, {
      fileName: "app/components/checkbox/Checkbox.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: id, className: "checkbox-label", children: label }, void 0, false, {
      fileName: "app/components/checkbox/Checkbox.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/checkbox/Checkbox.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s2(Checkbox, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
  return [useTheme];
});
_c4 = Checkbox;
var _c4;
$RefreshReg$(_c4, "Checkbox");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/card/baseCard/Card.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\card\\\\baseCard\\\\Card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\card\\baseCard\\Card.tsx"
  );
  import.meta.hot.lastModified = "1722901663977.3738";
}
var Card = ({
  person,
  onClick,
  isActive
}) => {
  _s3();
  const dispatch = useDispatch();
  const selectedIds = useSelector(getSelectedPeopleUrls);
  const isChecked = selectedIds.includes(person.url);
  const handleCheckboxChange = () => {
    dispatch(togglePersonSelection(person));
  };
  const handleCheckboxClick = (event) => {
    event.stopPropagation();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { "data-testid": "card", onClick, className: `card ${isActive ? "active" : ""}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { children: person.name }, void 0, false, {
      fileName: "app/components/card/baseCard/Card.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: [
      "Gender: ",
      person.gender,
      ", Height: ",
      person.height,
      " cm, Mass: ",
      person.mass,
      " ",
      "kg"
    ] }, void 0, true, {
      fileName: "app/components/card/baseCard/Card.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { onClick: handleCheckboxClick, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Checkbox, { id: `checkbox-${person.url}`, checked: isChecked, onChange: handleCheckboxChange, label: `Select ${person.name} to keep in store` }, void 0, false, {
      fileName: "app/components/card/baseCard/Card.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/card/baseCard/Card.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/card/baseCard/Card.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s3(Card, "R+exOH3eGdObMVvAdTh+XLAb/68=", false, function() {
  return [useDispatch, useSelector];
});
_c5 = Card;
var _c5;
$RefreshReg$(_c5, "Card");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/cardList/CardList.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\cardList\\\\CardList.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\cardList\\CardList.tsx"
  );
  import.meta.hot.lastModified = "1722901663979.369";
}
var getIdFromUrl2 = (url) => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};
var CardList = ({
  results,
  onResultClick
}) => {
  _s4();
  const dispatch = useDispatch();
  const activeCardId = useSelector((state) => state.activeCard.activeCardId);
  const handleCardClick = (id) => {
    dispatch(setActiveCard(id));
    onResultClick(id);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "card-list", children: results.map((result) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Card, { person: result, onClick: () => handleCardClick(getIdFromUrl2(result.url)), isActive: getIdFromUrl2(result.url) === activeCardId }, getIdFromUrl2(result.url), false, {
    fileName: "app/components/cardList/CardList.tsx",
    lineNumber: 42,
    columnNumber: 30
  }, this)) }, void 0, false, {
    fileName: "app/components/cardList/CardList.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_s4(CardList, "uKbdp97MV8+j/huwaIgs5mWFmNI=", false, function() {
  return [useDispatch, useSelector];
});
_c6 = CardList;
var _c6;
$RefreshReg$(_c6, "CardList");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/floatingPanel/FloatingPanel.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\floatingPanel\\\\FloatingPanel.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\floatingPanel\\FloatingPanel.tsx"
  );
  import.meta.hot.lastModified = "1722901663980.3643";
}
var FloatingPanel = () => {
  _s5();
  const selectedPeople = useSelector((state) => state.selectedPeople.selectedPeople);
  const dispatch = useDispatch();
  const {
    theme
  } = useTheme();
  const downloadLinkRef = (0, import_react2.useRef)(null);
  const handleClearSelection = () => {
    dispatch(clearSelection());
  };
  const handleLoad = () => {
    const headers = ["name", "birth_year", "eye_color", "gender", "hair_color", "height", "mass", "skin_color", "homeworld", "films", "species", "starships", "vehicles", "url", "created", "edited"];
    const csvRows = [];
    csvRows.push(headers.join(","));
    for (const person of selectedPeople) {
      const values = headers.map((header) => {
        const value = person[header];
        return Array.isArray(value) ? value.join(", ") : value;
      });
      csvRows.push(values.join(","));
    }
    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    if (downloadLinkRef.current) {
      downloadLinkRef.current.href = url;
      downloadLinkRef.current.download = `${selectedPeople.length}_people.csv`;
      downloadLinkRef.current.click();
    }
  };
  const getElementText = (count) => {
    return count === 1 ? "element" : "elements";
  };
  if (selectedPeople.length === 0) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: `floating-panel ${theme}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: [
      "Selected ",
      selectedPeople.length,
      " ",
      getElementText(selectedPeople.length)
    ] }, void 0, true, {
      fileName: "app/components/floatingPanel/FloatingPanel.tsx",
      lineNumber: 70,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { ariaLabel: "Submit", text: "Clean", onClick: handleClearSelection, className: "text-only" }, void 0, false, {
      fileName: "app/components/floatingPanel/FloatingPanel.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Button, { ariaLabel: "Submit", text: "Download", onClick: handleLoad, className: "text-only" }, void 0, false, {
      fileName: "app/components/floatingPanel/FloatingPanel.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("a", { ref: downloadLinkRef, style: {
      display: "none"
    }, children: "Download" }, void 0, false, {
      fileName: "app/components/floatingPanel/FloatingPanel.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/floatingPanel/FloatingPanel.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
};
_s5(FloatingPanel, "azJOweYsLV28s/Prp5oulsoSTtc=", false, function() {
  return [useSelector, useDispatch, useTheme];
});
_c7 = FloatingPanel;
var _c7;
$RefreshReg$(_c7, "FloatingPanel");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/Input/SearchInput/SearchInput.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Input\\\\SearchInput\\\\SearchInput.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Input\\SearchInput\\SearchInput.tsx"
  );
  import.meta.hot.lastModified = "1722901663971.3887";
}
var SearchInput = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  onKeyDown
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "input", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("label", { htmlFor: name, children: label }, void 0, false, {
      fileName: "app/components/Input/SearchInput/SearchInput.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("input", { type: "search", placeholder, value, onChange, name, id: name, onKeyDown }, void 0, false, {
      fileName: "app/components/Input/SearchInput/SearchInput.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Input/SearchInput/SearchInput.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_c8 = SearchInput;
var _c8;
$RefreshReg$(_c8, "SearchInput");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/pagination/Pagination.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\pagination\\\\Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\pagination\\Pagination.tsx"
  );
  import.meta.hot.lastModified = "1722901663982.501";
}
var Pagination = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "pagination", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button, { disabled: currentPage === 1, ariaLabel: "Previous", imgSrc: "/assets/arrows-left.svg", imgAlt: "Left Icon", type: "button", className: "arrow-left icon-invert", onClick: handlePrevious }, void 0, false, {
      fileName: "app/components/pagination/Pagination.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: [
      "Page ",
      currentPage,
      " of ",
      totalPages
    ] }, void 0, true, {
      fileName: "app/components/pagination/Pagination.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Button, { disabled: currentPage === totalPages, ariaLabel: "Next", imgSrc: "/assets/arrow-right.svg", imgAlt: "Right Icon", type: "button", className: "arrow-right icon-invert", onClick: handleNext }, void 0, false, {
      fileName: "app/components/pagination/Pagination.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/pagination/Pagination.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_c9 = Pagination;
var _c9;
$RefreshReg$(_c9, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/hooks/hooks.tsx
var import_react3 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\hooks.tsx"
  );
  import.meta.hot.lastModified = "1722901663983.5837";
}
var useSearchFromLocalStorage = () => {
  const [search, setSearch] = (0, import_react3.useState)(() => {
    if (typeof window !== "undefined") {
      const lastSearch = localStorage.getItem("lastSearch");
      return lastSearch ?? "";
    }
    return "";
  });
  const updateSearch = (0, import_react3.useCallback)((newSearch) => {
    setSearch(newSearch);
  }, []);
  const saveToLocalStorage = (0, import_react3.useCallback)((search2) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lastSearch", search2);
    }
  }, []);
  return [search, updateSearch, saveToLocalStorage];
};

// app-next/page.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app-next\\\\page.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app-next\\page.tsx"
  );
  import.meta.hot.lastModified = "1722986341519.1924";
}
var App = () => {
  _s6();
  const [search, setSearch, saveToLocalStorage] = useSearchFromLocalStorage();
  const [currentPage, setCurrentPage] = (0, import_react4.useState)(1);
  const [selectedDetail, setSelectedDetail] = (0, import_react4.useState)(null);
  const {
    theme,
    toggleTheme
  } = useTheme();
  const navigate = useNavigate();
  (0, import_react4.useEffect)(() => {
    const query = new URLSearchParams(window.location.search);
    const initialPage = parseInt(query.get("page") || "1", 10);
    setCurrentPage(initialPage);
  }, []);
  const {
    data,
    error,
    isLoading
  } = useGetPeopleQuery({
    search,
    page: currentPage
  });
  (0, import_react4.useEffect)(() => {
    console.log("Selected detail:", selectedDetail);
  }, [selectedDetail]);
  (0, import_react4.useEffect)(() => {
    if (isLoading) {
      console.log("Loading...");
    }
    if (error) {
      console.error("API Error:", error);
    }
    if (data) {
      console.log("API Data:", data);
    }
  }, [data, error, isLoading]);
  const handleSearchChange = (event) => {
    const newSearch = event.target.value.trim();
    setSearch(newSearch);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    saveToLocalStorage(search);
    navigate(`/?page=1`);
  };
  const handleResultClick = (id) => {
    setSelectedDetail(id);
    navigate(`/?page=${currentPage}&detail=${id}`);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    navigate(`/?page=${page}`);
  };
  const handleContainerClick = () => {
    if (selectedDetail) {
      setSelectedDetail(null);
      navigate(`/?page=${currentPage}`);
    }
  };
  const handleCloseDetails = () => {
    setSelectedDetail(null);
    navigate(`/?page=${currentPage}`);
  };
  const totalPages = data ? Math.ceil(data.count / 10) : 0;
  const themeIcon = theme === "light" ? "/assets/dark.svg" : "/assets/light.svg";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: `app ${theme}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "app-header", onClick: handleContainerClick, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "Star Wars" }, void 0, false, {
        fileName: "app-next/page.tsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      error ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { children: "Something went wrong..." }, void 0, false, {
        fileName: "app-next/page.tsx",
        lineNumber: 104,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Here you can search some facts about persons from Star Wars by name." }, void 0, false, {
          fileName: "app-next/page.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("form", { onSubmit: handleSubmit, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(SearchInput, { placeholder: "Type to search...", value: search, onChange: handleSearchChange, name: "search" }, void 0, false, {
            fileName: "app-next/page.tsx",
            lineNumber: 110,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { ariaLabel: "Search", imgSrc: "/assets/search.svg", imgAlt: "Search Icon", type: "submit", className: "search icon-invert" }, void 0, false, {
            fileName: "app-next/page.tsx",
            lineNumber: 111,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app-next/page.tsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "buttons", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Button, { ariaLabel: "Theme", imgSrc: themeIcon, imgAlt: "Theme Icon", type: "button", className: "theme", onClick: toggleTheme }, void 0, false, {
          fileName: "app-next/page.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app-next/page.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app-next/page.tsx",
        lineNumber: 104,
        columnNumber: 51
      }, this)
    ] }, void 0, true, {
      fileName: "app-next/page.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "results-container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "results-list", onClick: handleContainerClick, children: isLoading ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "spinner", children: "Loading..." }, void 0, false, {
        fileName: "app-next/page.tsx",
        lineNumber: 120,
        columnNumber: 24
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(CardList, { results: data?.results || [], onResultClick: handleResultClick }, void 0, false, {
          fileName: "app-next/page.tsx",
          lineNumber: 121,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Pagination, { currentPage, totalPages, onPageChange: handlePageChange }, void 0, false, {
          fileName: "app-next/page.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app-next/page.tsx",
        lineNumber: 120,
        columnNumber: 68
      }, this) }, void 0, false, {
        fileName: "app-next/page.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "details-view", children: selectedDetail && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(page_default, { personId: selectedDetail, onClose: handleCloseDetails }, void 0, false, {
        fileName: "app-next/page.tsx",
        lineNumber: 126,
        columnNumber: 30
      }, this) }, void 0, false, {
        fileName: "app-next/page.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app-next/page.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(FloatingPanel, {}, void 0, false, {
      fileName: "app-next/page.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app-next/page.tsx",
    lineNumber: 101,
    columnNumber: 10
  }, this);
};
_s6(App, "ie1qvCBPdge0u6S1OPp15e9/rN4=", false, function() {
  return [useSearchFromLocalStorage, useTheme, useNavigate, useGetPeopleQuery];
});
_c10 = App;
var page_default2 = App;
var _c10;
$RefreshReg$(_c10, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  page_default2 as page_default
};
//# sourceMappingURL=/build/_shared/chunk-32E3ZG7O.js.map
