res=["1.png","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];
ne=6;

function setImg(frame,i){
   frame.src="thumbs/"+res[i];
}
function setGal(){
   for(i=0;i<ne;i++){
      var g = document.getElementById("g"+i);
      setImg(g,i);
   }
}
function mov_back(){
   var bkp=res[0];
   for(i=0;i<res.length-1;i++){
      res[i]=res[i+1];
   }
   res[res.length-1]=bkp;
}
function mov_next(){
   var bkp=res[res.length-1];
   for(i=res.length-1;i>0;i--){
      res[i]=res[i-1];
   }
   res[0]=bkp;
}
/*
function insert_fr(){
   ne++;
   document.getElementById("dgal").innerHTML+='asd';
   if(ne%3===0){
      document.getElementById("dgal").innerHTML+="<br>";  
   }
}
*/
function genPreview(n){
   var opened = window.open("");
   opened.document.write('<!DOCTYPE html><html><head><title>Preview</title><link rel="stylesheet" href="galerija1.css"></head><body><div id="dprev"><a href="gallery/', res[n], '" ><img class="prev" src="gallery/',res[n],'" alt="Preview" /></a></div></body></html>');
}
function Preload(){
   var images = new Array(res.length-ne);
   var j=0;
   for(i=ne;i<res.length;i++){
      images[j] = new Image();
      images[j].src = "thumbs/" + res[i];
      j++;
   }
}
function main(){
   setInterval(function(){
      mov_next();
      setGal();
   },3000);
}