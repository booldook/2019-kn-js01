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
    console.log(this.li);
    console.log(this.li[3]);
    console.log(this.li.eq(3));
    console.log(this.li.eq(3)[0]);   
    this.ul.css({
      "width":this.size+"px",
      "height":this.size+"px",
      "position":"relative",
    });
    this.li.each(function(i){
      $(this).css({
        "background-color":obj.bgColor, 
        "width":"20%",
        "height":"20%",
        "left":(i*20)+"%",
        "position":"absolute",
        "bottom":"0"
      });
      var li = $(this);
      var interval = setInterval(function(){
        li.css({
          "height":(Math.floor(Math.random()*81)+20)+"%"
        });
      }, 100);
    });
  }
  return Equalizer;
}());