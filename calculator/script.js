let button= document.querySelectorAll('.container .calculator button')
let inputBox= document.querySelector('#inputBox')



let exp= ""
button.forEach((but)=>{
    but.addEventListener('click',()=>{
        let clicked= but.innerText

        if( clicked === "="){
            let result= eval(exp)
            console.log("hi")
            inputBox.value=result
            exp=result
            return
        }
        else if( clicked === "AC"){
            let result= ""
            inputBox.value=result
            exp=result
            return
        }
        else if( clicked === "DEL"){
            let result= exp.substring(0,exp.length-1)
            inputBox.value=result
            exp=result
            return
        }

        
        exp+=clicked
        inputBox.value=exp
    })
})