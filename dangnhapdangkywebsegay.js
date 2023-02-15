function animateTitle() 
{
  i >= message.length - 1 ? (i = 0) : i++,
    (document.title = message[i]),
    setTimeout("animateTitle()", 200);
}
var message = [
"Đăng nhập OoO Đăng ký",
"Đăng nhập oOo Đăng ký",
  ],
  i = 0;
animateTitle();

var LG = document.getElementById(IdLogIn)
var RG = document.getElementById(IdRegister)
function changtoRegister()
{
LG.hidden = true;
RG.hidden = false;
}