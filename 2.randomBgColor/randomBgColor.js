let button = document.querySelector('button')

button.addEventListener('click', () => {
	document.body.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)},
    ${Math.round(Math.random() * 255)})`
})
