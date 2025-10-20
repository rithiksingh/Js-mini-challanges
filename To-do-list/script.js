let list=[
   
]



let listContainer=document.querySelector('.listContainer')
let addBtn=document.querySelector('.addBtn')
let addInput= document.querySelector('#addInput')


function renderList(list) {
  listContainer.innerHTML=""
  list.map((item) => {
    let div = document.createElement("div");
    div.className = "list";
    div.innerHTML = `
    <p>${item.task}<p>
    `;

    let btn=document.createElement('button')
    btn.innerText='❌'
    div.appendChild(btn)
    btn.addEventListener('click',()=>{
        handleRemove(item.id)
    })

   
    listContainer.appendChild(div);
  });
}

renderList(list)

function handleAddList(){
    let obj={id:Date.now(),task:addInput.value}
    list.unshift(obj)
    renderList(list)
    addInput.value=''
}

function handleRemove(id){
    let filteredList= list.filter((item)=>{
        return item.id!==id
    })
    list=filteredList
    renderList(list)
}

addBtn.addEventListener('click',handleAddList)