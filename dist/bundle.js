/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/source.js":
/*!***********************!*\
  !*** ./src/source.js ***!
  \***********************/
/***/ (() => {

eval("const burger = document.getElementById(\"burger\"),\r\n    tabMenu = document.querySelector(\".tab-bar\"),\r\n    navContainer = document.querySelector(\"nav\"),\r\n    itemsBurger = document.querySelectorAll(\".item-burger\"),\r\n    submitBtn = document.querySelector(\".submit-btn-form\"),\r\n    body = document.querySelector(\"body\"),\r\n    contactForm = document.querySelector(\".contact-form\"),\r\n    links = document.querySelectorAll(\"li\"),\r\n    line = document.querySelector(\".line-cross\"),\r\n    containerLins = document.querySelector(\".nav-items\"),\r\n    tabBurgerMenu = document.querySelector(\".tab-burger-menu\"),\r\n    backgroundBlack = document.querySelector(\".background-black\")\r\n\r\nline.style.width = `${links[0].getBoundingClientRect().width}px`\r\nline.style.transform = `translate(${links[0].offsetLeft - line.offsetLeft}px, 5px)`\r\n\r\ncontainerLins.addEventListener(\"click\", switcherLine)\r\ntabMenu.addEventListener(\"click\", tabClick)\r\nbody.addEventListener(\"click\", contactHandler)\r\ntabBurgerMenu.addEventListener(\"click\", linkHandler)\r\nburger.addEventListener(\"click\", burgerClick)\r\nnavContainer.addEventListener(\"click\", navHandler)\r\n\r\nfunction burgerClick(event) {\r\n    let item = event.target\r\n    \r\n    if(item.classList.contains(\"burger\") || item.classList.contains(\"line-burger\") || item.classList.contains(\"burger-menu\")) {\r\n        burger.classList.toggle(\"handleActive\")\r\n        tabMenu.classList.toggle(\"handleActive\")\r\n        backgroundBlack.classList.toggle(\"handleActive\")\r\n    }\r\n}\r\n\r\nfunction linkHandler(event) {\r\n    event.preventDefault()\r\n    let item = event.target\r\n\r\n    if (item.nodeName === \"A\") {\r\n        backgroundBlack.classList.toggle(\"handleActive\")\r\n    }\r\n}\r\n\r\nfunction tabClick(event) {\r\n    event.preventDefault\r\n\r\n    const activeTab = event.target\r\n    if (activeTab.nodeName === \"A\") {\r\n        slowScroll(activeTab)\r\n        \r\n        activeTab.parentElement.classList.add(\"active\")\r\n\r\n        itemsBurger.forEach(element => {\r\n            element !== activeTab.parentElement ? element.classList.remove(\"active\") : false\r\n        })\r\n\r\n        burger.classList.toggle(\"handleActive\")\r\n        tabMenu.classList.toggle(\"handleActive\")\r\n    }\r\n}\r\n\r\nfunction contactHandler(event) {\r\n    let item = event.target\r\n\r\n    if (item.classList.contains(\"contact-btn\")) {\r\n        contactForm.style.display = \"block\"\r\n        contactForm.classList.toggle(\"activeContact\")\r\n\r\n    }else if (item.classList.contains(\"contact-form\")){\r\n\r\n        contactForm.classList.toggle(\"activeContact\")\r\n        contactForm.style.display = \"none\"\r\n    }\r\n}\r\n\r\nfunction switcherLine(event) {\r\n    \r\n    const activeLink = event.target\r\n    const widthActive = activeLink.getBoundingClientRect().width\r\n\r\n    if (activeLink.nodeName === 'A') {\r\n        line.style.width = `${widthActive}px`\r\n\r\n        const width = activeLink.offsetLeft - line.offsetLeft\r\n        line.style.transform = `translate(${width}px, 5px)`\r\n    }\r\n}\r\n\r\nfunction navHandler(event) {\r\n    event.preventDefault()\r\n\r\n    let link = event.target\r\n\r\n    if (link.classList.contains(\"link-item\")) {\r\n        slowScroll(link)\r\n    }\r\n}\r\n\r\nfunction slowScroll(link) {\r\n    let topOffset = 0\r\n    let href = link.getAttribute('href').substring(1)\r\n    const scrollTarget = document.getElementById(href)\r\n    const elementPosition = scrollTarget.getBoundingClientRect().top\r\n    const offsetPosition = elementPosition - topOffset\r\n\r\n    window.scrollTo({\r\n        top: offsetPosition,\r\n        behavior: 'smooth'\r\n    })\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://studyusa/./src/source.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/source.js"]();
/******/ 	
/******/ })()
;