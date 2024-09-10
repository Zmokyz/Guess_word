function Randomwrd(){
    let Randwrd = wordList[Math.floor(Math.random() * wordList.length)];
    let Word =Randwrd.word;
    console.log(Word)

}

Randomwrd()
