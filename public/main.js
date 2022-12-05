const PROMPT_NUM = 1;
let json_data = null

function onAccept() {
	var flavorArea = document.getElementById("flavor")
	flavorArea.innerText = json_data["accept"]
	modifyAreaAfterResponse()
}

function onDeny() {
	var flavorArea = document.getElementById("flavor")
	flavorArea.innerText = json_data["deny"]
	modifyAreaAfterResponse()
}

function modifyAreaAfterResponse() {
	toggleObject("accept", false)
	toggleObject("deny", false)
}

function toggleObject(id, on) {
	var x = document.getElementById(id)
	if(on) {
		x.style.visibility = "visible"
	} else {
		x.style.visibility = "hidden"
	}
}

function chooseRandomFile() {
	file_num = Math.floor(Math.random() * PROMPT_NUM) + 1
	return `scripts/prompt${file_num}.json`
}

function newPrompt() {
	fetch(chooseRandomFile()).then((response) => response.json())
	.then((data) => {
		console.log(data)
		json_data = data
		changeSituation()
		changeEmail()
		changeFlavor()
		toggleObject("accept", true)
		toggleObject("deny", true)
	})
}

function changeSituation() {	
	var situationArea = document.getElementById("situation")
	situationArea.innerText = json_data["situation"]
}

function changeEmail() {
	var emailArea = document.getElementById("email")
	emailArea.innerText = json_data["email"]
}

function changeFlavor() {
	var flavorArea = document.getElementById("flavor")
	flavorArea.innerText = json_data["flavor"]
}

newPrompt()
