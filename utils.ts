const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement
import { LoyaltyUser } from './enums'


export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) : void {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay.innerHTML = 'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay
}

export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

export function showDetails(value: boolean | Permissions | string , element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

function add( firstValue: number, secondValue: number ) : number {
    return firstValue + secondValue
}

export function makeMultiple(value: number) {
    if (value > 1) {
        return 's'
    } 
}
// function add(firstValue : (number| string), secondValue: (number| string)) {
//     let result
//     if (typeof firstValue === 'number' && typeof secondValue === 'number') {
//         result = firstValue + secondValue
//     }
//     if (typeof firstValue === 'string' && typeof secondValue === 'string') {
//         result = firstValue + ' ' + secondValue
//     }
//     if (typeof firstValue === 'number' && typeof secondValue === 'string') {
//         console.log('cannot perform this addition')
//     }
//     if (typeof firstValue === 'string' && typeof secondValue === 'number') {
//         console.log('cannot perform this addition')
//     }
// }