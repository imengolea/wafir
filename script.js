/*switch-language*/
function en(){
  let $en =document.getElementById("big-heading").innerHTML = "Awesome discount codes";
  let $en1 =document.getElementById("site-link").innerHTML = "Go to the site";
  let $en2 =document.getElementById("site-link2").innerHTML = "Go to the site";
  let $en3 =document.getElementById("site-link3").innerHTML = "Go to the site";
  let $enc =document.getElementById("Copyright").innerHTML = "©️All rights reserved to Wafirr 2021 ";

}
function ar(){
  let $ar =document.getElementById("big-heading").innerHTML = "اكواد خصم رهيبة";
  let $ar1 =document.getElementById("site-link").innerHTML = "الذهاب الى الموقع";
  let $ar2 =document.getElementById("site-link2").innerHTML = "الذهاب الى الموقع";
  let $ar3 =document.getElementById("site-link3").innerHTML = "الذهاب الى الموقع";
  let $arc =document.getElementById("Copyright").innerHTML = "جميع الحقوق محفوظة لموقع وفر 2021 ©️";

}

/*copy-to-clipboard*/
/*coupon1*/
function copy(copyId) {
  let inputElement = document.createElement("input");
  inputElement.type = "text";
  let copyText = document.getElementById(copyId).innerHTML;
  inputElement.value = copyText;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);

  document.getElementById("alert").style.display = "block";
  setTimeout(function() {
    document.getElementById("alert").style.display = "none";
  }, 1000);

}
/*coupon2*/
function copy2(copyId) {
  let inputElement = document.createElement("input");
  inputElement.type = "text";
  let copyText = document.getElementById(copyId).innerHTML;
  inputElement.value = copyText;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);

  document.getElementById("alert2").style.display = "block";
  setTimeout(function() {
    document.getElementById("alert2").style.display = "none";
  }, 1000);

}
/*coupon3*/
function copy3(copyId) {
  let inputElement = document.createElement("input");
  inputElement.type = "text";
  let copyText = document.getElementById(copyId).innerHTML;
  inputElement.value = copyText;
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand('copy');
  document.body.removeChild(inputElement);

  document.getElementById("alert3").style.display = "block";
  setTimeout(function() {
    document.getElementById("alert3").style.display = "none";
  }, 1000);

}
