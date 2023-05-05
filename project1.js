//==========================
// глобальные переменные
//==========================
ziznHeart = 3;
ziznKishki = 3;
ziznLiver = 3;
ziznLegkie = 3;

var status = "open";

var p4 = null;
var p1 = null;
var p2 = null;
var p3 = null;

var description = "Your job today is to stop microbs killing your organs";



// ===========================
function random(max) {
	//random number
	var rand = 1 + Math.random() * (max + 1);
	//making number float
	rand = Math.floor(rand);
	return rand;
}

function random1(min, max) {
	var isclLeft = 600 - 0;
    var x = Math.floor(Math.random() * ((max - min)-isclLeft)) + min;
    if (x >= 0)
    x += isclLeft;
    return x;
}
function random2(min, max) {
	var isclTop = 800 - 0;
    var y = Math.floor(Math.random() * ((max - min)-isclTop)) + min;
    if (y >= 0)
    y += isclTop;
    return y;
}
		
// функции создания ===============//

/*<div id = "start-block">
	<button id="start-button">Begin</button>
</div>*/
function creatingStartBlock() {
	//creating start Block
	startBlock = document.createElement("div");
	startBlock.id = "start-block";
	//creating start button
	startButton = document.createElement("button");
	startButton.id = "start-button";
	startButton.innerText = "Begin";
	description1 = document.createElement("h1");
	description1.id = "description1";
	description1.innerText = "Hello Doc";
	description2 = document.createElement("p");
	description2.id = "description2";
	description2.innerText = description;
	//adding variables to game field
	startBlock.appendChild(description1);
	startBlock.appendChild(description2);
	startBlock.appendChild(startButton);
	game.appendChild(startBlock);

}

function microb111() {
	// создаем первый микроб
	var microb1 = document.createElement("div");
	microb1.id = "microb1";
	var picture = document.createElement("img");
	picture.src = "image/microb1.png";
	microb1.appendChild(picture);
	// делаем рандомное расположение (чтобы с разных сторон летело)
	setTimeout(function(){
		microb1.style.top = random1(-200, 800) + "px";
		microb1.style.left = random2(-300, 900) + "px";
	}, 100);
	// через 200 мс перемещается в нужную точку
	setTimeout(function(){
		microb1.style.top = 210 + "px";
		microb1.style.left = 283 + "px";
	}, 200);

	function nyznoeMesto() {
		microb1.style.top = 210.1 + "px";
	}
	setTimeout(nyznoeMesto, 2800);

	microb1.onmousemove = function() {
	microb1.remove();
	var sushestvyetMicrob1 = document.querySelector("#microb1"); 
     if (sushestvyetMicrob1 == null) {
     	microb111();
     }
     	if (microb1.style.top == 210.1 + "px") {
     		ziznHeart = ziznHeart - 1;
			p2.innerText = ziznHeart;
			if (p2.innerText == 0) {
				status = "koniec";
			    koniecIgra();
			}
		
     }
 }

	// если статус не "конец"" (то есть "начать"), то
	if (status != "koniec") {
	 // добавляем элемент шарик в игровое поле <div id="igra"></div>
	 game.appendChild(microb1);
	}
} 

function microb222() {
	// создаем второй микроб
	var microb2 = document.createElement("div");
	microb2.id = "microb2";
	var picture = document.createElement("img");
	picture.src = "image/microb2.png";
	microb2.appendChild(picture);

	setTimeout(function() {
		microb2.style.top = random1(-200, 800) + "px";
		microb2.style.left = random2(-300, 900) + "px";
	}, 100);

	setTimeout(function(){
		microb2.style.top = 500 + "px";
		microb2.style.left = 294 + "px";
	}, 200);

	function nyznoeMesto() {
		microb2.style.top = 500.1 + "px";
	}
	setTimeout(nyznoeMesto, 2800);

	microb2.onmousemove = function() {
	microb2.remove();
	var sushestvyetMicrob2 = document.querySelector("#microb2"); 
     if (sushestvyetMicrob2 == null) {
     	microb222();
     }
     	if (microb2.style.top == 500.1 + "px") {
     		ziznKishki = ziznKishki - 1;
			p3.innerText = ziznKishki;
			if (p3.innerText == 0) {
				status = "koniec";
			    koniecIgra();
			}
		
     }
} 
	// если статус не "конец"" (то есть "начать"), то
	if (status != "koniec") {
	 // добавляем элемент шарик в игровое поле <div id="igra"></div>
	 game.appendChild(microb2);
	}
}

