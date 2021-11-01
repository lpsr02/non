// con =content 
var i;
let nav_grafic = document.getElementById("nav_grafic");
let nav_trans = document.getElementById("nav_trans");
let nav_anim = document.getElementById("nav_anim");
let nav_digit = document.getElementById("nav_digit");
let nav_music = document.getElementById("nav_music");
let nav_tech = document.getElementById("nav_tech");
let nav_data = document.getElementById("nav_data");
let nav_busines = document.getElementById("nav_busines");
let nav_life = document.getElementById("nav_life");
nav_grafic.addEventListener("mouseover", function(){megaMenuShow("nav_grafic")});
nav_trans.addEventListener("mouseover", function(){megaMenuShow("nav_trans")});
nav_anim.addEventListener("mouseover", function(){megaMenuShow("nav_anim")});
nav_digit.addEventListener("mouseover", function(){megaMenuShow("nav_digit")});
nav_music.addEventListener("mouseover", function(){megaMenuShow("nav_music")});
nav_tech.addEventListener("mouseover", function(){megaMenuShow("nav_tech")});
nav_data.addEventListener("mouseover", function(){megaMenuShow("nav_data")});
nav_busines.addEventListener("mouseover", function(){megaMenuShow("nav_busines")});
nav_life.addEventListener("mouseover", function(){megaMenuShow("nav_life")});

function megaMenuShow(show){
    switch(show){
      case "nav_grafic":
        for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
           if (i === 0) {
              document.getElementsByClassName("main-nv")[i].style.display ="block";
        }else{
              document.getElementsByClassName("main-nv")[i].style.display = "none";}
      };
      break;
      case "nav_trans":
        for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
            if (i === 1) {
                document.getElementsByClassName("main-nv")[i].style.display ="block";
                document.getElementsByClassName("main-nv")[i].style.backgroundColor ="red";
            }else{
            document.getElementsByClassName("main-nv")[i].style.display = "none";}
          };
      break;
      case "nav_anim":
        for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
            if (i === 2) {
                document.getElementsByClassName("main-nv")[i].style.display ="block";
                document.getElementsByClassName("main-nv")[i].style.backgroundColor ="green";
            }else{
            document.getElementsByClassName("main-nv")[i].style.display = "none";}
          };
      break;
      case "nav_digit":
        for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
            if (i === 3) {
                document.getElementsByClassName("main-nv")[i].style.display ="block";
                document.getElementsByClassName("main-nv")[i].style.backgroundColor ="blue";
            }else{
            document.getElementsByClassName("main-nv")[i].style.display = "none";}
          };
      break;
      case "nav_music":
        for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
            if (i === 4) {
                document.getElementsByClassName("main-nv")[i].style.display ="block";
                document.getElementsByClassName("main-nv")[i].style.backgroundColor ="black";
            }else{
            document.getElementsByClassName("main-nv")[i].style.display = "none";}
          };
      break;
      case "nav_tech":
        for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
            if (i === 5) {
                document.getElementsByClassName("main-nv")[i].style.display ="block";
                document.getElementsByClassName("main-nv")[i].style.backgroundColor ="gray";
            }else{
            document.getElementsByClassName("main-nv")[i].style.display = "none";}
          };
      break;
      case "nav_data":
        for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
            if (i === 6) {
                document.getElementsByClassName("main-nv")[i].style.display ="block";
                document.getElementsByClassName("main-nv")[i].style.backgroundColor ="whitesmoke";
            }else{
            document.getElementsByClassName("main-nv")[i].style.display = "none";}
          };
      break;
      case "nav_busines":
        for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
            if (i === 7) {
                document.getElementsByClassName("main-nv")[i].style.display ="block";
                document.getElementsByClassName("main-nv")[i].style.backgroundColor ="skyblue";
            }else{
            document.getElementsByClassName("main-nv")[i].style.display = "none";}
          };
      break;
      case "nav_life":
        for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
            if (i === 8) {
                document.getElementsByClassName("main-nv")[i].style.display ="block";
                document.getElementsByClassName("main-nv")[i].style.backgroundColor ="violet";
            }else{
            document.getElementsByClassName("main-nv")[i].style.display = "none";}
          };
      break;
          
    }
}
// all content heifd on mouse out from contennt megamenu 
for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
   var nav_content = document.getElementsByClassName("main-nv");
   nav_content[i].addEventListener("mouseout", function(){myfunct("hide");});
   if(i === 0){
    nav_content[i].addEventListener("mouseover",function(){ megaMenuShow("nav_grafic")});
   }else if(i === 1){
    nav_content[i].addEventListener("mouseover",function(){ megaMenuShow("nav_trans")});
   }else if (i === 2 ){
    nav_content[i].addEventListener("mouseover",function(){ megaMenuShow("nav_anim")});
   }else if(i === 3){
    nav_content[i].addEventListener("mouseover",function(){ megaMenuShow("nav_digit")});
   }else if(i === 4){
    nav_content[i].addEventListener("mouseover",function(){ megaMenuShow("nav_music")});
   }else if(i === 5){
    nav_content[i].addEventListener("mouseover",function(){ megaMenuShow("nav_tech")});
   }else if(i === 6){
    nav_content[i].addEventListener("mouseover",function(){ megaMenuShow("nav_data")});
   }else if(i === 7){
    nav_content[i].addEventListener("mouseover",function(){ megaMenuShow("nav_busines")});
   }else if(i === 8){
    nav_content[i].addEventListener("mouseover",function(){ megaMenuShow("nav_life")});
   }
};
function myfunct(y){
  switch(y){
      case "hide":
for (i = 0; i < document.getElementsByClassName("main-nv").length; i++) {
    var nav_content = document.getElementsByClassName("main-nv")[i];
    nav_content.style.display ="none";
 }; 
break;
   }  
}

// mouse out from nabar link then hide mega menu 
for(i = 0; i<document.getElementsByClassName("nav-link").length; i++){
let nav_links = document.getElementsByClassName("nav-link")[i];
nav_links.addEventListener("mouseout", function(){myfunct("hide")});}
// nav-trans"nav_animid="nav_digit nav_music nav_tech nav_data nav_busines nav_life





