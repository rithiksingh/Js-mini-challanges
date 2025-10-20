
// create a function that takes in old node and new node and and it replaces it with new node

// function replaceNode(oldNode, newNode){
//     if(!(oldNode instanceof Element)){
//         console.error("invalid node")
//         return;
//     }
    
//     let newElement= document.createElement(newNode)
//     oldNode.after(newElement)
//     newElement.innerHTML=oldNode.innerHTML

//     console.log(oldNode.attributes)
//     for(let attr of oldNode.attributes){
//         console.dir(attr)
//         oldNode.setAttribute
//         newElement.setAttribute(attr.name,attr.value)
//     }
    
//     oldNode.replaceWith(newElement)
    
// }

// let oldNode= document.querySelector('.box')
// replaceNode(oldNode, 'h1')


//select all the list items and console it's text content

// let list= document.querySelectorAll('li')
// console.log(list)
// // list.forEach((item)=>{
// //     console.log(item.innerText)
// // })

// for(let i=0;i<list.length;i++){
//     console.log(list[i].innerText)
// }

//update the html with js
// let p=document.querySelector('p')
// p.innerHTML='<b>Updated</b> by javascript'


// crate a new list item and add it to the ul

// let ul=document.querySelector('ul')
// let newItem= document.createElement('li')
// newItem.textContent='this is the new list item'
// ul.append(newItem)

// select the first item in the list and delete it 

// let item=document.querySelector('li')
// item.remove()

//change the background color of the element
// let item=document.querySelector('li')
// item.style.backgroundColor="green"


// add the highlight class on every even item in the list
// let list= document.querySelectorAll('li:nth-child(2n)')
// list.forEach((item)=>{
//     item.style.backgroundColor='green'
// })


//Create a <div> with text "Hello DOM" and append it to body.

// let div=document.createElement('div')
// div.innerText='Hello DOM'
// let body=document.querySelector('body')
// body.append(div)

// Create a list of 5 names from a JS array and render as <ul>.

// let names=['hrithik','raj', 'rahul', 'juhi', 'mummy']

// let ul=document.createElement('ul')

// for(let name of names){
//     let li=document.createElement('li')
//     li.textContent=name
//     ul.append(li)
// }

// let body=document.querySelector('body')
// body.append(ul)

// function toggleHighlight(event){
//     let btn=event.target
//     console.log(btn)
//     let li=btn.parentNode
//     console.log(li)
//     li.classList.toggle('highlight')
// }

// let list= document.querySelectorAll('li')
// list.forEach((li)=>{
//     li.addEventListener('click',(e)=>{
//         li.classList.toggle('active')
//     })
// })


let count= document.querySelector('#countValue')
let inc= document.querySelector('.inc')
let dec= document.querySelector('.dec')
let val=document.querySelector('#val')
let reset=document.querySelector('.reset')


inc.addEventListener('click',()=>{
    let skip= + val.value
    count.textContent = Number(count.textContent) + ((skip) ? skip : 1)
})


dec.addEventListener('click',()=>{
    let skip= + val.value
    count.textContent = Number(count.textContent) - ((skip) ? skip : 1)
})

reset.addEventListener('click',()=>{
    count.textContent=0;
})


