var buttn=document.getElementsByTagName("button")[0];
var input=document.getElementsByTagName("input")[0];
var ul=document.getElementsByTagName("ul")[0];
var togg=document.getElementsByClassName("a")[0];


buttn.addEventListener("click",function(){
   if(input.value != ""){
   	 var butt=document.createElement("button")
     var li=document.createElement("li");
     butt.appendChild(document.createTextNode("delete"));
     li.appendChild(document.createTextNode(input.value));
     li.appendChild(butt);
     ul.appendChild(li);
     input.value=''

   }
})
input.addEventListener("keypress",function(event){
   if(input.value != "" && event.which===13){
     var butt=document.createElement("button")
     var li=document.createElement("li");
     butt.appendChild(document.createTextNode("delete"));
     li.appendChild(document.createTextNode(input.value));
     li.appendChild(butt);
     ul.appendChild(li);
     input.value=''
   }
})