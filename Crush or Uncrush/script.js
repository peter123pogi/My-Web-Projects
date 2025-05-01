window.onkeydown = (x) => {
    if(x.key === 'Tab' || x.key === ' ') {
        x.preventDefault()
    }
}
function alphabeticalInput(x) {
   x.value = x.value.replace(/[^A-Z || ( || ) || ^a-z || _]/g, '')
}
function buttonMoveHover(button) {
    let randomYn = Math.floor(Math.random() * -300 + 1),
        randomYp = Math.floor(Math.random() * 100 + 1),
        randomXn = Math.floor(Math.random() * -250 + 1),
        randomXp = Math.floor(Math.random() * 410 + 1)

    document.querySelector(button).style.marginTop = (randomYn + randomYp) + 'px'
    document.querySelector(button).style.marginLeft = (randomXn + randomXp) + 'px'
    document.querySelector(button).style.transition = '0.1s'
}
function showTitle(button, crush) {
    let person = document.querySelector(`.${crush}`).value
    switch(button) {
        case '[data-yes]':
            document.querySelector(button).title = "I'll accept " + titleCasing(person)
            break
        case '[data-no]':
            document.querySelector(button).title = `I'll reject ` + titleCasing(person)
            break
    }
}
function resetButtonLocation() {
    document.querySelector('[data-yes]').style.marginTop = '0px'
    document.querySelector('[data-yes]').style.marginLeft = '0px'
    document.querySelector('[data-no]').style.marginTop = '0px'
    document.querySelector('[data-no]').style.marginLeft = '0px'
}
function showAnswer(button) {
    let x = document.querySelector('.main-box-container > .text > .main-person').innerText,
        y = document.querySelector('.main-box-container > .text > .crush').innerText
    switch(button) {
        case 'yes-container':
            resetButtonLocation()
            if(document.querySelector('.yes-container > .text').innerText.length > 31) {
                document.querySelector('.yes-container > .text').style.fontSize = '1.1rem'
            }
            document.querySelector('.yes-container > .text > .main-person').innerText = x
            document.querySelector('.yes-container > .text > .crush').innerText = y
            break
        case 'no-container':
            resetButtonLocation()
            if(document.querySelector('.no-container > .text').innerText.length > 29) {
                document.querySelector('.no-container > .text').style.fontSize = '1.1rem'
            }
            document.querySelector('.no-container > .text > .main-person').innerText = x
            break
    }
    document.querySelector(`.${button}`).style.display = 'block'
    document.querySelector('.main-box-container').style.display = 'none'
}
function submitName(crushWith, crushOn) {
    let a =  document.querySelector(`.${crushWith}`).value
        b = document.querySelector(`.${crushOn}`).value
    if(a !== '' && b !== '') {
        document.querySelector('.input-container').style.display = 'none'
        document.querySelector('.main-box-container').style.display = 'block'
        if(document.querySelector('.main-box-container > .text').innerText.length > 28) {
            document.querySelector('.main-box-container > .text').style.fontSize = '1.1rem'
        }
        document.querySelector('.crush').innerText = titleCasing(b)
        document.querySelector('.main-person').innerText = titleCasing(a)
    }else {
        if(a === '' && b !== '') {
            alert('Please fill up your name')
        }else if(a !== '' && b === '') {
            alert(`Please fill up your crush's name`)
        }else if(a === '' && b === '') {
            alert('Please fill all the required inputs before proceeding')
        }
    }
}
function backInputPage() {
    document.querySelector(`.yes-container`).style.display = 'none'
    document.querySelector(`.no-container`).style.display = 'none'
    document.querySelector('.input-container').style.display = 'block'
    document.querySelector('[data-yes]').style.display = 'block'
    document.querySelector('.input-container > div > .main-person-input').value = ''
    document.querySelector('.input-container > div > .crush-input').value = ''
}
function titleCasing(name) {
    let get = []
    let concat = ''

    for(let a = 1; a < name.length; a++) {
        let x = ''
        get[a - 1] = name[a].toLowerCase()
        x = get[a - 1]
        concat+= x
    }
    return (name[0].toUpperCase() + concat)
}
