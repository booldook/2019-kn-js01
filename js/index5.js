// var : ES5
// let : ES6
var Man = {
  weight: 75,
  height: 175,
  name: "홍길동",
  gender: "M",
  run: function(){
    console.log("뛴다");
  },
  eat: function(){
    console.log("먹는다");
  }
};
Man.name = "홍길순";
console.log(Man.name);
Man.run();
Man.eat();

var Human = (function(){
  function Human(name) {
    this.name = name;
  }
  Human.prototype.eat = function(food){
    console.log(this.name + "이(가) "+ food + "을(를) 먹습니다.");
  }
  return Human;
}());

// ES6
/*
class Human {
  constructor() {

  }
  function eat() {
    
  }
}
*/

var hong = new Human("홍길동");
console.log(hong);
console.log(hong.name);
hong.eat("양꼬치");

var kilsun = new Human("홍길순");
console.log(kilsun);
console.log(kilsun.name);
kilsun.eat("회");

/*
jQUery를 쓰는 이유
1. 선택자가 편하다...
2. animate, fadeIn, fadeOut, slideDown, slideUp, hide, show
*/

/* $("#box1").click(function(){
  $(this).animate({"width":"100%", "height":"100%"}, 2000);
}); */

$("#box1").click(function(){
  $(this).animate({"width":"100%"}, 1000, function(){
    $(this).animate({"height":"100%"}, 500);
  });
});

/*
var n = 0;
var interval = setInterval(function(){
  log(n++);
}, 500);
*/

$("#music > li").each(function(){
  var li = $(this);
  var interval = setInterval(function(){
    var per = Math.floor(Math.random()*70)+30;
    li.css({"height":per+"%"});
  }, 100);
});

var Equalizer = (function(){
  function Equalizer(parent, bgColor, size){
    var obj = this;
    var html = '<ul>';
    for(var i=1; i<=5; i++) html += '<li></li>';
    html += '</ul>';
    this.parent = $(parent);
    this.bgColor = bgColor;
    this.size = size;
    this.parent.append(html);
    this.ul = this.parent.children("ul");
    this.li = this.ul.children("li");
    this.ul.css({
      "width":this.size+"px",
      "height":this.size+"px",
      "position":"relative",
    });
    this.li.css({
      "background-color":this.bgColor, 
      "width":"20%",
      "height":"20%",
      "position":"absolute",
      "bottom":"0"
    });
    //this.li[0].style.backgroundColor = this.bgColor;
  }
  return Equalizer;
}());


var eq = new Equalizer($(".eq"), "#f90", 200);

{/* <ul id="music" class="clear">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul> */}