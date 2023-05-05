var game = document.querySelector("#game")


// Главный файл в котором я буду вызывать необходимые функции и действия игры
function start() {
	// создаем стартовый блок
	creatingStartBlock();
	// при клике на стартовую кнопку выполнится функция nachat
    startButton.onclick = nachat;
}
start();

// при начале игры выполняем эту функцию
function nachat() {
	// удаляем стартовый блок
	udalenieStartBlock();


	microb111();
	microb222();
	microb333();
	microb444();	

	lifes.style.display = "block";

	sozdanieBlockLifes();
}

function koniecIgra() {

	cozdanieKoniecIgra();
	udalenieMicrobov();
	
}