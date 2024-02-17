
/* Arrays for each category*/ 
let array1 = ["The dog", "The cat", "The baby", "The babysitter", "The Butcher"];
let array2 = ["kissed" , "called", "helped", "hugged" , "hit"];
let array3 = ["a scary", "a mischievous", "a hysterical", "a good-looking", "a grumpy"];
let array4 = ["umbrella" , "farmer", "princess", "owl" , "rabbit" ];
let array5 = ["at the airport" , "at a barn" , "at a castle" , "at a supermarket" , "at a dog camp"];
let arrays = [array1, array2, array3, array4, array5];
/* Array to store selected words*/ 
let selectedWords = [];
/* Array to map the word to the image url*/ 
let imageMap = {
    "The dog": "resources/dog.jpg",
    "The cat": "resources/cat.avif",
    "The baby": "resources/baby.webp",
    "The babysitter": "resources/babysitter.jpg",
    "The Butcher": "resources/butcher.jpg",
    "kissed": "resources/kissed.avif",
    "called": "resources/called.jpg",
    "helped": "resources/helped.webp",
    "hugged": "resources/hugged.jpg",
    "hit": "resources/hit.jpeg",
    "a scary": "resources/scaryjpg.jpg",
    "a mischievous": "resources/mischievous.jpg",
    "a hysterical": "resources/hysterical.jpeg",
    "a good-looking": "resources/good-lokingwebp.webp",
    "a grumpy": "resources/grumpy.avif",
    "umbrella": "resources/umbrella.avif",
    "farmer": "resources/farmer.jpg",
    "princess": "resources/princess.webp",
    "owl": "resources/owl.jpg",
    "rabbit": "resources/rabbit.avif",
    "at the airport": "resources/airport.webp",
    "at a barn": "resources/barn.webp",
    "at a castle": "resources/castle.jpg",
    "at a supermarket": "resources/supermarket.webp",
    "at a dog camp": "resources/dog-camp.jpg"
};

/*Selects a random word on the array based on the button presses*/ 
function selectRandomWord(index) {
    let selectedArray = arrays[index];
    let randomIndex = Math.floor(Math.random() * selectedArray.length);
    let randomWord = selectedArray[randomIndex];

	selectedWords[index] = randomWord;
	speak(randomWord);
}
/*Generates and passes the sentence*/
function generateSentence() {
    let sentence = selectedWords.filter(word => word !== undefined).join(' ');
    document.getElementById('sentence').textContent = sentence;

    speak(selectedWords);

}
/*Text to speach and image mapping*/ 
function speak(word) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = word;
	speech.onstart = function() {
        let imageUrl = imageMap[word];
        if (imageUrl) {
            document.getElementById('image1').src = imageUrl;
        }
    };
    window.speechSynthesis.speak(speech);
}




