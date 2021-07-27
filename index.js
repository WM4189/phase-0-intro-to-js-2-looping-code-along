/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old.  Happy birthday to me!`);
    //debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

wrapGifts(gifts); 

*/


function writeCards(name,event) {
  const thankYouCards = [];
    for (let x = 0; x < name.length; x++) {
        thankYouCards.push(`Thank you, ${name[x]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return thankYouCards;
}
writeCards( ["Timmy", "Tommy", "Chucky"], "suprise" );



/*  Why is this wrong??

function countDown(i) {
  while (i >= 0) {
    console.log(`Logged ${[i]} many times.`);
    console.log(i--);
  }
      return i;
}
countDown(10);
*/


function countDown() {
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown --);
  }
  return countDown;
}
countDown(10);