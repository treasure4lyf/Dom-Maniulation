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
