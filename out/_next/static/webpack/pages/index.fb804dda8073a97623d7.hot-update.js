/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_andylee_Desktop_Portfolio_ReactProfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_andylee_Desktop_Portfolio_ReactProfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectsStyles */ \"./src/components/Projects/ProjectsStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/andylee/Desktop/Portfolio/ReactProfolio/src/components/Projects/Projects.js\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = (0,_Users_andylee_Desktop_Portfolio_ReactProfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    width: 70%;\\n    height: 70%;\\n    object-fit: contain;\\n    \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = (0,_Users_andylee_Desktop_Portfolio_ReactProfolio_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__.default)([\"\\n    width: 40px;\\n    height: 40px;\\n    border-radius: 50%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    cursor: pointer;\\n    background: linear-gradient(to right, #0ea5e9, #6366f1);\\n    padding: 5px;\\n    margin-right: 10px;\\n\\n    &:hover {\\n      background: linear-gradient(to right, #6366f1, #0ea5e9);\\n    }\\n    \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\nvar Projects = function Projects() {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.Section, {\n    nopadding: true,\n    id: \"projects\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.SectionDivider, {\n      divider: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_5__.SectionTitle, {\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      style: {\n        marginTop: '3.5rem',\n        // 14 * 0.25rem\n        display: 'flex',\n        flexDirection: 'row',\n        alignItems: 'stretch',\n        // Default alignment\n        flexWrap: 'wrap',\n        gap: '1.75rem' // 7 * 0.25rem\n        // You can't include media queries directly in inline styles,\n        // so you would handle them either in a separate stylesheet\n        // or by dynamically updating these styles with JavaScript\n\n      },\n      children: _constants_constants__WEBPACK_IMPORTED_MODULE_6__.projects.map(function (project, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(ProjectCard, {\n          index: index,\n          project: project\n        }, \"project-\".concat(index), false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Projects;\nvar cardWidth = 'calc(50% - 1.75rem)';\n\nvar ProjectCard = function ProjectCard(_ref) {\n  var project = _ref.project,\n      index = _ref.index;\n  var name = project.name,\n      description = project.description,\n      tags = project.tags,\n      image = project.image,\n      sourceCodeLink = project.sourceCodeLink,\n      deployedLink = project.deployedLink;\n  var cardStyles = {\n    width: cardWidth,\n    height: '500px',\n    border: '1px solid transparent',\n    borderRadius: '20px',\n    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'\n  };\n  var innerContainerStyles = {\n    position: 'relative',\n    width: '100%',\n    height: '100%',\n    background: 'rgba(255, 255, 255, 0.1)',\n    padding: '20px',\n    borderRadius: '20px'\n  };\n  var imageStyles = {\n    position: 'relative',\n    width: '100%',\n    height: '190px',\n    objectFit: 'cover',\n    borderRadius: '10px'\n  };\n  var buttonContainerStyles = {\n    position: 'absolute',\n    top: '4px',\n    right: '4px',\n    display: 'flex',\n    justifyContent: 'flex-end',\n    gap: '2px',\n    margin: '3px'\n  }; // Styled component for the button\n\n  var LinkButton = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject()); // Styled component for the icon\n\n  var IconStyle = styled_components__WEBPACK_IMPORTED_MODULE_7__.default.div(_templateObject2());\n  var nameStyles = {\n    marginTop: '20px',\n    color: 'white',\n    fontWeight: 'bold',\n    fontSize: '2.5rem'\n  };\n\n  var descriptionStyles = (0,_Users_andylee_Desktop_Portfolio_ReactProfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)({\n    marginTop: '24px',\n    color: '#6b7280',\n    fontSize: '2rem'\n  }, \"color\", '#fff');\n\n  var tagStyles = {\n    marginTop: '10px',\n    display: 'inline-block',\n    marginRight: '8px',\n    fontSize: '1.75rem',\n    color: '#93c5fd'\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    style: cardStyles,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      style: innerContainerStyles,\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        style: imageStyles,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: image,\n          alt: name,\n          loading: \"lazy\",\n          style: imageStyles\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 132,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        style: buttonContainerStyles,\n        children: [deployedLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          onClick: function onClick() {\n            return window.open(deployedLink, \"_blank\");\n          },\n          style: linkButtonStyles,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaExternalLinkAlt, {\n            style: iconStyles,\n            alt: \"link\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 146,\n            columnNumber: 15\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          onClick: function onClick() {\n            return window.open(sourceCodeLink, \"_blank\");\n          },\n          style: linkButtonStyles,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_9__.AiFillGithub, {\n            style: iconStyles,\n            alt: \"github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 156,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        style: nameStyles,\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 162,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n        style: descriptionStyles,\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 163,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"mt-4 flex flex-wrap gap-2\",\n        children: tags.map(function (tag, tagIndex) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n            style: tagStyles,\n            children: [\"#\", tag.name]\n          }, \"\".concat(index, \"-\").concat(tagIndex), true, {\n            fileName: _jsxFileName,\n            lineNumber: 166,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 164,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 131,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 130,\n    columnNumber: 5\n  }, _this);\n};\n\n_c2 = ProjectCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Projects\");\n$RefreshReg$(_c2, \"ProjectCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanM/Y2Q3OSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImZsZXhXcmFwIiwiZ2FwIiwicHJvamVjdHMiLCJwcm9qZWN0IiwiaW5kZXgiLCJjYXJkV2lkdGgiLCJQcm9qZWN0Q2FyZCIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJpbWFnZSIsInNvdXJjZUNvZGVMaW5rIiwiZGVwbG95ZWRMaW5rIiwiY2FyZFN0eWxlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiaW5uZXJDb250YWluZXJTdHlsZXMiLCJwb3NpdGlvbiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiaW1hZ2VTdHlsZXMiLCJvYmplY3RGaXQiLCJidXR0b25Db250YWluZXJTdHlsZXMiLCJ0b3AiLCJyaWdodCIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwiTGlua0J1dHRvbiIsInN0eWxlZCIsIkljb25TdHlsZSIsIm5hbWVTdHlsZXMiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImRlc2NyaXB0aW9uU3R5bGVzIiwidGFnU3R5bGVzIiwibWFyZ2luUmlnaHQiLCJ3aW5kb3ciLCJvcGVuIiwibGlua0J1dHRvblN0eWxlcyIsImljb25TdHlsZXMiLCJtYXAiLCJ0YWciLCJ0YWdJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLHNCQUNmLDhEQUFDLDZEQUFEO0FBQVMsYUFBUyxNQUFsQjtBQUFtQixNQUFFLEVBQUMsVUFBdEI7QUFBQSw0QkFDRSw4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RyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVEYsZUErQkU7QUFBSyxhQUFLLEVBQUVWLFVBQVo7QUFBQSxrQkFBeUIxQjtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0JGLGVBZ0NFO0FBQUcsYUFBSyxFQUFFOEIsaUJBQVY7QUFBQSxrQkFBOEI3QjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENGLGVBaUNFO0FBQUssaUJBQVMsRUFBQywyQkFBZjtBQUFBLGtCQUNHQyxJQUFJLENBQUNtQyxHQUFMLENBQVMsVUFBQ0MsR0FBRCxFQUFNQyxRQUFOO0FBQUEsOEJBQ1I7QUFFRSxpQkFBSyxFQUFFUixTQUZUO0FBQUEsNEJBSUlPLEdBQUcsQ0FBQ3RDLElBSlI7QUFBQSx1QkFDVUgsS0FEVixjQUNtQjBDLFFBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRFE7QUFBQSxTQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnREQsQ0FySUQ7O01BQU14QyxXO0FBdUlOLCtEQUFlWCxRQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBCbG9nQ2FyZCwgQ2FyZEluZm8sIEV4dGVybmFsTGlua3MsIEdyaWRDb250YWluZXIsIEhlYWRlclRocmVlLCBIciwgVGFnLCBUYWdMaXN0LCBUaXRsZUNvbnRlbnQsIFV0aWxpdHlMaXN0LCBJbWcgfSBmcm9tICcuL1Byb2plY3RzU3R5bGVzJztcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBwcm9qZWN0cyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQWlGaWxsR2l0aHViIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuaW1wb3J0IHsgRmFFeHRlcm5hbExpbmtBbHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxuICA8U2VjdGlvbiBub3BhZGRpbmcgaWQ9XCJwcm9qZWN0c1wiPlxuICAgIDxTZWN0aW9uRGl2aWRlciBkaXZpZGVyLz5cbiAgICA8U2VjdGlvblRpdGxlID5Qcm9qZWN0czwvU2VjdGlvblRpdGxlPlxuICAgIFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1hcmdpblRvcDogJzMuNXJlbScsIC8vIDE0ICogMC4yNXJlbVxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgICAgICBhbGlnbkl0ZW1zOiAnc3RyZXRjaCcsIC8vIERlZmF1bHQgYWxpZ25tZW50XG4gICAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAgIGdhcDogJzEuNzVyZW0nLCAvLyA3ICogMC4yNXJlbVxuICAgICAgICAvLyBZb3UgY2FuJ3QgaW5jbHVkZSBtZWRpYSBxdWVyaWVzIGRpcmVjdGx5IGluIGlubGluZSBzdHlsZXMsXG4gICAgICAgIC8vIHNvIHlvdSB3b3VsZCBoYW5kbGUgdGhlbSBlaXRoZXIgaW4gYSBzZXBhcmF0ZSBzdHlsZXNoZWV0XG4gICAgICAgIC8vIG9yIGJ5IGR5bmFtaWNhbGx5IHVwZGF0aW5nIHRoZXNlIHN0eWxlcyB3aXRoIEphdmFTY3JpcHRcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgaW5kZXgpID0+IChcbiAgICAgICAgPFByb2plY3RDYXJkXG4gICAgICAgICAga2V5PXtgcHJvamVjdC0ke2luZGV4fWB9XG4gICAgICAgICAgaW5kZXg9e2luZGV4fVxuICAgICAgICAgIHByb2plY3Q9e3Byb2plY3R9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cblxuICAgIFxuICA8L1NlY3Rpb24+XG4pO1xuXG5jb25zdCBjYXJkV2lkdGggPSAnY2FsYyg1MCUgLSAxLjc1cmVtKSdcblxuY29uc3QgUHJvamVjdENhcmQgPSAoeyBwcm9qZWN0LCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgZGVzY3JpcHRpb24sIHRhZ3MsIGltYWdlLCBzb3VyY2VDb2RlTGluaywgZGVwbG95ZWRMaW5rIH0gPVxuICAgIHByb2plY3Q7XG4gIGNvbnN0IGNhcmRTdHlsZXMgPSB7XG4gICAgd2lkdGg6IGNhcmRXaWR0aCxcbiAgICBoZWlnaHQ6ICc1MDBweCcsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHRyYW5zcGFyZW50JyxcbiAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpJyxcbiAgfTtcblxuICBjb25zdCBpbm5lckNvbnRhaW5lclN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknLFxuICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICcyMHB4JyxcbiAgfTtcblxuICBjb25zdCBpbWFnZVN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzE5MHB4JyxcbiAgICBvYmplY3RGaXQ6ICdjb3ZlcicsXG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gIH07XG5cbiAgY29uc3QgYnV0dG9uQ29udGFpbmVyU3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogJzRweCcsXG4gICAgcmlnaHQ6ICc0cHgnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcbiAgICBnYXA6ICcycHgnLFxuICAgIG1hcmdpbjogJzNweCcsXG4gIH07XG5cbiAgICAgIC8vIFN0eWxlZCBjb21wb25lbnQgZm9yIHRoZSBidXR0b25cbiAgICBjb25zdCBMaW5rQnV0dG9uID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMGVhNWU5LCAjNjM2NmYxKTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM2MzY2ZjEsICMwZWE1ZTkpO1xuICAgIH1cbiAgICBgO1xuXG4gICAgLy8gU3R5bGVkIGNvbXBvbmVudCBmb3IgdGhlIGljb25cbiAgICBjb25zdCBJY29uU3R5bGUgPSBzdHlsZWQuZGl2YFxuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA3MCU7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBgO1xuXG4gIGNvbnN0IG5hbWVTdHlsZXMgPSB7XG4gICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAnMi41cmVtJyxcbiAgfTtcblxuICBjb25zdCBkZXNjcmlwdGlvblN0eWxlcyA9IHtcbiAgICBtYXJnaW5Ub3A6ICcyNHB4JyxcbiAgICBjb2xvcjogJyM2YjcyODAnLFxuICAgIGZvbnRTaXplOiAnMnJlbScsXG4gICAgY29sb3I6ICcjZmZmJ1xuICB9O1xuXG4gIGNvbnN0IHRhZ1N0eWxlcyA9IHtcbiAgICBtYXJnaW5Ub3A6ICcxMHB4JyxcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXJnaW5SaWdodDogJzhweCcsXG4gICAgZm9udFNpemU6ICcxLjc1cmVtJyxcbiAgICBjb2xvcjogJyM5M2M1ZmQnLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17Y2FyZFN0eWxlc30+XG4gICAgICA8ZGl2IHN0eWxlPXtpbm5lckNvbnRhaW5lclN0eWxlc30+XG4gICAgICAgIDxkaXYgc3R5bGU9e2ltYWdlU3R5bGVzfT5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxuICAgICAgICAgICAgYWx0PXtuYW1lfVxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgc3R5bGU9e2ltYWdlU3R5bGVzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXtidXR0b25Db250YWluZXJTdHlsZXN9PlxuICAgICAgICAgIHtkZXBsb3llZExpbmsgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB3aW5kb3cub3BlbihkZXBsb3llZExpbmssIFwiX2JsYW5rXCIpfVxuICAgICAgICAgICAgICBzdHlsZT17bGlua0J1dHRvblN0eWxlc31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZhRXh0ZXJuYWxMaW5rQWx0XG4gICAgICAgICAgICAgICAgc3R5bGU9e2ljb25TdHlsZXN9XG4gICAgICAgICAgICAgICAgYWx0PVwibGlua1wiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHNvdXJjZUNvZGVMaW5rLCBcIl9ibGFua1wiKX1cbiAgICAgICAgICAgIHN0eWxlPXtsaW5rQnV0dG9uU3R5bGVzfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBaUZpbGxHaXRodWJcbiAgICAgICAgICAgICAgc3R5bGU9e2ljb25TdHlsZXN9XG4gICAgICAgICAgICAgIGFsdD1cImdpdGh1YlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17bmFtZVN0eWxlc30+e25hbWV9PC9kaXY+XG4gICAgICAgIDxwIHN0eWxlPXtkZXNjcmlwdGlvblN0eWxlc30+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGZsZXggZmxleC13cmFwIGdhcC0yXCI+XG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcsIHRhZ0luZGV4KSA9PiAoXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBrZXk9e2Ake2luZGV4fS0ke3RhZ0luZGV4fWB9XG4gICAgICAgICAgICAgIHN0eWxlPXt0YWdTdHlsZXN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICN7dGFnLm5hbWV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0czsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Projects/Projects.js\n");

/***/ })

});