/* GLOBAL VARIABLES UP HERE */
var frontPage = 'https://www.reddit.com/.json';





$(document).ready(function(){
/* FUNCTION EXECUTION HERE */
  console.log('Go forth and code!');
  getReddit();
});



/* FUNCTION DEFINITION HERE */
/* TIP: don't forget scope! */
function getReddit(){
  console.log("In getReddit()");
  $.ajax({
    method: "GET",
    url: frontPage,
    datatype: "json",
    success: onSuccess,
    error: onError,
    // complete: onComplete
  });
}

function onSuccess(json){
  console.log(json);
  for (var i = 0; i < json.data.children.length; i++) {
    console.log(json.data.children[i].data.thumbnail);
    var title = json.data.children[i].data.title;
    var thumbnail = json.data.children[i].data.thumbnail;
    $('#main').append(`<img src="${thumbnail}">
                       <p>${title}</p>`);

  }
}

function onError(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
