/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');
const reviewTotalDisplay = document.querySelector('#reviews');
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
function showReviewTotal(value, reviewer, isLoyalty) {
    const iconDisplay = isLoyalty ? '⭐' : '';
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
const you = {
    userName: 'Bobby',
    isReturning: true,
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName;
}
populateUser(you.isReturning, you.userName);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgucGFjay5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXNDO0FBQ3RDLGdFQUFnRTtBQUNoRSxpQ0FBaUM7QUFDakMsV0FBVztBQUNYLE1BQU0sb0JBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBZ0I7QUFDckYsTUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQWdCO0FBQ3RFLE1BQU0sa0JBQWtCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQWdCO0FBQzVFLE1BQU0sT0FBTyxHQUFHO0lBQ1o7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLEtBQUssRUFBRSxDQUFDO1FBQ1IsV0FBVyxFQUFFLElBQUk7UUFDakIsSUFBSSxFQUFFLFlBQVk7S0FDckI7SUFDRDtRQUNJLElBQUksRUFBRSxTQUFTO1FBQ2YsS0FBSyxFQUFFLENBQUM7UUFDUixXQUFXLEVBQUUsS0FBSztRQUNsQixJQUFJLEVBQUUsWUFBWTtLQUNyQjtJQUNEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixLQUFLLEVBQUUsQ0FBQztRQUNSLFdBQVcsRUFBRSxJQUFJO1FBQ2pCLElBQUksRUFBRSxZQUFZO0tBQ3JCO0NBQ0o7QUFDRCxTQUFTLGVBQWUsQ0FBQyxLQUFhLEVBQUUsUUFBZ0IsRUFBRSxTQUFrQjtJQUN4RSxNQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUN4QyxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsZUFBZSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxxQkFBcUIsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLFdBQVc7QUFDNUgsQ0FBQztBQUVELGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUt4RSxNQUFNLEdBQUcsR0FBRztJQUNSLFFBQVEsRUFBRSxPQUFPO0lBQ2pCLFdBQVcsRUFBRSxJQUFJO0NBQ3BCO0FBR0QsU0FBUyxZQUFZLENBQUMsV0FBcUIsRUFBRSxRQUFpQjtJQUMxRCxJQUFJLFdBQVcsRUFBQyxDQUFDO1FBQ2Isb0JBQW9CLENBQUMsU0FBUyxHQUFHLE1BQU07SUFDM0MsQ0FBQztJQUNELGVBQWUsQ0FBQyxTQUFTLEdBQUcsUUFBUTtBQUN4QyxDQUFDO0FBRUQsWUFBWSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2plY3QvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOdW1iZXIgVHlwZXMgbWluaS1jaGFsbGVuZ2UgMTAgMTAuMlxuLy8gV3JpdGUgYSBmdW5jdGlvbiB0aGF0IHdpbGwgb25seSBhY2NlcHQgbnVtYmVycyBhbmQgYXR0ZW5kIHRvIFxuLy8gYWxsIFR5cGVTY3JpcHQgd2Vha25lc3MgZmxhZ3MuXG4vLyA6IG51bWJlclxuY29uc3QgcmV0dXJuaW5nVXNlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmV0dXJuaW5nLXVzZXInKSBhcyBIVE1MRWxlbWVudFxuY29uc3QgdXNlck5hbWVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXInKSBhcyBIVE1MRWxlbWVudFxuY29uc3QgcmV2aWV3VG90YWxEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jldmlld3MnKSBhcyBIVE1MRWxlbWVudFxuY29uc3QgcmV2aWV3cyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdTaGVpYScsXG4gICAgICAgIHN0YXJzOiA1LFxuICAgICAgICBsb3lhbHR5VXNlcjogdHJ1ZSxcbiAgICAgICAgZGF0ZTogJzAxLTA0LTIwMjEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdBbmRyemVqJyxcbiAgICAgICAgc3RhcnM6IDMsXG4gICAgICAgIGxveWFsdHlVc2VyOiBmYWxzZSxcbiAgICAgICAgZGF0ZTogJzI4LTAzLTIwMjEnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdPbWFyJyxcbiAgICAgICAgc3RhcnM6IDQsXG4gICAgICAgIGxveWFsdHlVc2VyOiB0cnVlLFxuICAgICAgICBkYXRlOiAnMjctMDMtMjAyMSdcbiAgICB9LFxuXVxuZnVuY3Rpb24gc2hvd1Jldmlld1RvdGFsKHZhbHVlOiBudW1iZXIsIHJldmlld2VyOiBzdHJpbmcsIGlzTG95YWx0eTogYm9vbGVhbikge1xuICAgIGNvbnN0IGljb25EaXNwbGF5ID0gaXNMb3lhbHR5ID8gJ+KtkCcgOiAnJ1xuICAgIHJldmlld1RvdGFsRGlzcGxheS5pbm5lckhUTUwgPSAncmV2aWV3IHRvdGFsICcgKyB2YWx1ZS50b1N0cmluZygpICsgJ3wgbGFzdCByZXZpZXdlZCBieSAnICsgcmV2aWV3ZXIgKyAnICcgKyBpY29uRGlzcGxheVxufVxuXG5zaG93UmV2aWV3VG90YWwocmV2aWV3cy5sZW5ndGgsIHJldmlld3NbMF0ubmFtZSwgcmV2aWV3c1swXS5sb3lhbHR5VXNlcilcblxuXG5cblxuY29uc3QgeW91ID0ge1xuICAgIHVzZXJOYW1lOiAnQm9iYnknLFxuICAgIGlzUmV0dXJuaW5nOiB0cnVlLFxufVxuXG5cbmZ1bmN0aW9uIHBvcHVsYXRlVXNlcihpc1JldHVybmluZyA6IGJvb2xlYW4sIHVzZXJOYW1lIDogc3RyaW5nICkge1xuICAgIGlmIChpc1JldHVybmluZyl7XG4gICAgICAgIHJldHVybmluZ1VzZXJEaXNwbGF5LmlubmVySFRNTCA9ICdiYWNrJ1xuICAgIH1cbiAgICB1c2VyTmFtZURpc3BsYXkuaW5uZXJIVE1MID0gdXNlck5hbWVcbn1cblxucG9wdWxhdGVVc2VyKHlvdS5pc1JldHVybmluZywgeW91LnVzZXJOYW1lKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=