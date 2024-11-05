const storyText = document.getElementById("story-text");
const choicesContainer = document.getElementById("choices-container");

let currentStep = 0;

const steps = [
    {
        text: "Você está em uma floresta escura. À sua frente há dois caminhos. Um leva para a direita e outro para a esquerda.",
        choices: [
            { text: "Ir para a direita", nextStep: 1 },
            { text: "Ir para a esquerda", nextStep: 2 }
        ]
    },
    {
        text: "Você encontrou um rio. Você pode tentar atravessar ou seguir o rio.",
        choices: [
            { text: "Atravessar o rio", nextStep: 3 },
            { text: "Seguir o rio", nextStep: 4 }
        ]
    },
    {
        text: "Você encontrou uma caverna. Parece assustadora, mas talvez seja um bom abrigo.",
        choices: [
            { text: "Entrar na caverna", nextStep: 5 },
            { text: "Continuar pela floresta", nextStep: 6 }
        ]
    },
    {
        text: "Você tentou atravessar o rio, mas a correnteza era muito forte. Você foi levado pela água e o jogo acabou.",
        choices: [
            { text: "Recomeçar", nextStep: 0 }
        ]
    },
    {
        text: "Seguindo o rio, você encontra uma vila segura. Parabéns, você encontrou ajuda e venceu o jogo!",
        choices: [
            { text: "Recomeçar", nextStep: 0 }
        ]
    },
    {
        text: "Dentro da caverna, você encontra um tesouro escondido! Parabéns, você venceu o jogo!",
        choices: [
            { text: "Recomeçar", nextStep: 0 }
        ]
    },
    {
        text: "Ao continuar pela floresta, você se perde e acaba voltando para o mesmo ponto inicial.",
        choices: [
            { text: "Recomeçar", nextStep: 0 }
        ]
    }
];

function startGame() {
    currentStep = 0;
    updateStep();
}

function updateStep() {
    const step = steps[currentStep];
    storyText.innerText = step.text;
    choicesContainer.innerHTML = "";

    step.choices.forEach(choice => {
        const button = document.createElement("button");
        button.innerText = choice.text;
        button.onclick = () => {
            currentStep = choice.nextStep;
            updateStep();
        };
        choicesContainer.appendChild(button);
    });
}

startGame();
