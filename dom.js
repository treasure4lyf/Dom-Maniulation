const container = document.querySelector("#container");
const para = document.createElement("p");
para.style.color = "red";
para.textContent = "hey i'm a red text";
container.appendChild(para);

const head = document.createElement("h3");
head.style.color = "blue";
head.textContent = "hey i'm a blue text";
container.appendChild(head);

const diva = document.createElement("div");
diva.textContent = "im diva";
diva.style.cssText = "border: black; background: pink;";

const hia = document.createElement("h1");
hia.textContent = "I'm a child";
diva.appendChild(hia); 

const parah = document.createElement("p");
diva.appendChild(parah);
container.appendChild(diva);

const btn = document.querySelector("#btn"); 
btn.addEventListener('click', () => {
    document.body.style.backgroundColor = "fuchsia";
});

function alertFunction() {
    alert("you are welcome");
}
 btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) { 
    console.log(e);
});

btn.addEventListener('click', function (e) { 
    console.log(e.target);
});
btn.addEventListener('click', function (e) { 
    e.target.style.background = 'red';
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      alert(button.id);
    });
});







