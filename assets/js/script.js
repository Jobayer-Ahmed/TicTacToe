$(document).ready(function() {
	// Variable declearetion
	var player = "X";
	var computer = "O";
	var turn = [' ', ' ',' ', ' ',' ', ' ',' ', ' '];
	var game = false;
	var count = 0;

	// Cell clicking function
	$(".cell").click(function() {
		var slot = $(this).attr('id');
		playerTurn(player, slot);
		console.log(slot)
	});

	// Player Turn Function
	function playerTurn(player, id) {
		var checkSlot = $("#"+id).text();
		if (checkSlot === '' && checkSlot !== computer) {
			count++;
			turn[id] = player;
			$('#'+id).text(player);
			checkWin(turn, player);
			if (game === false) {
				AI();
				checkWin(turn, computer);
			}
		}
	}

	// AI Turn Function
	function AI() {
		var token = false;
		while(token===false && count !== 5) {
			var random = (Math.random()*9).toFixed();
			console.log(random)
			var move = $("#"+random).text();
			if (move==='') {
				$("#"+random).text(computer);
				token = true;
				turn[random] = computer;
			}
		}
	}

	// Reset Board
	$(".reset").click(function() {
		turn = [' ', ' ',' ', ' ',' ', ' ',' ', ' '];
		$(".cell").text('');
		game = true;
		count = 0;
	});

	// Wining Condition
	function checkWin(turnArray, currentTurn) {
		if(turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn) {
			game = true;
			alert(currentTurn + " wins!");
		} else if(turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn) {
			game = true;
			alert(currentTurn + " wins!");
		} else if(turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn) {
			game = true;
			alert(currentTurn + " wins!");
		} else if(turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn) {
			game = true;
			alert(currentTurn + " wins!");
		} else if(turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn) {
			game = true;
			alert(currentTurn + " wins!");
		} else if(turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn) {
			game = true;
			alert(currentTurn + " wins!");
		} else if(turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn) {
			game = true;
			alert(currentTurn + " wins!");
		} else if(turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn) {
			game = true;
			alert(currentTurn + " wins!");
		}
		else {
			game = false;
		}
	}
});