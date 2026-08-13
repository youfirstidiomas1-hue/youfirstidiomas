// challenge.js - Lógica exclusiva para Challenge.html
const answers = [null, null, null, null, null];
let currentQuestion = 0;

const questions = [
  {
    yes: "Excelente! Disciplina é a base. Se um dia ficar difícil, aplique a \"regra dos 15 min\" com o café para nunca perder o ritmo.",
    no: "Não se preocupe! Se você estudar apenas 15 min com o café da manhã, manterá a rotina sem esforço."
  },
  {
    yes: "Perfeito! A autonomia é o que diferencia um estudante de um profissional fluente.",
    no: "No meu método, vou te ensinar a usar ferramentas que te darão liberdade e velocidade."
  },
  {
    yes: "Ótimo! Manter o foco no resultado é essencial.",
    no: "Vou te ensinar técnicas de \"hiperfoco seletivo\" para você focar na mensagem, não no erro."
  },
  {
    no: "Incrível! A autoconfiança é metade da fluência.",
    yes: "Aqui, o erro é aprendizado. Vou te ajudar a ressignificar isso para falar com autoridade."
  },
  {
    yes: "Isso é inteligência linguística!",
    no: "Vou te ensinar a \"técnica do contorno\": como ser entendido usando o que você já sabe."
  }
];

function handleAnswer(questionIndex, isYes) {
  answers[questionIndex] = isYes;

  const feedback = document.getElementById(`feedback-${questionIndex}`);
  feedback.textContent = isYes ? questions[questionIndex].yes : questions[questionIndex].no;
  feedback.style.display = 'block';

  document.getElementById(`next-${questionIndex}`).style.display = 'inline-block';
}

function nextQuestion() {
  const currentCard = document.querySelector(`.question-card[data-question="${currentQuestion}"]`);
  currentCard.classList.remove('active');

  currentQuestion++;

  if (currentQuestion < 5) {
    const nextCard = document.querySelector(`.question-card[data-question="${currentQuestion}"]`);
    nextCard.classList.add('active');
  } else {
    showResult();
  }
}

function showResult() {
  const yesCount = answers.filter(answer => answer === true).length;
  const resultCard = document.getElementById('result-card');

  if (yesCount >= 3) {
    document.getElementById('result-title').textContent = "🎯 Parabéns!";
    document.getElementById('result-subtitle').textContent = "Perfil de Alto Desempenho";
    document.getElementById('result-subtitle').style.color = "#48bb78";
    document.getElementById('result-text').textContent = "Você possui as habilidades fundamentais para o Coaching Premium. Seu perfil é o que buscamos para resultados explosivos em curto prazo.";
  } else {
    document.getElementById('result-title').textContent = "💪 Vamos juntos!";
    document.getElementById('result-subtitle').textContent = "Perfil de Transformação";
    document.getElementById('result-subtitle').style.color = "#ed8936";
    document.getElementById('result-text').textContent = "Você ainda não desenvolveu algumas habilidades, mas focaremos especialmente em fortalecer sua confiança e rotina.";
  }

  resultCard.classList.add('show');
}
