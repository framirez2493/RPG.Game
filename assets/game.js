
// document.getElementById("yugi").style.backgroundImage.= "url('https://www.gamereactor.eu/media/83/veckansxboxlive_228315b.jpg')";
$("body").css("background-image", "url('images/stadium.jpg')", "height:900px", "width: 900px");

var opponentPower = Math.floor( ( Math.random() * 1000 ) + 1 );
var powerAttack = Math.floor( ( Math.random() * 1000 ) + 1 );
var live = 5;
var enemy = 5;
var powerUps= '';///ask for power ups and randomly chosse a image.
var images = ["images/girl.jpg", "images/yugi.jpg", "images/seto.png","images/sultan.png","images/abidos.png"];
var cardImages = ["images/card1.png","images/cards2.png"];
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/sounds/loose.wav");
var audioElement2 = document.createElement("audio");
audioElement2.setAttribute("src", "assets/sounds/clapping.wav");


 $(document).ready(function() {

	 $('#btn1').hide();
	 $('#counter').hide();
	 $('#btn2').hide();





$('#tr').on('click', function(){
randomImage = images[Math.floor(Math.random() * images.length)];
$("#images-play").html("<img src=" + randomImage + " width='150px'; height='150px'>");
randomCard = cardImages[Math.floor(Math.random() * cardImages.length)];
$("#cards").html("<img src=" + randomCard +" width='300px'; height='200px'>");
randomCard = cardImages[Math.floor(Math.random() * cardImages.length)];
$("#cardo").html("<img src=" + randomCard +" width='300px'; height='150px'>");
$("#YouFight").html("<h3> Your opponent is</h3>");
$("#begin").html("<h4> click Attack to begin the tournament!!</h4>");
$('#er').hide();
$('#players').hide();
$('#fr').hide();
$('#btn2').show();



});
//payers her
$('#players').on('click', function(){
randomImage = images[Math.floor(Math.random() * images.length)];
$("#images-play").html("<img src=" + randomImage +" width='150px'; height='150px'>");
randomCard = cardImages[Math.floor(Math.random() * cardImages.length)];
$("#cards").html("<img src=" + randomCard +" width='300px'; height='200px'>");
randomCard = cardImages[Math.floor(Math.random() * cardImages.length)];
$("#cardo").html("<img src=" + randomCard +" width='300px'; height='150px'>");
$("#YouFight").html("<h3> Your opponent is</h3>");
$("#begin").html("<h4> click Attack to begin the tournament!!</h4>");
$('#er').hide();
$('#tr').hide();
$('#fr').hide();
$('#btn2').show();



});

$('#er').on('click', function(){
randomImage = images[Math.floor(Math.random() * images.length)];
$("#images-play").html("<img src=" + randomImage + " width='150px'; height='150px'>");
randomCard = cardImages[Math.floor(Math.random() * cardImages.length)];
$("#cards").html("<img src=" + randomCard +" width='300px'; height='200px'>");
randomCard = cardImages[Math.floor(Math.random() * cardImages.length)];
$("#cardo").html("<img src=" + randomCard +" width='300px'; height='150px'>");
$("#YouFight").html("<h3> Your opponent is</h3>");
$("#begin").html("<h4> click Attack to beging the tournament!!</h4>");
$('#tr').hide();
$('#players').hide();
$('#fr').hide();
$('#btn2').show();



});

$('#fr').on('click', function(){
randomImage = images[Math.floor(Math.random() * images.length)];
$("#images-play").html("<img src=" + randomImage + " width='150px'; height='150px'>");
randomCard = cardImages[Math.floor(Math.random() * cardImages.length)];
$("#cards").html("<img src=" + randomCard +" width='300px'; height='200px'>");
randomCard = cardImages[Math.floor(Math.random() * cardImages.length)];
$("#cardo").html("<img src=" + randomCard +" width='300px'; height='150px'>");
$("#YouFight").html("<h3> Your opponent is</h3>");
$("#begin").html("<h4> click Attack to beging the tournament!!</h4>");
$('#er').hide();
$('#players').hide();
$('#tr').hide();
$('#btn2').show();



});





// var computerGuess = opponentPower[Math.floor(Math.random() * opponentPower.length)];

$('#btn1').click(function the(event){
document.location.reload();

});
$('#btn2').click(function the(event){
$('#counter').show();
enemyCardplay = opponentPower = Math.floor( ( Math.random() * 1000 ) + 1 );
yourCounterattacks = powerAttack = Math.floor( ( Math.random() * 1000 ) + 1 );
if ((powerAttack) > (opponentPower) ){
enemy--;
}else{live--;}
if(live < 0){
$('#btn1').show();
 //alert("you lost");
 audioElement.play();
 alert("Losser Click the button to play again");
 $(".container").html("<img src='images/gameover.jpg';  width='500px'; height='400px'>");


//document.location.reload();
}if (enemy < 0) {
audioElement2.play();
 alert("winner!!!! Click the button to play again");
 $(".container").html("<img src='images/winer.jpg';  width='500px'; height='400px'>");
 $('#btn1').show();
}  

console.log(live);

$('#counter').html('<p>your Health: ' + live + '</p>' +
'<p>Enemy cards power: ' + enemyCardplay + '</p>' + '<p>Your Card power: ' + yourCounterattacks + '</p>' + '<p>Enemy Health: ' + enemy + '</p>')
console.log(this);
});

 




});


