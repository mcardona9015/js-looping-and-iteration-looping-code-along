// Code your solutions in this file

function writeCards( cards, event ) {
    for (let index = 0; index < cards.length; index++) {

        console.log(`Thank you, ${cards[index]}, for the wonderful ${event} gift!`);
   
    }
}

function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i = i - 1;
    } 
}
