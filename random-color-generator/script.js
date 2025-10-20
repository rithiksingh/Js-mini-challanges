let body=document.querySelector('body')
let p= document.querySelector('#colorCode')
let button=document.querySelector('.generate-btn')



button.addEventListener('click',()=>{
  let randomColor= Math.floor(Math.random() * 16777215).toString(16);
  p.textContent="color code: " +'#'+randomColor
  body.style.backgroundColor="#"+randomColor
})


function myFunction() {
  console.log("got in");
  
  // Get the text from the paragraph
  const colorCode = document.querySelector("#colorCode").textContent;
  
  // Copy the text to clipboard
  navigator.clipboard.writeText(colorCode).then(() => {
    alert("Copied the text: " + colorCode);
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}

p.addEventListener('click', myFunction)
