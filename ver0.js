var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');

var wm = document.getElementById('w_mins');
var ws = document.getElementById('w_secs');

var bm = document.getElementById('b_mins');
var bs = document.getElementById('b_secs');

// store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running")
    }
});

reset.addEventListener('click', function(){
    wm.innerText = 25;
    ws.innerText = "00";
    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    pauseInterval();
    startTimer = undefined;
});

pause.addEventListener('click', function(){
    pauseInterval();
    startTimer = undefined;
})

//start timer function
function timer(){
    //work timer countdown
    if(ws.innerText != 0){
        ws.innerText--;
    } else if(wm.innerText != 0 && ws.innerText == 0){
        ws.innerText = 59;
        wm.innerText--;
    }

    // break timer countdown
    if(wm.innerText == 0 && ws.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText !=0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //increment counter by one if one full cycle is completed
    if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        wm.innerText = 25;
        ws.innerText = "00";
        bm.innerText = 5;
        bs.innerText = "00";
        document.getElementById('counter').innerText++;
    }
};

// pause timer function
function pauseInterval(){
    clearInterval(startTimer)
};


// to-do list js
let addToDoButton = document.getElementById('addToDo');
let toDoList = document.getElementById("toDoList");
let inputField = document.getElementById("inputField");

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoList.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    });
    paragraph.addEventListener('dblclick', function(){
        paragraph.remove()
    })
});

// quote generator
let quoteBtn = document.getElementById('quoteBtn');
let quoteOutput = document.getElementById('quoteOutput');
let quotes = [
    '“All our dreams can come true, if we have the courage to pursue them.” – Walt Disney',
    '“The secret of getting ahead is getting started.” – Mark Twain',
    '“I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.” – Michael Jordan',
    '“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.” – Mary Kay Ash',
    '“The best time to plant a tree was 20 years ago. The second best time is now.” – Chinese Proverb',
    '“It’s hard to beat a person who never gives up.” – Babe Ruth',
    '“If people are doubting how far you can go, go so far that you can’t hear them anymore.” – Michele Ruiz',
    '“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” – Arianna Huffington',
    '“Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.” – Joss Whedon',
    '“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” — Mark Twain',
    '"Success is not final; failure is not fatal: It is the courage to continue that counts." — Winston S. Churchill',
    '“Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.” —Dale Carnegie',
    '"Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan Press On has solved and always will solve the problems of the human race." —Calvin Coolidge',
    '“Success is peace of mind, which is a direct result of self-satisfaction in knowing you made the effort to become the best of which you are capable.” —John Wooden',
    '“Just one small positive thought in the morning can change your whole day.” — Dalai Lama',
    '“Inspiration does exist, but it must find you working.” —Pablo Picasso',
    '“If you believe something needs to exist, if its something you want to use yourself, dont let anyone ever stop you from doing it.” —Tobias Lütke',
    '“True freedom is impossible without a mind made free by discipline.” ―Mortimer J. Adler',
    '“If you cant yet do great things, do small things in a great way.” ―Napoleon Hill',
    '“Fear of what other people will think is the single most paralyzing dynamic in business and in life. The best moment of my life was the day I realized that I no longer give a damn what anybody thinks. That’s enormously liberating and freeing, and it’s the only way to live your life and do your business” — Cindy Gallop',
    '"Worry is a misuse of imagination." —Unknown',
    '“When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.” — Henry Ford',
    '“Start where you are. Use what you have. Do what you can.” — Arthur Ashe',
    '“Hustle beats talent when talent doesn’t hustle” – Ross Simmonds',

];

quoteBtn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteOutput.innerHTML = randomQuote;
});

// calculator
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.previousOperand !== '') {
            this.compute()
        };
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1];
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = 
            this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = 
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandTextElement.innerText = '';
        }
    }

};



const numberButtons = document.querySelectorAll('[calc-number]');
const operationButtons = document.querySelectorAll('[calc-operation]');
const equalsButton = document.querySelector('[calc-equals]');
const deleteButton = document.querySelector('[calc-delete]');
const allClearButton = document.querySelector('[all-clear]');
const previousOperandTextElement = document.querySelector('[calc-previous-operand]');
const currentOperandTextElement = document.querySelector('[calc-current-operand]');

const calculator = new Calculator(previousOperandTextElement,
    currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
});
    
equalsButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

allClearButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});

