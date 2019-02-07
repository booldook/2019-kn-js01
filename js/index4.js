const log = console.log;

function sendForm() {
  var f = document.join_form;
  var uid = f.uid;
  var pw1 = f.pw1;
  var pw2 = f.pw2;
  var uname = f.uname;
  var email1 = f.email1;
  var email2 = f.email2;
  var tel1 = f.tel1;
  var tel2 = f.tel2;
  var tel3 = f.tel3;
  var gender = f.gender;
  var favorite = f.favorite;
  var mystory = f.mystory;
  if(uid.value == "") {
    alert("아이디를 입력하세요.");
    uid.focus();
    return;
  }
  if(uid.value.length < 8) {
    alert("아이디는 8글자 이상이어야 합니다.");
    uid.focus();
    return;
  }
  if(pw1.value == "") {
    alert("패스워드를 입력하세요.");
    pw1.focus();
    return;
  }
  if(pw2.value == "") {
    alert("패스워드를 입력하세요.");
    pw2.focus();
    return;
  }
  if(pw1.value.length < 8) {
    alert("패스워드는 8글자 이상입니다.");
    pw1.focus();
    return;
  }
  if(pw2.value.length < 8) {
    alert("패스워드는 8글자 이상입니다.");
    pw2.focus();
    return;
  }
  if(pw1.value != pw2.value) {
    alert("패스워드가 일치하지 않습니다.");
    pw1.value = "";
    pw2.value = "";
    pw1.focus();
    return;
  }
  if(uname.value == "") {
    alert("이름을 입력하세요");
    uname.focus();
    return;
  }
  f.submit();
  //log(uid.value.length);
}