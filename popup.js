function search() {
  var query = document.getElementById('search-input').value;
  if (query !== '') {
    var url1 = 'https://news.yahoo.co.jp/search?p=' + encodeURIComponent(query) + '&ei=utf-8';
    var url2 = 'https://www.weblio.jp/content/' + encodeURIComponent(query);
    var url3 = 'https://thesaurus.weblio.jp/content/' + encodeURIComponent(query);
    var url4 = 'https://cjjc.weblio.jp/content/' + encodeURIComponent(query);
    var url5 = 'https://ja.forvo.com/search/' + encodeURIComponent(query);
	

    window.open(url1, '_blank');
    window.open(url2, '_blank');
    window.open(url3, '_blank');
    window.open(url5, '_blank');
  }
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search-input').focus();
});



document.getElementById('search-input').addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    search();
  }
});

document.getElementById('search-button').addEventListener('click', search);
