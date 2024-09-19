const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.cssText = "color: red";
document.body.appendChild(para);


const headerThree = document.createElement("h3");
headerThree.textContent = "I'm a blue h3!";
headerThree.style.cssText = "color: blue";
document.body.appendChild(headerThree);

const div = document.createElement("div");
div.style.textContent = "background: pink";
div.style.border = "1px solid black";
const headerOne = document.createElement("h1");
headerOne.textContent = "I'm in a div"
const paraTwo = document.createElement("p");
paraTwo.textContent = "ME TOO!"
document.body.appendChild(div);
div.appendChild(headerOne);
div.appendChild(paraTwo)

const link = document.querySelector("a");
link.textContent = "Mozilla Developer Network";
link.href = "https://developer.mozilla.org";

const sect = document.querySelector("section");
const paraThree = document.createElement("p");
paraThree.textContent = "We hope you enjoyed the ride.";
sect.appendChild(paraThree);

const text = document.createTextNode(
    " — the premier source for web development knowledge.",
  );
const linkParaThree = document.querySelector("p");
linkParaThree.appendChild(text);
sect.removeChild(linkParaThree);

paraThree.style.color = "white";
paraThree.style.backgroundColor = "black";
paraThree.style.padding = "10px";
paraThree.style.width = "250px";
paraThree.style.textAlign = "center";