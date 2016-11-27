$(document).ready(function(){
  var quotes = ['"A dream does not become reality through magic; it takes sweat, determination, and hard work." - Colin Powell', 
  '"Success is the result of perfection, hard work, learning from failure, loyalty, and persistence." - Colin Powell', 
  '"Nothing ever comes to one, that is worth having, except as a result of hard work." - Booker T. Washington', 
  '"I learned the value of hard work by working hard" - Margaret Mead', 
  '"Out work everyone. If you are working harder than everybody, then what are you worrying about?" - John Sonmez', 
  '"Those dreams that you have, those goals that you have, do not put them off another second. Get on them. Go out and make them happen starting right now" - Jocko Willink', 
  '"Go to bed tired." - Tim Kennedy', 
  '"Do that thing that you dont know if you can do. Stop being afraid of hard work." - Tim Kennedy', 
  '"Discipline equals freedom. The more discipline you have, the harder you work, the more effort you put into it, the more freedom you are going to have." - Jocko Willink',
  '"Dont think about it, start doing it." - Anonymous'];
  var rand = quotes[Math.floor( Math.random() * quotes.length )];
  $('blockquote').text(rand);  
  $('#newQuote').click(function(){
    $('blockquote').text(quotes[Math.floor( Math.random() * quotes.length )]);
  });
  $('#tweet').click(function(){
    $('#tweet').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent(rand));
  });
});