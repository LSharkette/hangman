var hangmanWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

var cleanWords;

function limitArray(){
  var cleanWords = [];

  for(var i=0, j=hangmanWords.length,w; i<j; i++) {
    w=hangmanWords[i];
    if(w.length>=3){
      cleanWords.push(w);
    }
  }

  hangmanWords= cleanWords;
  return hangmanWords;
  console.log(cleanWords);
}
limitArray();


function randomWord(c){
  var index = Math.floor(Math.random() * hangmanWords.length);
// return randomWord[index];
console.log(index);
return c[index];
}
var answer= randomWord(limitArray());


function dashify(randomWord){
dashes=[];
for(var i=0; i < randomWord.length; i++){
dashes.push("_");
document.querySelector('span').textContent = dashes.join("");
}
console.log(dashes);
}
dashify(answer);
console.log(answer);
