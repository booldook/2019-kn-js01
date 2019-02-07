const log = console.log;

//반복문
// i++ --> i = i + 1;
//for(초기값; 조건; 증가값) {반복할 구문}

/*
$("#bt-ok").click(function(){
  for(var i=1; i<=100; i++) {
    $("#box-wrap").append('<div>'+i+'</div>');
  }
});

$("#bt-init").click(function(){
  //$("#box-wrap").html('');
  $("#box-wrap").empty();
});
*/ 

var btOk = document.getElementById("bt-ok");
var btInit = document.getElementById("bt-init");
var boxWrap = document.getElementById("box-wrap");
btOk.addEventListener("click", function(){
  for(var i=1; i<=100; i++) {
    boxWrap.innerHTML += '<div>'+i+'</div>';
  }
});

btInit.addEventListener("click", function(){
  boxWrap.innerHTML = '';
});




