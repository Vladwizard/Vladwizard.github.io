let findWordInput = document.getElementById("findWordInput")
let findButton = document.getElementById("findButton")

let swapWordInput = document.getElementById("swapWordInput");
let swapButton = document.getElementById("swapButton");

let textArea = document.getElementById("textArea")

function GiveText() {
    textArea.innerHTML = textInput.value;
    console.log(textInput.value);
}
function Mark() {
    let word = findWordInput.value;
    let text = GetAllText();
    textArea.innerHTML = "";

    let index = 0, lastIndex = 0;

    while (lastIndex < text.length) {
        index = text.indexOf(word, lastIndex);
        if(index == -1) index = text.length;
        
        let newElement = document.createElement("div");
        if (lastIndex == index) {
            newElement.innerHTML = text.slice(index, index + word.length);
            newElement.className = "marked";
            lastIndex = index + word.length;
        }
        else{
            newElement.innerHTML = text.slice(lastIndex, index);
            lastIndex = index;
        }
        textArea.append(newElement);


    }
}
function GetAllText() {
    let text = ''
    if (textArea.childElementCount == 0)
        text = textArea.innerHTML;
    else {
        for (let child of textArea.children) {
            text += child.innerHTML;
        }
    }

    return text;
}
function Swap() {
    let swapWord = swapWordInput.value;
    for (let child of textArea.children) {

        if (child.className == "marked")
            child.innerHTML = swapWord;
    }
}
findButton.onclick = Mark;
swapButton.onclick = Swap;