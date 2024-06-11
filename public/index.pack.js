/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   populateUser: () => (/* binding */ populateUser),
/* harmony export */   showReviewTotal: () => (/* binding */ showReviewTotal)
/* harmony export */ });
const reviewTotalDisplay = document.querySelector('#reviews');
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
function populateUser(isReturning, userName) {
    if (isReturning == true) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./utils.ts");
const propertyContainer = document.querySelector('.properties');

let isOpen;
// Reviews
const reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
// User
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
};
// Array of Properties
const properties = [
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    }
];
// Functions
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.showReviewTotal)(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
(0,_utils__WEBPACK_IMPORTED_MODULE_0__.populateUser)(you.isReturning, you.firstName);
// Add the properties
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = properties[i].title;
    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxLQUFLLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM5QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN2QixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0FBQ3ZDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vdXRpbHMudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3QvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZXZpZXdUb3RhbERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV2aWV3cycpIGFzIEhUTUxFbGVtZW50XHJcbmNvbnN0IHJldHVybmluZ1VzZXJEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JldHVybmluZy11c2VyJykgYXMgSFRNTEVsZW1lbnRcclxuY29uc3QgdXNlck5hbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXInKSBhcyBIVE1MRWxlbWVudFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dSZXZpZXdUb3RhbCh2YWx1ZTogbnVtYmVyLCByZXZpZXdlcjogc3RyaW5nLCBpc0xveWFsdHk6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGljb25EaXNwbGF5ID0gaXNMb3lhbHR5ID8gJ+KtkCcgOiAnJ1xyXG4gICAgcmV2aWV3VG90YWxEaXNwbGF5LmlubmVySFRNTCA9ICdyZXZpZXcgdG90YWwgJyArIHZhbHVlLnRvU3RyaW5nKCkgKyAnfCBsYXN0IHJldmlld2VkIGJ5ICcgKyByZXZpZXdlciArICcgJyArIGljb25EaXNwbGF5XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVVzZXIoaXNSZXR1cm5pbmcgOiBib29sZWFuLCB1c2VyTmFtZTogc3RyaW5nICkge1xyXG4gICAgaWYgKGlzUmV0dXJuaW5nID09IHRydWUpe1xyXG4gICAgICAgIHJldHVybmluZ1VzZXJEaXNwbGF5LmlubmVySFRNTCA9ICdiYWNrJ1xyXG4gICAgfVxyXG4gICAgdXNlck5hbWVEaXNwbGF5LmlubmVySFRNTCA9IHVzZXJOYW1lXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IHByb3BlcnR5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb3BlcnRpZXMnKSBhcyBIVE1MRWxlbWVudFxuXG5pbXBvcnQgeyBzaG93UmV2aWV3VG90YWwsIHBvcHVsYXRlVXNlciB9IGZyb20gJy4vdXRpbHMnXG5sZXQgaXNPcGVuOiBib29sZWFuXG5cbi8vIFJldmlld3NcbmNvbnN0IHJldmlld3MgOiB7IFxuICAgIG5hbWU6IHN0cmluZzsgXG4gICAgc3RhcnM6IG51bWJlcjsgXG4gICAgbG95YWx0eVVzZXI6IGJvb2xlYW47IFxuICAgIGRhdGU6IHN0cmluZ1xuICAgIH1bXSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTaGVpYScsXG4gICAgICAgIHN0YXJzOiA1LFxuICAgICAgICBsb3lhbHR5VXNlcjogdHJ1ZSxcbiAgICAgICAgZGF0ZTogJzAxLTA0LTIwMjEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdBbmRyemVqJyxcbiAgICAgICAgc3RhcnM6IDMsXG4gICAgICAgIGxveWFsdHlVc2VyOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogJzI4LTAzLTIwMjEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdPbWFyJyxcbiAgICAgICAgc3RhcnM6IDQsXG4gICAgICAgIGxveWFsdHlVc2VyOiB0cnVlLFxuICAgICAgICBkYXRlOiAnMjctMDMtMjAyMSdcbiAgICB9LFxuXVxuXG4vLyBVc2VyXG5jb25zdCB5b3U6IHtcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcbiAgICBsYXN0TmFtZTogc3RyaW5nO1xuICAgIGlzUmV0dXJuaW5nOiBib29sZWFuO1xuICAgIGFnZTogbnVtYmVyO1xuICAgIHN0YXllZEF0OiBzdHJpbmdbXVxufSA9IHtcbiAgICBmaXJzdE5hbWU6ICdCb2JieScsXG4gICAgbGFzdE5hbWU6ICdCcm93bicsXG4gICAgaXNSZXR1cm5pbmc6IHRydWUsXG4gICAgYWdlOiAzNSxcbiAgICBzdGF5ZWRBdDogWydmbG9yaWRhLWhvbWUnLCAnb21hbi1mbGF0JywgJ3Rva3lvLWJ1bmdhbG93J11cbn1cblxuLy8gQXJyYXkgb2YgUHJvcGVydGllc1xuY29uc3QgcHJvcGVydGllcyA6IHtcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgcHJpY2U6IG51bWJlcjtcbiAgICBsb2NhdGlvbjoge1xuICAgICAgICBmaXJzdExpbmU6IHN0cmluZztcbiAgICAgICAgY2l0eTogc3RyaW5nO1xuICAgICAgICBjb2RlOiBudW1iZXI7XG4gICAgICAgIGNvdW50cnk6IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnRhY3Q6IFtudW1iZXIsIHN0cmluZ107XG4gICAgaXNBdmFpbGFibGU6IGJvb2xlYW47XG59W10gPSBbXG4gICAge1xuICAgICAgICBpbWFnZTogJ2ltYWdlcy9jb2xvbWJpYS1wcm9wZXJ0eS5qcGcnLFxuICAgICAgICB0aXRsZTogJ0NvbG9tYmlhbiBTaGFjaycsXG4gICAgICAgIHByaWNlOiA0NSxcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICAgIGZpcnN0TGluZTogJ3NoYWNrIDM3JyxcbiAgICAgICAgICAgIGNpdHk6ICdCb2dvdGEnLFxuICAgICAgICAgICAgY29kZTogNDU2MzIsXG4gICAgICAgICAgICBjb3VudHJ5OiAnQ29sb21iaWEnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhY3Q6IFsrMTEyMzQ5NTA4MjkwOCwgJ21hcnl3aW5rbGVAZ21haWwuY29tJ10sXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlICBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaW1hZ2U6ICdpbWFnZXMvcG9sYW5kLXByb3BlcnR5LmpwZycsXG4gICAgICAgIHRpdGxlOiAnUG9saXNoIENvdHRhZ2UnLFxuICAgICAgICBwcmljZTogMzQsXG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgICBmaXJzdExpbmU6ICdubyAyMycsXG4gICAgICAgICAgICBjaXR5OiAnR2RhbnNrJyxcbiAgICAgICAgICAgIGNvZGU6IDM0MzkwMyxcbiAgICAgICAgICAgIGNvdW50cnk6ICdQb2xhbmQnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhY3Q6IFsrMTEyMzQ5NTA4MjkwOCwgJ2dhcnlkYXZpc0Bob3RtYWlsLmNvbSddLFxuICAgICAgICBpc0F2YWlsYWJsZTogZmFsc2UgXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGltYWdlOiAnaW1hZ2VzL2xvbmRvbi1wcm9wZXJ0eS5qcGcnLFxuICAgICAgICB0aXRsZTogJ0xvbmRvbiBGbGF0JyxcbiAgICAgICAgcHJpY2U6IDIzLFxuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgICAgZmlyc3RMaW5lOiAnZmxhdCAxNScsXG4gICAgICAgICAgICBjaXR5OiAnTG9uZG9uJyxcbiAgICAgICAgICAgIGNvZGU6IDM1NDMzLFxuICAgICAgICAgICAgY291bnRyeTogJ1VuaXRlZCBLaW5nZG9tJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFjdDogWyArMTEyMzQ5NTA4MjkwOCwgJ2FuZHlsdWdlckBhb2wuY29tJ10sXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlXG4gICAgfVxuXVxuXG5cbi8vIEZ1bmN0aW9uc1xuc2hvd1Jldmlld1RvdGFsKHJldmlld3MubGVuZ3RoLCByZXZpZXdzWzBdLm5hbWUsIHJldmlld3NbMF0ubG95YWx0eVVzZXIpXG5cbnBvcHVsYXRlVXNlcih5b3UuaXNSZXR1cm5pbmcsIHlvdS5maXJzdE5hbWUpXG5cbi8vIEFkZCB0aGUgcHJvcGVydGllc1xuZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJylcbiAgICBjYXJkLmlubmVySFRNTCA9IHByb3BlcnRpZXNbaV0udGl0bGVcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCBwcm9wZXJ0aWVzW2ldLmltYWdlKVxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgcHJvcGVydHlDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZClcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9