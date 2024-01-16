let btns=document.querySelectorAll(".btn");
let submit=document.getElementById("Submit");



btns.forEach(function(buttons){
buttons.addEventListener("click",function(){
   console.log(buttons.attributes.id.value);

   if(buttons.attributes.id.value=="front"){
         document.getElementById("frontend").style.display="block";
         document.getElementById("webDev").style.display="none";
         document.getElementById("python").style.display="none";
   }
  else if(buttons.attributes.id.value=="web"){
   document.getElementById("webDev").style.display="block";
   document.getElementById("frontend").style.display="none";
   document.getElementById("python").style.display="none";
   }

   else if(buttons.attributes.id.value=="py"){
      document.getElementById("python").style.display="block";
      document.getElementById("webDev").style.display="none";
      document.getElementById("frontend").style.display="none";
      }
     
      else if(buttons.attributes.id.value=="all"){
         document.getElementById("python").style.display="block";
         document.getElementById("webDev").style.display="block";
         document.getElementById("frontend").style.display="block";
         }
})
})

function downloadBtn(){
   alert("CV downloaded");
}

submit.addEventListener("click",function(){
   let name=document.getElementById("name");
   let email=document.getElementById("email");
   let msg=document.getElementById("msg");


   if(name.value==""||email==""||msg.value==""){
      alert("please fill Details");
   }else{
      alert("Thanks for connecting");
   }
})



