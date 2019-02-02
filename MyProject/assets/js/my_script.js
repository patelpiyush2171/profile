/*typing effect mate*/

function typinng(){
setInterval(typeWriter,200);
var i = 0;
var j = 0;
var txt0="Hello..";
var txt = 'I Am UI Designer !..';
var txt1 = txt.length;
function typeWriter() {
  if (j < txt0.length) {
    document.getElementById("words").innerHTML += txt0.charAt(j);
    j++;
  }
  if (i < txt1) {
    document.getElementById("words1").innerHTML += txt.charAt(i);
    i++;

  }
  
}
}

/*------------------------------------*/


$(document).ready(function(){
  $(window).scroll(function(){
    var a=document.getElementById("skill");
    var b=document.getElementById("html");
    var c=document.getElementById("css");
    var d=document.getElementById("bootstrap");
    var e=document.getElementById("javascript");
    var f=document.getElementById("jquery");
    var g=document.getElementById("angular");
  	var scroll = $(window).scrollTop();
    if(window.pageYOffset >= 900){
      b.classList.add("html");
      c.classList.add("css");
      d.classList.add("bs");
      e.classList.add("js");
      f.classList.add("jq");
      g.classList.add("ag");
    }
	  if (scroll >= 50) {
	    $(".navi").addClass("navColor");
      $(".navFont").addClass("navFontColor");
      $("#up").removeClass("up_add");

	  }
	  else{
		  $(".navi").removeClass("navColor");
      $(".navFont").removeClass("navFontColor");
      $("#up").addClass("up_add");
	  }
  });
});

$(document).ready(function(){
  $("#comment").click(function(){
    $(".box").animate({
      width: "toggle"
    });

  });
});

$(document).ready(function(){
  $("#comment_1").click(function(){
    $(".box").animate({
      width: "toggle"
    });

  });
});