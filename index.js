var randomnumber1=Math.random();
randomnumber1=(randomnumber1*6);
randomnumber1=(Math.floor(randomnumber1)+1);

var randomnumber2=Math.random();
randomnumber2=(randomnumber2*6);
randomnumber2=(Math.floor(randomnumber2)+1);

if(randomnumber1===1)
document.querySelector(".img1").setAttribute("src","images/dice1.png");

else if(randomnumber1===2)
document.querySelector(".img1").setAttribute("src","images/dice2.png");

else if(randomnumber1===3)
document.querySelector(".img1").setAttribute("src","images/dice3.png");

else if(randomnumber1===4)
document.querySelector(".img1").setAttribute("src","images/dice4.png");

else if(randomnumber1===5)
document.querySelector(".img1").setAttribute("src","images/dice5.png");

else if(randomnumber1===6)
document.querySelector(".img1").setAttribute("src","images/dice6.png");

//this is an alternative shorter way
var randomimage="images/dice"+randomnumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",randomimage);

if(randomnumber1>randomnumber2)
document.querySelector("h1").textContent="Player 1 wins🚩"
else if(randomnumber1<randomnumber2)
document.querySelector("h1").textContent="Player 2 wins🚩"
else if(randomnumber1===randomnumber2)
document.querySelector("h1").textContent="Draw ,try again!!☺️"