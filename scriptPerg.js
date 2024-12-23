// Script modificado para garantir que as funções de carregamento e resposta sejam executadas após a página carregar
document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      text: "Qual é a nossa data de aniversário de namoro?",
      options: ["11/11/2017", "15/02/2017", "24/10/2017", "24/12/2017"],
      correct: 3, // Índice correto
    },
    {
      text: "Quem pediu quem em namoro primeiro?",
      options: ["Thais", "Marlon"],
      correct: 0, // Índice correto
    },
    {
      text: "Qual foi a nossa primeira viagem juntos?",
      options: ["Ilhabela", "Praia Grande", "Itu - Tomorrowland", "Finlândia"],
      correct: 1,
    },
    {
      text: "Qual desses Filmes/Series, Ambos gostam muito!",
      options: [
        "Harry Potter",
        "Naruto",
        "Rick And Morty",
        "Piratas do Caribe",
      ],
      correct: 2,
    },
    {
      text: "Quem é mais bonito/a?",
      options: ["Marlon", "Thais"],
      correct: 1,
    },
    {
      text: "Aonde foi o primeiro beijo?",
      options: [
        "Na casa em Paulínia",
        "Praia Grande",
        "Casa da Tia Adriana",
        "Casa da vó",
      ],
      correct: 3,
    },
    {
      text: "Oque a gente mais gosta de assistir juntos?",
      options: ["Filmes", "Séries", "Videos YouTube", "Animes"],
      correct: 2,
    },
    {
      text: "Para finalizar, Quantos anos estamos juntos?",
      options: ["8 Anos", "6 Anos", "7 Anos", "10 Anos"],
      correct: 2,
    },
  ];

  let currentQuestion = 0;

  const questionText = document.getElementById("question-text");
  const optionsArea = document.getElementById("options-area"); // Corrigido para "options-area"
  const nextButton = document.getElementById("next-button");

  function loadQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.text; // Exibe a pergunta
    optionsArea.innerHTML = ""; // Limpa as opções anteriores

    // Adiciona os botões de opções
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsArea.appendChild(button);
    });

    nextButton.disabled = true; // Desabilita o botão "Próxima" inicialmente
  }

  function checkAnswer(selected) {
    const question = questions[currentQuestion];
    if (selected === question.correct) {
      alert("Você Acertou!!");
      nextButton.disabled = false; // Habilita o botão "Próxima"
    } else {
      alert("Resposta errada. Tente novamente!");
    }
  }

  nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion(); // Carrega a próxima pergunta
    } else {
      window.location.href = "fim.html";
      nextButton.disabled = true; // Desabilita o botão no final
    }
  };

  // Inicializa o jogo com a primeira pergunta
  loadQuestion();
});

let footer = document.getElementById("footer");
footer.innerHTML += `\u{1F31E}`;
footer.innerHTML += `\u{1F496}`;
