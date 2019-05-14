let chat=document.getElementById("chat");
let chatMini=document.getElementById("chatMini");
let chatArea=document.getElementById("chat-input");

chatMini.addEventListener("click",function(){
    chat.classList.add("active");
})
chat.querySelector(".close-icon").onclick=function(){
    chat.classList.remove("active"); 
}


chatArea.addEventListener("keypress", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
    }
})

chatArea.addEventListener("keyup",function(e){
if(e.keyCode==13){
    let userInput=this.value.trim();
    if(userInput.length){
        if (userInput[0].toUpperCase() == userInput[0]) {
            AddMessage(userInput, "user"); 
        
        }else{

            AddMessage(userInput, "support"); 

        }
    }
}
})




function AddMessage(a,b){
    
    let div = document.createElement('div');
    div.className="message"+" " +b;
    
    let textP=document.createElement("p");
    textP.innerText=a;

    let timeP = document.createElement('p');
    timeP.className = "time";
    
    let now = new Date();

    timeP.innerText=now.getHours() +":"+now.getMinutes();
   
    div.appendChild(textP);
    div.appendChild(timeP);
    chat.querySelector("main").appendChild(div);
    chatArea.value="";
}