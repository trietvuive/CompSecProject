const PROMPT_NUM = 2;
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
		changeElement("sender_name", json_data["sender_name"])
		changeTextOnly("sender_email", json_data["sender_email"])
		changeElement("situation", json_data["situation"])
		changeElement("email", json_data["email"])
		changeElement("flavor", json_data["flavor"])
		toggleObject("accept", true)
		toggleObject("deny", true)
	})
}

function changeElement(id, text) {
	if(text === undefined) text = ""
	var x = document.getElementById(id)
	x.innerText = text
}

function changeTextOnly(id, text) {
	var x = document.getElementById(id)
	var newText = x.childNodes[0]
	newText.nodeValue = text
}

newPrompt()
