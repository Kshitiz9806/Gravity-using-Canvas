var canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext("2d");
var g = 0.5;
var x = innerWidth/2;
var y=50;
var v=0;
var g = Number(prompt("Enter the value of accelartion due to gravity that you want"));
c.strokeStyle = 'red';
var myArr =
[
	'#FFF073', '#EB9A74', '#E26EFF', '#69FF7C', '#3191EB', '#86D5EB', '#B76EFF', '#FAFDFB', '#ACFF9C', '#70DEE6'
];

var mouse = {
	x:undefined,
	y:undefined
}

c.strokeStyle = 'red';

function Ball(x, y, r, v)
{
	this.x = x;
	this.y = y;
	this.r = r;
	this.v = v;
	this.color = myArr[Math.floor(Math.random()*myArr.length)];
	
	this.draw = function()
	{
		c.beginPath();
		c.arc(this.x, this.y, this.r, 0, Math.PI*2, false);
		c.fillStyle = this.color;
		c.fill();
	}
	
	this.update = function()
	{
		this.y += this.v;
		if(this.y > innerHeight - this.r)
		{
			this.v = -this.v;
		}
		else
		{
			this.v += g;
		}
		this.draw();
	}
}

var balls = [];

addEventListener('click',function(event){
	mouse.x = event.x;
	mouse.y = event.y;
	balls.push(new Ball(mouse.x,mouse.y,(Math.random()*20)+10,g,0));
})



function animate()
{
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	for(var i = 0 ; i < balls.length ; i++ )
	{
		balls[i].update();
	}
}

animate();

window.addEventListener('resize', function(){
	alert("Page needs to be refreshed");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	reload();
})

/*	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI*2, false);
	c.stroke();
	c.fill();
	y += v;
	if(y > innerHeight - 20)
	{
		v = -v;
	}
	else
	{
		v += g;
	}	*/