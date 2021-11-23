//Меню

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

let Heart = Array.from(document.querySelectorAll('.heart'));
let Like = Array.from(document.querySelectorAll('.p__like'));

Heart.forEach((heart, index)=>{
	heart.addEventListener('click', () => {  
		heart.classList.toggle('heart__active');
		const current = Number(Like[index].innerHTML);
		const inc = heart.classList.contains("heart__active") ? 1 : -1;
		Like[index].innerHTML = current + inc;
	})
})

//Лайки

const likeButtons = Array.from(document.querySelectorAll(".photos__like-icon"));
const likeCounts = Array.from(document.querySelectorAll(".photos__like-count"));

likeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("is-active");
    const current = Number(likeCounts[index].innerHTML);
    const inc = button.classList.contains("is-active") ? 1 : -1;
    likeCounts[index].innerHTML = current + inc;
  });
});

//Анимация при скролле

function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		change.target.classList.add('element-show');
		}
	});
}

let options = {
threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
	
for (let elm of elements) {
	observer.observe(elm);
}

function Entry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		change.target.classList.add('element-show__block');
		}
	});
}

let option = {
threshold: [0.5] };
let server = new IntersectionObserver(Entry, options);
let element = document.querySelectorAll('.element-animation__block');
	
for (let elm of element) {
	server.observe(elm);
}