function microb333() {
	// создаем третий микроб
	var microb3 = document.createElement("div");
	microb3.id = "microb3";
	var picture = document.createElement("img");
	picture.src = "image/microb3.png";
	microb3.appendChild(picture);
	game.appendChild(microb3);

	setTimeout(function(){
		microb3.style.top = random1(-200, 800) + "px";
		microb3.style.left = random2(-300, 900) + "px";
	}, 100);

	setTimeout(function(){
		microb3.style.top = 337 + "px";
		microb3.style.left = 180 + "px";
	}, 200);

	function nyznoeMesto() {
		microb3.style.top = 337.1 + "px";
	}
	setTimeout(nyznoeMesto, 2800);

	microb3.onmousemove = function() {
	microb3.remove();
	var sushestvyetMicrob3 = document.querySelector("#microb3"); 
     if (sushestvyetMicrob3 == null) {
     	microb333();
     }
     	if (microb3.style.top == 337.1 + "px") {
     		ziznLiver = ziznLiver - 1;
			p4.innerText = ziznLiver;
			if (p4.innerText == 0) {
				status = "koniec";
			    koniecIgra();
			}
		
     }
} 
	// если статус не "конец"" (то есть "начать"), то
	if (status != "koniec") {
	 // добавляем элемент шарик в игровое поле <div id="igra"></div>
	 game.appendChild(microb3);
	}
}

function microb444() {
	// создаем четвертый микроб
	var microb4 = document.createElement("div");
	microb4.id = "microb4";
	var picture = document.createElement("img");
	picture.src = "image/microb4.png";
	microb4.appendChild(picture);
	game.appendChild(microb4);

	setTimeout(function(){
		microb4.style.top = random1(-200, 800) + "px";
		microb4.style.left = random2(-300, 900) + "px";
	}, 100);

	setTimeout(function(){
		microb4.style.top = 200 + "px";
		microb4.style.left = 188 + "px";
	}, 200);

	function nyznoeMesto() {
		microb4.style.top = 200.1 + "px";
	}
	setTimeout(nyznoeMesto, 2800);

	microb4.onmousemove = function() {
	microb4.remove();
	var sushestvyetMicrob1 = document.querySelector("#microb4"); 
     if (sushestvyetMicrob1 == null) {
     	microb444();
     }
     	if (microb4.style.top == 200.1 + "px") {
     		ziznLegkie = ziznLegkie - 1;
			p1.innerText = ziznLegkie;
			if (p1.innerText == 0) {
				status = "koniec";
			    koniecIgra();
			}
		
     } }
     // если статус не "конец"" (то есть "начать"), то
	if (status != "koniec") {
	 // добавляем элемент шарик в игровое поле <div id="igra"></div>
	 game.appendChild(microb4);
	}
}

function sozdanieBlockLifes() {
	var lifes = document.querySelector("#lifes");

	var lifer = document.createElement("img");
	lifer.src = "image/lifer.png";
	lifer.id = "lifer";
	lifes.appendChild(lifer);

	p4 = document.createElement("p");
	p4.id = "p4";
	p4.innerText = 3;
	lifes.appendChild(p4);


	var legkie = document.createElement("img");
	legkie.src = "image/legkie.png";
	legkie.id = "legkie";
	lifes.appendChild(legkie);

	p1 = document.createElement("p");
	p1.id = "p1";
	p1.innerText = 3;
	lifes.appendChild(p1);

	var heart = document.createElement("img");
	heart.src = "image/heart.png";
	heart.id = "heart";
	lifes.appendChild(heart);

	p2 = document.createElement("p");
	p2.id = "p2";
	p2.innerText = 3;
	lifes.appendChild(p2);


	var kishki = document.createElement("img");
	kishki.src = "image/kishki.png";
	kishki.id = "kishki";
	lifes.appendChild(kishki);

	p3 = document.createElement("p");
	p3.id = "p3";
	p3.innerText = 3;
	lifes.appendChild(p3);


	p5 = document.createElement("p");
	p5.id = "p5";
	p5.innerText = "Age";
	lifes.appendChild(p5);

	var time1 = document.createElement("span");
	time1.id = "time1";
	time1.innerText = 0;
	lifes.appendChild(time1);

function timeGame() {
		//creating game inetrval
		var time2 = 0;
		var time = setInterval(function() {
		//counting down
		time2 = time2 + 1;
		time1.innerText = time2;
		//stopping timer on 0 and calling function EndGame
		if(p1.innerText == 0 || p2.innerText == 0 || p3.innerText == 0 || p4.innerText == 0) {
			clearInterval(time);
		}
	}, 1000)
};
timeGame();		
	
};


function cozdanieKoniecIgra() {
	// создаем блок <div id="koniec-igra"></div> 
	var div = document.createElement("div");
	div.id = "koniec-igra";

	// создаем блок <h2>Игра окончена!</h2>
	var h2 = document.createElement("h2");
	h2.innerText = "Oh, no. Your patient died";
	var score = document.createElement("h2");
	score.innerText = "Your patient survived " + time1.innerText  + " years";



	// помещаем h2 в блок див "koniec-igra"
	div.appendChild(h2);
	div.appendChild(score);
	// добавляем див "koniec-igra" в игровое поле 
	game.appendChild(div);
}


// удаление элементов //

function udalenieStartBlock() {
	startBlock.remove();
}

function udalenieMicrobov() {
	microb1.remove();
	microb2.remove();
	microb3.remove();
	microb4.remove();
}

