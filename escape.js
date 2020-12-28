const luffy = document.getElementById('luffy');
const cannon = document.getElementById('cannon');
const score = document.getElementById('score');

function jump()
{
	if (luffy.classList != 'jump-animation') {
		luffy.classList.add('jump-animation');
		setTimeout(() => {
			luffy.classList.remove('jump-animation');
		},400);
	}
}

document.addEventListener('keypress', () => {
	if (!luffy.classList.contains('jump-animation')){
		jump();
	}
});

setInterval(() => {
	score.innerText++;
	const luffytop = parseInt(window.getComputedStyle(luffy).getPropertyValue('top'));
	const cannnonleft = parseInt(window.getComputedStyle(cannon).getPropertyValue('left'));
	if (cannnonleft < 0)
	{
		cannon.style.display = 'none';
	}
	else
	{
		cannon.style.display = '';
	}

	if (cannnonleft < 50 && cannnonleft > 0 && luffytop > 140)
	{
		document.getElementById('luffy').style.backgroundImage="url('https://bestanimations.com/media/explosions/2065036779fire-explosion-animation-3.gif')";
		alert("You got a score of: " + score.innerText + ".\n\nPlay again?");
		location.reload();
	}

},50);



