
//banner image sliding

  var slideImg=document.getElementById("slideImg");
  var images=new Array(
    "my image1.jpeg",
    "my image2.jpg",
    "my image3.jpg"
    );
    var len=images.length;
    var i=0;
    function slider(){
      if(i>len-1){
        i=0;
      }
      slideImg.src=images[i];
      i++;
      setTimeout('slider()',3000);
    }
    
    
    
    
    //THEME
    var icon=document.getElementById("icon");
    icon.onclick=function(){
      document.body.classList.toggle("dark-theme");
      icon.classList.toggle("themeBorder");
    }
      var icon2=document.getElementById("icon2");
    icon2.onclick=function(){
      document.body.classList.toggle("tomato-theme");
     
      icon2.classList.toggle("themeBorder");

    }
      var icon3=document.getElementById("icon3");
    icon3.onclick=function(){
      document.body.classList.toggle("sky-theme");
     
      icon3.classList.toggle("themeBorder");

    }
    
    function openTheme(){
      document.querySelector(".theme").style.left="0px";
      document.querySelector(".themeOpen").style.left="100px";
    }
    function themeClose(){
      document.querySelector(".theme").style.left="-100px";
      document.querySelector(".themeOpen").style.left="0px";
    }
    
    
    
    //search list
    const searchYoutubers= () => {
    let filter=document.getElementById('myInput').value.toUpperCase();
    let ul=document.getElementById('myUl');
    let li=ul.getElementsByTagName('li');
    for(var i=0;i<li.length;i++){
      let a=li[i].getElementsByTagName('a')[0];
      let textValue=a.textContent;
      if(textValue.toUpperCase().indexOf(filter)> -1){
         li[i].style.display='';
      }else{
         li[i].style.display='none';
      }
    }
   }
 
  function mySearch(){
   var input=document.querySelector("#myUl");
   var srcHidden=document.querySelector("#src-box");//for search box auto hidden
  input.classList.remove("ul");
 
  srcHidden.classList.remove("src-opacity");//for search box visible on click of search text
   }
   function rmv(){
   var srcHidden=document.querySelector("#src-box");//for search box auto hidden
   
     var rmv=document.querySelector("#myUl");
     rmv.classList.add("ul");
      
setTimeout(function () {
 srcHidden.classList.add("src-opacity");
       },4000);//for search box auto hidden when clicked on rmove function 
   }



  
  //side menu bar
  
  function openFunction(){
       document.querySelector("#menu").style.width="200px";
       document.querySelector("#mainbox1").style.marginRight="200px";

      }
      function closeFunction(){
          document.querySelector("#menu").style.width="0px";
        document.querySelector("#mainbox1").style.marginRight="0px";
       
      }
      

      
   //password and loading page
     
       var userPass=prompt("Enter the password:");
   var body=document.querySelector("body");

   if(userPass=="maruf.mt"){
      
    var loading3=document.querySelector("#loading3");
      loading3.classList.remove("loader3");
    
       setTimeout(function () {
      loading3.classList.add("loader3");
       },5000);
      body.classList.remove("passBody");
     
     
   }else{
      alert("your password is incorrect.reload the webpage");
      body.classList.add("passBody");
   }
   
   
 /*loading for search list*/
 
   var loading1=document.querySelector("#loading1");
   
  var loading2=document.querySelector("#loading2");
    
   
  var loading4=document.querySelector("#loading4");
    
    
   function loader2_1(){
  loading4.classList.remove("loader4");

   setTimeout(function () {
      loading4.classList.add("loader4");
       },2000);
   }
   
   function loader2_2(){
  loading1.classList.remove("loader1");
 
   setTimeout(function () {
      loading1.classList.add("loader1");
       },2000);
   }
   function loader2_3(){
  loading4.classList.remove("loader4");
  
   setTimeout(function () {
      loading4.classList.add("loader4");
       },2000);
   }
   
    
   function loader2_4(){
  loading2.classList.remove("loader2");

   setTimeout(function () {
      loading2.classList.add("loader2");
       },2500);
   }
  
   
   function loader2_6(){
  loading2.classList.remove("loader2");
 
   setTimeout(function () {
      loading2.classList.add("loader2");
       },2500);
   }





//loading for cv page

  function dwnldbtnLoader(){
  loading2.classList.remove("loader2");
 
   setTimeout(function () {
      loading2.classList.add("loader2");
       },50000);
   }


//search box auto hidden after clicking the search icon

function searchAutoHidden(){
   var srcHidden=document.querySelector("#src-box");
   srcHidden.classList.remove("src-opacity");
    setTimeout(function () {
 srcHidden.classList.add("src-opacity");
       },4000);
}
 
 
 
 
 
//scroll progressbar//
 
   let progress=document.getElementById('progressbar');
     let totalHeight=document.body.scrollHeight-window.innerHeight;
    window.onscroll=function(){
      let progressHeight=(window.pageYOffset / totalHeight)*100;
    progress.style.height=progressHeight + "%";
      
    }
 