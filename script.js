const questions = [

{
q:"Do you know how much I love you? ❤️",
a:["A lot","Too much"]
},

{
q:"Are you the cutest person in my life? 👻❤️",
a:["Yes obviously","Of course I am"]
},

{
q:"Do you know you make my day better every time? ✨",
a:["Yes","Maybe"]
},

{
q:"Will you always stay with me? ❤️",
a:["Yes","Forever"]
},

{
q:"Do you know I can't stay mad at you even for a second? 👻",
a:["I know","I knew it"]
},

{
q:"You are my favorite human in this world 🌎❤️",
a:["True","100% true"]
},

{
q:"I am really sorry… Will you forgive me? 🥺❤️",
a:["Yes ❤️","No 🙈"],
final:true
}

];

let index = 0;

function showQuestion(){

const q = questions[index];

document.getElementById("question").innerText = q.q;

const options = document.getElementById("options");

options.innerHTML="";

q.a.forEach(text=>{

const btn = document.createElement("button");

btn.innerText=text;

if(q.final && text.includes("No")){

btn.id="noBtn";

btn.onmouseover=()=>{
btn.style.position="absolute";
btn.style.top=Math.random()*80+"%";
btn.style.left=Math.random()*80+"%";
};

}

else if(q.final && text.includes("Yes")){

btn.onclick = celebrate;

}

else{

btn.onclick = nextQuestion;

}

options.appendChild(btn);

});

}

function nextQuestion(){

index++;

showQuestion();

}

function celebrate(){

document.getElementById("celebration").style.display="flex";

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerText="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.top="70%";

heart.style.fontSize="30px";

heart.style.animation="explode 2s forwards";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),2000);

}

}

showQuestion();