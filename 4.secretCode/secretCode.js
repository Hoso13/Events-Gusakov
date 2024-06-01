let input = ''
let code = 'BARS'
let timeout

let htmlText = document.querySelector('h1')
let img = document.createElement('img')


function checkCode(input) {
	if (input.toLowerCase() === code.toLowerCase()) {
        img.src = `./img/${Math.round(Math.random() * 6)}.jpg`
		htmlText.innerText = 'У вас 3 секунды'
		document.body.appendChild(img)
		setTimeout(() => {
			htmlText.innerText = 'Тут ничего нет...'
			img.remove()
		}, 3000)
	}
}

document.addEventListener('keydown', e => {
	input += e.key
	clearTimeout(timeout)
	timeout = setTimeout(() => {
		checkCode(input)
		input = ''
	}, 1000)
})
