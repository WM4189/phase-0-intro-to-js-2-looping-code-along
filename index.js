

function writeCards(name,event) {
  const thankYouCards = [];
    for (let x = 0; x < name.length; x++) {
        thankYouCards.push(`Thank you, ${name[x]}, for the wonderful ${event} gift!`);
        //debugger;
    }
    return thankYouCards;
}





function countDown(i) {
  while (i >= 0) {
    console.log(i--);
  } 
} 



