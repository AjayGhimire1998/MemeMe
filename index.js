document.addEventListener("DOMContentLoaded", () => {

const button = document.querySelector('#button-actual');
const div = document.querySelector("#box-model")



button.addEventListener('click', function(e) {
    e.preventDefault();

    const url = URL.createObjectURL(e.target.files[0]);
    const imageAppend = document.createElement("div");
    div.appendChild(imageAppend);
    
    imageAppend.innerHTML = "<img id =\"output\" class=\"image-class\" src=\"" +url+ "\" alt=\"img\" >";
   
   

    
    // const url = URL.createObjectURL(e.target.files[0]);
    // image[0].innerHTML = "<img id =\"output\" class=\"image-class\" src=\"" +url+ "\" alt=\"img\" >";
})


// const loadFile = function(event) {
// const image = document.getElementById('output');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// };
})
