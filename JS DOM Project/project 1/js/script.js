
window.onload=()=>{
    main()

}

function main(){
const root=document.getElementById('root')
const btn=document.getElementById('changeBtn')
btn.addEventListener('click',function(){
    const bgcolor=generateRGBColor()

    root.style.backgroundColor=bgcolor
})
}

function generateRGBColor(){
    //rgb(0,0,0)

    const red=Math.floor(Math.random() * 255)
    const green=Math.floor(Math.random() * 255)
    const blue=Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
    
}

