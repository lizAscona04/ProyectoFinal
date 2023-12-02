const questions = [
    {
        question: "¿Cuál es la capital de Paraguay?",
        options: ["Asunción", "Luque", "Encarnación", "Ciudad del Este"],
        correctAnswer: "Asunción"
    },
    {
        question: "¿Qué idioma se habla mayoritariamente en Paraguay?",
        options: ["Español", "Portugués", "Guaraní", "Inglés"],
        correctAnswer: "Guaraní"
    },
    {
        question: "¿Cuál es el plato típico paraguayo?",
        options: ["Asado", "Milanesa", "Chipa", "Empanada"],
        correctAnswer: "Chipa"
    },
  
    {
        question: "¿Cuál es la danza folklórica más representativa de Paraguay?",
        options: ["Polca", "Cueca", "Candombe", "Mazurca"],
        correctAnswer: "Polca"
    },
    {
        question: "¿En qué fecha se celebra la independencia de Paraguay?",
        options: ["15 de mayo", "1 de marzo", "25 de diciembre", "5 de julio"],
        correctAnswer: "15 de mayo"
    },
    {
        question: "¿Qué río forma la frontera entre Paraguay y Argentina?",
        options: ["Río Paraná", "Río Paraguay", "Río Uruguay", "Río de la Plata"],
        correctAnswer: "Río Paraná"
    },
    {
        question: "¿Quién es una figura importante en la literatura paraguaya, conocida como 'el poeta de la guitarra'?",
        options: ["Agustín Barrios", "Augusto Roa Bastos", "José Asunción Flores", "Fulgencio Yegros"],
        correctAnswer: "Agustín Barrios"
    },
    {
        question: "¿Cuál es el evento cultural más grande de Paraguay, que celebra la música y la danza tradicional?",
        options: ["Festival de Ñanduti", "Festival del Tereré", "Festival de la Caña", "Festival del Guaraní"],
        correctAnswer: "Festival del Guaraní"
    }
    

];

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionTextElement = document.getElementById("question-text");
    const optionsList = document.getElementById("options-list");

    questionTextElement.textContent = currentQuestion.question;
    optionsList.innerHTML = ""; 

    currentQuestion.options.forEach((option, index) => {
        const optionElement = document.createElement("li");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(index));
        optionsList.appendChild(optionElement);
    });
}

function checkAnswer(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultText = document.getElementById("result");

    if (currentQuestion.options[optionIndex] === currentQuestion.correctAnswer) {
        resultText.textContent = "¡Correcto!";
        score++;
    } else {
        resultText.textContent = `Incorrecto. La respuesta correcta es: ${currentQuestion.correctAnswer}`;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    const quizContainer = document.getElementById("quiz-container");
    const resultText = document.getElementById("result");

    quizContainer.innerHTML = `
        <h1>¡Fin del juego!</h1>
        <p>Tu puntuación es: ${score}/${questions.length}</p>
        <p id="last-question-result">${getLastQuestionResult()}</p>
    `;

    function getLastQuestionResult() {
        const lastQuestion = questions[questions.length - 1];
        return `La respuesta correcta es: ${lastQuestion.correctAnswer}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endGame();
    }
}


startGame();