var wordsMap = parseCheckWords(words);

var regNewLine = new RegExp("\n","g");
var wordsRegex = generateWordsRegex(words);

function checkAndMark(article){
    var htmlMarketArticle = article.replace(regNewLine,"<br /><br />\n");
    
    var length = words.length;
		for (var i=0; i < length; i++) {
		  htmlMarketArticle = htmlMarketArticle.replace(wordsRegex[i],"<span class='mark'>"+words[i]+"</span>");
		}

    return htmlMarketArticle;
}


function generateWordsRegex(words){
		var length = words.length;
		var wordsRegex = new Array(length);
		for (var i=0; i < length; i++) {
			wordsRegex[i] = new RegExp(words[i],"g");
		}
		return wordsRegex;
}

//todo:多层hash查找
function parseCheckWords(words){
    return words;
}