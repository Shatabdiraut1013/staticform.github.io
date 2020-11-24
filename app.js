const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');

sign_up_btn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
});

function record(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(e) {
        console.log(e)
        document.getElementById('speechtoText').value = e.results[0][0].transcript;
    }

    recognition.start()
}

function recordpass(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(e) {
        console.log(e)
        document.getElementById('speechtoTextpass').value = e.results[0][0].transcript;
    }

    recognition.start()
}

function recordfirst(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(e) {
        console.log(e)
        document.getElementById('speechtoTextup1').value = e.results[0][0].transcript;
    }

    recognition.start()
}

function recordsecond(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(e) {
        console.log(e)
        document.getElementById('speechtoTextup2').value = e.results[0][0].transcript;
    }

    recognition.start()
}

function recordthird(){
    var recognition = new webkitSpeechRecognition();
    recognition.lang = "en-GB";

    recognition.onresult = function(e) {
        console.log(e)
        document.getElementById('speechtoTextup3').value = e.results[0][0].transcript;
    }

    recognition.start()
}