document.addEventListener('DOMContentLoaded', () => {
    const quizContent = document.getElementById('quiz-content');
    const nextBtn = document.getElementById('next-btn');
    const questionTitle = document.getElementById('question-title');

    const questions = [
        {
            title: "Paso 1: Nivel de Conocimiento",
            question: "¿Cuál es tu nivel actual con el idioma?",
            options: [
                "Principiante (Desde cero)",
                "Básico (Entiendo palabras sueltas)",
                "Intermedio (Puedo mantener conversaciones sencillas)",
                "Avanzado (Busco fluidez y perfeccionamiento)"
            ]
        },
        {
            title: "Paso 2: Objetivo Principal",
            question: "¿Cuál es tu principal meta al aprender?",
            options: [
                "Oportunidades laborales / Entrevistas",
                "Viajes y estilo de vida",
                "Estudios o certificaciones",
                "Superación personal"
            ]
        },
        {
            title: "Paso 3: Disponibilidad",
            question: "¿Cuánto tiempo puedes dedicarle a tu aprendizaje semanalmente?",
            options: [
                "1 a 2 horas por semana",
                "3 a 5 horas por semana",
                "Más de 5 horas por semana"
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let selectedOption = null;

    function renderQuestion() {
        const q = questions[currentQuestionIndex];
        selectedOption = null;

        if (questionTitle) questionTitle.textContent = q.title;

        quizContent.innerHTML = `
            <h3 style="color: #ffffff; font-size: 1.1rem; margin-bottom: 1.5rem;">
                ${q.question}
            </h3>
            <div class="options-group" style="display: flex; flex-direction: column; gap: 0.8rem;">
                ${q.options.map((option, index) => `
                    <button class="option-btn" data-index="${index}" style="
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(198, 162, 79, 0.4);
                        color: #ffffff;
                        padding: 0.8rem 1rem;
                        border-radius: 6px;
                        cursor: pointer;
                        text-align: left;
                        font-size: 0.95rem;
                        transition: all 0.3s ease;
                    ">
                        ${option}
                    </button>
                `).join('')}
            </div>
        `;

        const optionButtons = quizContent.querySelectorAll('.option-btn');
        optionButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                optionButtons.forEach(b => {
                    b.style.background = 'rgba(255, 255, 255, 0.05)';
                    b.style.borderColor = 'rgba(198, 162, 79, 0.4)';
                    b.style.color = '#ffffff';
                });

                e.currentTarget.style.background = '#c6a24f';
                e.currentTarget.style.borderColor = '#c6a24f';
                e.currentTarget.style.color = '#28022f';
                
                selectedOption = e.currentTarget.textContent.trim();
            });
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (selectedOption === null) {
                alert("Por favor, selecciona una opción antes de continuar.");
                return;
            }

            if (currentQuestionIndex < questions.length - 1) {
                currentQuestionIndex++;
                renderQuestion();
            } else {
                if (questionTitle) questionTitle.textContent = "¡Desafío Completado!";
                quizContent.innerHTML = `
                    <p style="color: #ffffff; font-size: 1.1rem; margin-bottom: 1.5rem;">
                        Gracias por completar el Admission Challenge. Estamos listos para armar tu plan ideal.
                    </p>
                    <a href="index.html" class="btn-gold" style="display: inline-block; padding: 0.8rem 1.5rem;">
                        Volver al Inicio
                    </a>
                `;
                nextBtn.style.display = 'none';
            }
        });
    }

    if (quizContent) renderQuestion();
});