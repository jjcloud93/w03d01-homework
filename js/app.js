class Tamagotchi {
	constructor(name, hunger, sleepiness, boredom, age){
		this.name = name;
		this.hunger= 1;
		this.sleepiness = 1;
		this.boredom = 1;
		this.age = 1;
	}
	feed(){
		if(this.hunger > 1){
			this.hunger--;
			console.log('hunger');
		}
	}
	rest(){
		if(this.sleepiness > 1){
			this.sleepiness--;
			console.log('sleep');
		}
	}
	play(){
		if(this.boredom > 1){
			this.boredom --;
			console.log('boredom');
		}
	}
	renderPet(){}
};

///////////////////////////////////////////////////////////////////////

// $('.namescreen').text('"Pet Name"');

///////////////////////////////////////////////////////////////////////

$('form').on('submit', (e) => {
  // Which stops the form from refreshing the page
  e.preventDefault();
  // Were trying to get the name of our new enemy class
  // .val retrievs the text from the input
  const newPet = $('#input').val();
  $('#image').attr('src', "https://lh3.googleusercontent.com/Vy-k9VqbdZkpGqsZuX58FMkVj90jMggSsBjSwDeXmFpOebbJ8iVYeqwbGtGRV0bFag");
  $('.namescreen').text('Hello, my name is "' + newPet + '"'); 
  $('.namescreen').attr('style', 'border-bottom: 3px solid black');
  $(".screen").css("background-image", "url('https://thegameassetsmine.com/wp-content/uploads/2016/04/back-pixel-art-bg.jpg')");

///////////////////////////////////////////////////////////////////////

const cthulu = new Tamagotchi(1, 1, 1, 1)

/////////////////////////////////////////////////////////////////////////

// $('.namescreen').text('"Pet Name"');
$('#hunger').text(`Hunger: ${cthulu.hunger}`);
$('#sleep').text(`Sleepiness: ${cthulu.sleepiness}`);
$('#boredom').text(`Boredom: ${cthulu.boredom}`);
$('#age').text(`Age: ${cthulu.age}`);

/////////////////////////////////////////////////////////////////////////

let timer = 0;
const move = () => {
timer++
if (timer % 2 === 0) {
	$("#image").animate({left: "-=230"}, 2000, "swing", move);
}else {
	$("#image").animate({left: "+=230"}, 2000, "swing", move);
}
}
const moveSetTime = setInterval(move, 1000);

/////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

const hungerTime = () => {
	cthulu.hunger++
	$('#hunger').text(`Hunger: ${cthulu.hunger}`);
    if (cthulu.hunger > 9) {
    	clearInterval(hungerSetTime);
    	clearInterval(sleepSetTime);
    	clearInterval(boredomSetTime);
    	clearInterval(ageSetTime);
    	alert('Your pet died of starvation. Try again');
    	location.reload(true);
    }
};
const hungerSetTime = setInterval(hungerTime, 3000);

///////////////////////////////////////////////////////////////////////

const sleepTime = () => {
	cthulu.sleepiness++
	$('#sleep').text(`Sleep: ${cthulu.sleepiness}`);
    if (cthulu.sleepiness > 9) {
    	clearInterval(hungerSetTime);
    	clearInterval(sleepSetTime);
    	clearInterval(boredomSetTime);
    	clearInterval(ageSetTime);
    	alert('Your pet died of sleep deprivation. Try again');
    	location.reload(true);
    }
};
const sleepSetTime = setInterval(sleepTime, 4000);

///////////////////////////////////////////////////////////////////////

const boredomTime = () => {
	cthulu.boredom++
	$('#boredom').text(`Boredom: ${cthulu.boredom}`);
    if (cthulu.boredom > 9) {
    	clearInterval(hungerSetTime);
    	clearInterval(sleepSetTime);
    	clearInterval(boredomSetTime);
    	clearInterval(ageSetTime);
    	alert('Your pet died of boredom. Try again');
    	location.reload(true);
    }
};
const boredomSetTime = setInterval(boredomTime, 2000);

///////////////////////////////////////////////////////////////////////

const ageTime = () => {
$('#image').attr('src', "https://lh3.googleusercontent.com/Vy-k9VqbdZkpGqsZuX58FMkVj90jMggSsBjSwDeXmFpOebbJ8iVYeqwbGtGRV0bFag");
cthulu.age++
$('#age').text(`Age: ${cthulu.age}`);
	if(cthulu.age > 10){
    	$('#image').attr('src', "https://png2.kisspng.com/sh/3e5e75faeb72fca41d7e46cad6a279da/L0KzQYm3VMExN6lrj5H0aYP2gLBuTfN1cKZxgOc2bYn3eLF6TgVvcadqiuV4LXzyhrbqkvFnfJpmhtG2Y3zsgH7okwQua6Vtjd5xdT24cbTqhfZkQGZnTtYEOT60QoG9VMY6OGI6SqU8OEC0Rom6V8Q2NqFzf3==/kisspng-cthulhu-mythos-universo-lovecraftiano-clip-art-cthulhu-5accefc85b6d99.1206469015233801683745.png");
    }
    if(cthulu.age > 20){
    	$('#image').attr('src', 'https://vignette.wikia.nocookie.net/uncyclopedia/images/1/17/Zoidberg.png/revision/latest?cb=20100527123605');
    }
};
const ageSetTime = setInterval(ageTime, 1000);

///////////////////////////////////////////////////////////////////////

let seconds = 0;
const morphTime = () => {
	seconds++
	if(cthulu.age === 10){
		if(seconds % 2 === 0){
			$('#image').attr('src', "https://png2.kisspng.com/sh/3e5e75faeb72fca41d7e46cad6a279da/L0KzQYm3VMExN6lrj5H0aYP2gLBuTfN1cKZxgOc2bYn3eLF6TgVvcadqiuV4LXzyhrbqkvFnfJpmhtG2Y3zsgH7okwQua6Vtjd5xdT24cbTqhfZkQGZnTtYEOT60QoG9VMY6OGI6SqU8OEC0Rom6V8Q2NqFzf3==/kisspng-cthulhu-mythos-universo-lovecraftiano-clip-art-cthulhu-5accefc85b6d99.1206469015233801683745.png");
		}
		else{
			$('#image').attr('src', "https://lh3.googleusercontent.com/Vy-k9VqbdZkpGqsZuX58FMkVj90jMggSsBjSwDeXmFpOebbJ8iVYeqwbGtGRV0bFag");
		}
	}
	if(cthulu.age === 20){
		if(seconds % 2 === 0){
			$('#image').attr('src', "https://vignette.wikia.nocookie.net/uncyclopedia/images/1/17/Zoidberg.png/revision/latest?cb=20100527123605");
		}
		else{
			$('#image').attr('src', "https://png2.kisspng.com/sh/3e5e75faeb72fca41d7e46cad6a279da/L0KzQYm3VMExN6lrj5H0aYP2gLBuTfN1cKZxgOc2bYn3eLF6TgVvcadqiuV4LXzyhrbqkvFnfJpmhtG2Y3zsgH7okwQua6Vtjd5xdT24cbTqhfZkQGZnTtYEOT60QoG9VMY6OGI6SqU8OEC0Rom6V8Q2NqFzf3==/kisspng-cthulhu-mythos-universo-lovecraftiano-clip-art-cthulhu-5accefc85b6d99.1206469015233801683745.png");
		}
	}
};
const morphSetTime = setInterval(morphTime, 50);



///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

$('#1').on('click', () => {
	cthulu.feed()
		$('#hunger').text(`Hunger: ${cthulu.hunger}`);
});

$('#2').on('click', () => {
	cthulu.rest()
		$('#sleep').text(`Sleepiness: ${cthulu.sleepiness}`);
});

$('#3').on('click', () => {
	cthulu.play()
		$('#boredom').text(`Boredom: ${cthulu.boredom}`);
});

});





































































