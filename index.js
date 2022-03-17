function refreshPage(){
    window.location.reload();
}

const button = document.querySelector('#button-actual');
const div = document.querySelector("#meme")

function loadFile(event) {
    const imageTag = document.querySelector('#output');
    imageTag.src = URL.createObjectURL(event.target.files[0])
    imageTag.onload = function() {
        URL.revokeObjectURL(imageTag.src);
    }
};

button.addEventListener('click', event => {
    event.preventDefault();
    const target = event.target;
    fetch("https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "jokeapi-v2.p.rapidapi.com",
		"x-rapidapi-key": "285626be1emsh6252dd238a98631p1c38c5jsn328387bb55ff"
	    }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    const jokes = data.joke;
    const words = jokes.match(/(\w+)/g).length;  //    \w+    between one and unlimited word characters
                                                //    /g     greedy - don't stop after the first match
    console.log(words);
    if(words < 30){
    
        const firstHalf = jokes.split(' ',words/2).join(' ')
        console.log(firstHalf);

        const secondHalf = jokes.split(' ').slice(words/2).join(' ');
        console.log(secondHalf);

       
        const memeText  = document.createElement('p')
        memeText.innerHTML = `
            <h1 id="setup">${firstHalf}</h1>
            <h2 id="delivery">${secondHalf}</h2>`
        const finalOutput = document.querySelector('#final-output');

        finalOutput.innerHTML = '';
        finalOutput.appendChild(memeText);
        
        // const imageUploaded = document.querySelector('#output');

        const classContainer = event.target.parentElement;
        const section = classContainer.parentElement;
        const memeDiv = section.previousElementSibling;
        const imgTag = memeDiv.firstChild;
        const imgUrl = imgTag.src;

        console.log(imgUrl)

        //TODO 🛑🛑  set the file from the file input above as the  background image of the div#final-output

        // finalOutput.style.backgroundImage = "url("+ imgUrl+")"

        
    

    } else {
        alert('Try Again')
    }
    
})
.catch(err => {
	console.error(err);
});
})







