
  const suits = ['hearts', 'clubs', 'spades', 'diamonds']

  const faces = [
    { name: 'Ace', value: 1 },
    { name: 'Two', value: 2 },
    { name: 'Three', value: 3 },
    { name: 'Four', value: 4 },
    { name: 'Five', value: 5 },
    { name: 'Six', value: 6 },
    { name: 'Seven', value: 7 },
    { name: 'Eight', value: 8 },
    { name: 'Nine', value: 9 },
    { name: 'Ten', value: 10 },
    { name: 'Jack', value: 11 },
    { name: 'Queen', value: 12 },
    { name: 'King', value: 13 }
  ]
  const deck = []

  // function to creat a deck of cards
  const createDeck = () => {
    for (let suitsIndex = 0; suitsIndex < suits.length; suitsIndex++) {
      // console.log(suits[suitsIndex])
      for (let faceIndex = 0; faceIndex < faces.length; faceIndex++) {
        const name = faces[faceIndex].name
        const value = faces[faceIndex].value
        const suit = suits[suitsIndex]
        // console.log(face)
        deck.push({
          suit: suit,
          name: name,
          value: value
        })
       
      }
    }
  }

const shuffleDeck = () => {}
const printFirstTwoCards = () => {}
 // print out the first two cards
 for (let i = 0; i < 2; i++) {
   //create a new p tag
   const newElement = document.createElement('p')
   //update the contect of the new p tag
   newElement.tectContent = deck[i]
   //add the new p tag to the DOM
   document.querySelector('.cards').appendChild(newElement)
 }
const main =() => {
  createDeck()
  printFirstTwoCards()
}
    

document.addEventListener('DOMContentLoaded', main)