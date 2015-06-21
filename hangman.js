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

//Chooses random integer from hangmanWords array index
function randomWord(){
  var index = Math.floor(Math.random() * hangmanWords.length);
// return randomWord[index];
console.log(index);
}



function hangman(word) {
    var alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $.each(alpha.split(''), function(i, val) {
        $('#alpha').append($('<span class="guess">' + val + '</span>'));
    });
    $.each(word.split(''), function(i, val) {
        $('#word').append($('<span class="letter" letter="' + val + '">_</span>'));
    });
    $('.guess').click(function() {
        var count = $('#word [letter=' + $(this).text() + ']').each(function() {
            $(this).text($(this).attr('letter'));
        }).length;
        $(this).removeClass('guess').css('color', (count > 0 ? 'green' : 'red')).unbind('click');
    });
}

$(document).ready(function() {
    $('#BUT').click(function() {
        hangman('EXTRA');
    });
});
