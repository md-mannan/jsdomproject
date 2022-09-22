window.onload = () => {
    main();
}

let div = null
function main() {
    const root = document.getElementById('root')
    const changebtn = document.getElementById('changebtn')
    const output = document.getElementById('output')
    const copy = document.getElementById('copy')
    



    changebtn.addEventListener('click', function () {
        const RGBcolor = generateRGBColor()
        const HEXcolor = generateHEXColor()
        

        root.style.backgroundColor = HEXcolor
        output.value = HEXcolor.toUpperCase()
        copy.innerText = "Copy"
    })

    copy.addEventListener('click', function () {
        const data = navigator.clipboard.writeText(output.value);
        

        if (div !== null) {
            div.remove()
        }
        if (data) {
            copy.innerText = "Copied"


            genereteToastMessage(`${output.value} Copied`)
           

        }


    })

}


function genereteToastMessage(msg) {
     div = document.createElement('div')
    div.innerText = msg
    div.className = "msg alert alert-success toast-message-slide-in";
    document.body.appendChild(div)

    div.addEventListener('click', function () {
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')


        div.addEventListener('animationend',function(){
            div.remove()
            div=null
        })
    })

   

}


function generateRGBColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
}

function generateHEXColor() {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}