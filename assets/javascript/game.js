// $(function () {
    
//      var numMin =  '345';
//      var numMax = '26654';
     
//      var adjustedHigh = (parseFloat(numMax) - parseFloat(numMin)) + 1;
     
     
//      var numRand = Math.floor(Math.random() * adjustedHigh) + parseFloat(numMin);
     
     
//      if ((IsNumeric(numMin)  && (IsNumeric(numMax)) && (parseFloat(numMin) <= parseFloat(numMax )) && (numMin != '') && (numMax != ''))) {
//          $("#randomnumber").val('DTKT'+numRand);
//      }
// });

// function IsNumeric(n){
//     return !isNaN(n);
// }

// $(".generate").on("click", function() {
// 	$("#random_value").val(Math.ceil(Math.random() * 10));
// 	$("#guess_text").html("Guess the generated number.");
// 	$("#guess_section").show();
// });
	
	// for(counter = 0; counter < 200; counter++){
	// var guessNumber = Math.floor(Math.random() * 103 + 18);
	// console.log(guessNumber);
	// };
	var guessNumber = Math.floor(Math.random() * 102 + 19);
	var guess = 0;
	//console.log(guessNumber);
	$("#box1").html("<h1>" + guessNumber + "</h1>");
	var crystal1 = Math.floor(Math.random() * 12 + 1);
	var crystal2 = Math.floor(Math.random() * 12 + 1);
	var crystal3 = Math.floor(Math.random() * 12 + 1);
	var crystal4 = Math.floor(Math.random() * 12 + 1);

	$(".cr1").attr("id", crystal1);
	$(".cr2").attr("id", crystal2);
	$(".cr3").attr("id", crystal3);
	$(".cr4").attr("id", crystal4);
	
	function newGuess(theid){
		if($("#NoGo").val() == "No"){return false;}
		var target = $("#box1 h1").html();

		//parseInt converts to interger
		var score = $("#score").val();
		var Winners = $("#Winners").val();
		var Losers = $("#Losers").val();
		//alert(score);
		//return;
		if (score){
			score = Number(score);
			score = Number(score) + Number(theid);
		}
		else score = Number(theid);
		
		$("#score").val(score);
		$("#box2 h2").html(score);
		

		if(score == target){
			if (Winners){
				Winners = Number(Winners) + 1;
			}
			else Winners = 1;

		alert('Winner!!!');
		$("#Wins").html(Winners);
		$("#Winners").val(Winners);
		$("#box2").html('<button type="button" class="btn btn-success" onclick="PlayAgain()">Play Again</button>');
		$("#NoGo").val('No');
		
		}
		

		else if(score > target){
			if (Losers){
				Losers = Number(Losers) + 1;
			}
			else Losers = 1;

			alert('You Suck!!!');
			$("#Losses").html(Losers);
			$("#Losers").val(Losers);
			$("#box2").html('<button type="button" class="btn btn-success" onclick="PlayAgain()">Play Again</button>');
			$("#NoGo").val('No');
		}
		//alert(score);
	}

		//$("#score").val(score);
		//alert(score);

	function PlayAgain(){
		
		var guessNumber = Math.floor(Math.random() * 102 + 19);
			$("#box1").html("<h1>" + guessNumber + "</h1>");
			var crystal1 = Math.floor(Math.random() * 12 + 1);
			var crystal2 = Math.floor(Math.random() * 12 + 1);
			var crystal3 = Math.floor(Math.random() * 12 + 1);
			var crystal4 = Math.floor(Math.random() * 12 + 1);

			$(".cr1").attr("id", crystal1);
			$(".cr2").attr("id", crystal2);
			$(".cr3").attr("id", crystal3);
			$(".cr4").attr("id", crystal4);

			$("#score").val("0");
			//$("#Winners").val("0");
			//$("#Losers").val("0");
			$("#box2").html("<h2>Total Score Here</h2>");
			$("#NoGo").val('Yes');
	}
