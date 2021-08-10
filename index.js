
const writeCards = (name,event) => {
  let newArray = []
  for(let e of name) {
     newArray.push(`Thank you, ${e}, for the wonderful ${event} gift!`)  
  }
  return newArray
}

const countDown = num => {
  for(let i = num; i>=0; i--) {
    console.log(i);
  }
}
countDown(10);

////do it again /////
// function writeCards(name,event) {
//   const thankYouCards = [];
//     for (let x = 0; x < name.length; x++) {
//         thankYouCards.push(`Thank you, ${name[x]}, for the wonderful ${event} gift!`);
//         //debugger;
//     }
//     return thankYouCards;
// }





// function countDown(i) {
//   while (i >= 0) {
//     console.log(i--);
//   } 
// } 



