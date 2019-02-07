// var : ES5
// let : ES6
const log = console.log;
var Man = {
  weight: 75,
  height: 175,
  name: "홍길동",
  gender: "M",
  run: function(){
    log("뛴다");
  },
  eat: function(){
    log("먹는다");
  }
};
Man.name = "홍길순";
log(Man.name);
Man.run();
Man.eat();

var Human = (function(){
  function Human(_name) {
    this.name = _name;
  }
  return Human;
}());

var hong = new Human("홍길동");
log(hong);
log(hong.name);

var kilsun = new Human("홍길순");
log(kilsun);
log(kilsun.name);

