
window.onload=()=>{
    main()

}

// Global 

let div=null


function main(){
const root=document.getElementById('root')
const btn=document.getElementById('changeBtn')
const output=document.getElementById('output')
const copy=document.getElementById('copy')

btn.addEventListener('click',function(){
    const bgcolor=generateHEXColor()

    root.style.backgroundColor=bgcolor
    output.value=bgcolor;
    copy.innerText="Copy"
   

   
})
copy.addEventListener('click',function(){
   const data=navigator.clipboard.writeText(output.value)

    if(div !== null){
        div.remove()
    }


    if(data){
        copy.innerText="Copied"
        genereteToastMessage(`${output.value} Copied`)
        
      
    }
})
}

function genereteToastMessage(msg){
     div=document.createElement('div')
    div.innerText=msg
    div.className='message toast-message-slide-in'
    document.body.appendChild(div)
    div.addEventListener('click',function(){
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out')


        div.addEventListener('animationend',function(){
            div.remove()
            div=null
        })
    })

   
}




function generateHEXColor(){
    //rgb(0,0,0)

    const red=Math.floor(Math.random() * 255)
    const green=Math.floor(Math.random() * 255)
    const blue=Math.floor(Math.random() * 255)

    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
    
}



