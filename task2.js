const text = document.getElementById('text')
const enterText = document.getElementById('enterText')

function selfDelete() {
     event.target.remove()
}

function apply() {
    let str = ''
    let arr = text.value.split(/\W/).filter(word => word.length > 0);
    for (let i = 0; i < arr.length; i++) {
        str += `<button class="blueButton" onclick="selfDelete()">${arr[i]}</button>`
    }
    enterText.innerHTML = str
}