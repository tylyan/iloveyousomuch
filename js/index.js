const anniversary = moment("12-14-2017 14:00 +0000", "MM-DD-YYYY HH:mm Z")
const today = moment()
const totalDays = today.diff(anniversary, 'days')
const years = Math.floor(totalDays / 365)
const days = totalDays % 365
let toggle = true

toggleDays = () => {
	if (toggle) {
		daysOnly(totalDays)
	} else {
		yearsAndDays(years, days)
	}
	toggle = !toggle
}

yearsAndDays = (years, days) => {
	let msg = ''
	if (years === 0) {
		daysOnly(days)
		return
	}
	document.getElementById('counter').innerHTML = 'happy ' + years + ' year ' + days + ' day!'
}

daysOnly = (days) => {
	document.getElementById('counter').innerHTML = 'happy ' + days + ' day!'
}

isAnniversary = () => {
	return days === 0
}

window.onload = () => {
	if (isAnniversary()) {
		const toggle = document.getElementById('toggleButton')
		toggle.parentNode.removeChild(toggle)
		document.getElementById('counter').innerHTML = 'happy ' + years + ' anniversary!~'
	} else {
		yearsAndDays(years, days)
	}
}