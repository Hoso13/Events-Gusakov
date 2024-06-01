let uniqueText = [
	'Первый уникальный текст',
	'Второй уникальный текст',
	'Третий уникальный текст',
	'Четвертый уникальный текст',
	'Пятый очень уникальный текст',
]

let buttons = document.querySelectorAll('button')

buttons.forEach((e, idx) => {
	e.addEventListener('click', () => {
		console.log(`Нажата кнопка №${idx+1}, текст: ${uniqueText[idx]} `)
	})
})
