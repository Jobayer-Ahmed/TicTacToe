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
				checkWin();
				minimax();
			}
		}
	}

	//minimax condition
	function minimax() {
		if ($("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#0").text() === computer && $("#1").text() === computer && $("#2").text() === '') {
			$("#2").text(computer);
			checkWin();
		} else if ($("#0").text() === computer && $("#2").text() === computer && $("#1").text() === '') {
			$("#1").text(computer);
			checkWin();
		} else if ($("#2").text() === computer && $("#1").text() === computer && $("#0").text() === '') {
			$("#0").text(computer);
			checkWin();
		} else if ($("#2").text() === computer && $("#0").text() === computer && $("#1").text() === '') {
			$("#1").text(computer);
			checkWin();
		} else if ($("#3").text() === computer && $("#4").text() === computer && $("#5").text() === '') {
			$("#5").text(computer);
			checkWin();
		} else if ($("#3").text() === computer && $("#5").text() === computer && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#5").text() === computer && $("#4").text() === computer && $("#3").text() === '') {
			$("#3").text(computer);
			checkWin();
		} else if ($("#5").text() === computer && $("#3").text() === computer && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#6").text() === computer && $("#7").text() === computer && $("#8").text() === '') {
			$("#8").text(computer);
			checkWin();
		} else if ($("#6").text() === computer && $("#8").text() === computer && $("#7").text() === '') {
			$("#7").text(computer);
			checkWin();
		} else if ($("#8").text() === computer && $("#7").text() === computer && $("#6").text() === '') {
			$("#6").text(computer);
			checkWin();
		} else if ($("#8").text() === computer && $("#6").text() === computer && $("#7").text() === '') {
			$("#7").text(computer);
			checkWin();
		} else if ($("#0").text() === computer && $("#3").text() === computer && $("#6").text() === '') {
			$("#6").text(computer);
			checkWin();
		} else if ($("#0").text() === computer && $("#6").text() === computer && $("#3").text() === '') {
			$("#3").text(computer);
			checkWin();
		} else if ($("#6").text() === computer && $("#3").text() === computer && $("#0").text() === '') {
			$("#0").text(computer);
			checkWin();
		} else if ($("#6").text() === computer && $("#0").text() === computer && $("#3").text() === '') {
			$("#3").text(computer);
			checkWin();
		} else if ($("#1").text() === computer && $("#4").text() === computer && $("#7").text() === '') {
			$("#7").text(computer);
			checkWin();
		} else if ($("#1").text() === computer && $("#7").text() === computer && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#7").text() === computer && $("#4").text() === computer && $("#1").text() === '') {
			$("#1").text(computer);
			checkWin();
		} else if ($("#7").text() === computer && $("#1").text() === computer && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#2").text() === computer && $("#5").text() === computer && $("#8").text() === '') {
			$("#8").text(computer);
			checkWin();
		} else if ($("#2").text() === computer && $("#8").text() === computer && $("#5").text() === '') {
			$("#5").text(computer);
			checkWin();
		} else if ($("#8").text() === computer && $("#5").text() === computer && $("#2").text() === '') {
			$("#2").text(computer);
			checkWin();
		} else if ($("#8").text() === computer && $("#2").text() === computer && $("#5").text() === '') {
			$("#5").text(computer);
			checkWin();
		} else if ($("#0").text() === computer && $("#4").text() === computer && $("#8").text() === '') {
			$("#8").text(computer);
			checkWin();
		} else if ($("#0").text() === computer && $("#8").text() === computer && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#8").text() === computer && $("#4").text() === computer && $("#0").text() === '') {
			$("#0").text(computer);
			checkWin();
		} else if ($("#8").text() === computer && $("#0").text() === computer && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#0").text() === computer && $("#1").text() === computer && $("#2").text() === '') {
			$("#2").text(computer);
			checkWin();
		} else if ($("#6").text() === computer && $("#4").text() === computer && $("#2").text() === '') {
			$("#2").text(computer);
			checkWin();
		} else if ($("#6").text() === computer && $("#2").text() === computer && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#2").text() === computer && $("#4").text() === computer && $("#6").text() === '') {
			$("#6").text(computer);
			checkWin();
		} else if ($("#2").text() === computer && $("#6").text() === computer && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#0").text() === player && $("#1").text() === player && $("#2").text() === '') {
			$("#2").text(computer);
			checkWin();
		} else if ($("#0").text() === player && $("#2").text() === player && $("#1").text() === '') {
			$("#1").text(computer);
			checkWin();
		} else if ($("#2").text() === player && $("#1").text() === player && $("#0").text() === '') {
			$("#0").text(computer);
			checkWin();
		} else if ($("#2").text() === player && $("#0").text() === player && $("#1").text() === '') {
			$("#1").text(computer);
			checkWin();
		} else if ($("#3").text() === player && $("#4").text() === player && $("#5").text() === '') {
			$("#5").text(computer);
			checkWin();
		} else if ($("#3").text() === player && $("#5").text() === player && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#5").text() === player && $("#4").text() === player && $("#3").text() === '') {
			$("#3").text(computer);
			checkWin();
		} else if ($("#5").text() === player && $("#3").text() === player && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#6").text() === player && $("#7").text() === player && $("#8").text() === '') {
			$("#8").text(computer);
			checkWin();
		} else if ($("#6").text() === player && $("#8").text() === player && $("#7").text() === '') {
			$("#7").text(computer);
			checkWin();
		} else if ($("#8").text() === player && $("#7").text() === player && $("#6").text() === '') {
			$("#6").text(computer);
			checkWin();
		} else if ($("#8").text() === player && $("#6").text() === player && $("#7").text() === '') {
			$("#7").text(computer);
			checkWin();
		} else if ($("#0").text() === player && $("#3").text() === player && $("#6").text() === '') {
			$("#6").text(computer);
			checkWin();
		} else if ($("#0").text() === player && $("#6").text() === player && $("#3").text() === '') {
			$("#3").text(computer);
			checkWin();
		} else if ($("#6").text() === player && $("#3").text() === player && $("#0").text() === '') {
			$("#0").text(computer);
			checkWin();
		} else if ($("#6").text() === player && $("#0").text() === player && $("#3").text() === '') {
			$("#3").text(computer);
			checkWin();
		} else if ($("#1").text() === player && $("#4").text() === player && $("#7").text() === '') {
			$("#7").text(computer);
			checkWin();
		} else if ($("#1").text() === player && $("#7").text() === player && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#7").text() === player && $("#4").text() === player && $("#1").text() === '') {
			$("#1").text(computer);
			checkWin();
		} else if ($("#7").text() === player && $("#1").text() === player && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#2").text() === player && $("#5").text() === player && $("#8").text() === '') {
			$("#8").text(computer);
			checkWin();
		} else if ($("#2").text() === player && $("#8").text() === player && $("#5").text() === '') {
			$("#5").text(computer);
			checkWin();
		} else if ($("#8").text() === player && $("#5").text() === player && $("#2").text() === '') {
			$("#2").text(computer);
			checkWin();
		} else if ($("#8").text() === player && $("#2").text() === player && $("#5").text() === '') {
			$("#5").text(computer);
			checkWin();
		} else if ($("#0").text() === player && $("#4").text() === player && $("#8").text() === '') {
			$("#8").text(computer);
			checkWin();
		} else if ($("#0").text() === player && $("#8").text() === player && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#8").text() === player && $("#4").text() === player && $("#0").text() === '') {
			$("#0").text(computer);
			checkWin();
		} else if ($("#8").text() === player && $("#0").text() === player && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#0").text() === player && $("#1").text() === player && $("#2").text() === '') {
			$("#2").text(computer);
			checkWin();
		} else if ($("#6").text() === player && $("#4").text() === player && $("#2").text() === '') {
			$("#2").text(computer);
			checkWin();
		} else if ($("#6").text() === player && $("#2").text() === player && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else if ($("#2").text() === player && $("#4").text() === player && $("#6").text() === '') {
			$("#6").text(computer);
			checkWin();
		} else if ($("#2").text() === player && $("#6").text() === player && $("#4").text() === '') {
			$("#4").text(computer);
			checkWin();
		} else {
			AI();
		}
	}

	// Wining Condition
	function checkWin() {
		if($('#0').text() === computer && $('#1').text() === computer && $('#2').text() === computer) {
			game = true;
			alert(computer + " wins!");
		} else if($('#2').text() === computer && $('#4').text() === computer && $('#6').text() === computer) {
			game = true;
			alert(computer + " wins!");
		} else if($('#0').text() === computer && $('#3').text() === computer && $('#6').text() === computer) {
			game = true;
			alert(computer + " wins!");
		} else if($('#0').text() === computer && $('#4').text() === computer && $('#8').text() === computer) {
			game = true;
			alert(computer + " wins!");
		} else if($('#1').text() === computer && $('#4').text() === computer && $('#7').text() === computer) {
			game = true;
			alert(computer + " wins!");
		} else if($('#2').text() === computer && $('#5').text() === computer && $('#8').text() === computer) {
			game = true;
			alert(computer + " wins!");
		} else if($('#3').text() === computer && $('#4').text() === computer && $('#5').text() === computer) {
			game = true;
			alert(computer + " wins!");
		} else if($('#6').text() === computer && $('#7').text() === computer && $('#8').text() === computer) {
			game = true;
			alert(computer + " wins!");
		}
		else {
			game = false;
		}
	}

	// AI Turn Function
	function AI() {
		var token = false;
		if ($('#0').text() === '') {
			$('#0').text(computer)
		} else {
			while(token===false && count !== 5) {
				var random = (Math.random()*8).toFixed();
				console.log(random)
				var move = $("#"+random).text();
				if (move==='') {
					$("#"+random).text(computer);
					token = true;
					turn[random] = computer;
				} else {
					console.log("ITS ELSE");
				}
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

	
});