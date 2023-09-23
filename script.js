document.addEventListener('DOMContentLoaded', function () {
    const adviceParagraph = document.querySelector('.advice-paragraph');
    const adviceGeneratorButton = document.querySelector('.advice-generator');
    const headerElement = document.querySelector('.header');

    let adviceNumber = 1; // Initial advice number

    function generateRandomAdvice() {
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => {
                const advice = data.slip.advice;
                adviceParagraph.textContent = `"${advice}"`;
                adviceNumber++;
                headerElement.textContent = `Advice #${adviceNumber}`;
            })
            .catch(error => console.error('Error:', error));
    }
    adviceGeneratorButton.addEventListener('click', generateRandomAdvice);
});



/*
// Without API
document.addEventListener('DOMContentLoaded', function () {
    const adviceParagraph = document.querySelector('.advice-paragraph');
    const adviceGeneratorButton = document.querySelector('.advice-generator');
    const headerElement = document.querySelector('.header');

    let adviceNumber = 1; // Initial advice number

    const adviceList = [
        "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle."
    ];

    function generateRandomAdvice() {
        const randomIndex = Math.floor(Math.random() * adviceList.length);
        adviceParagraph.textContent = `"${adviceList[randomIndex]}"`;
        adviceNumber++;
        headerElement.textContent = `Advice #${adviceNumber}`;
    }
    adviceGeneratorButton.addEventListener('click', generateRandomAdvice);
});
*/