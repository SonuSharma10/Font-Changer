var inputTxt=document.getElementById("inputText");

function change_text(){
  for(i=0;i<8;i++){
  document.querySelectorAll("#preload")[i].innerHTML=inputTxt.value;}

}
