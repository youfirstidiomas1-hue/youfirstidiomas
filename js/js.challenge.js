document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('student-login-form');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const emailInput = document.getElementById('student-email').value.trim().toLowerCase();
            const errorMessage = document.getElementById('error-message');

            // Reemplaza esta URL con tu enlace de Google Apps Script cuando lo crees
            const SHEET_API_URL = "https://script.google.com/macros/s/TU_SCRIPT_ID/exec"; 

            try {
                const response = await fetch(SHEET_API_URL);
                const students = await response.json();

                const student = students.find(s => s.Email && s.Email.toLowerCase() === emailInput);

                if (student) {
                    document.getElementById('student-name').textContent = student.Nome || 'Aluno';
                    document.getElementById('payment-status').textContent = student.StatusPagamento || 'Ativo';
                    document.getElementById('schedule-link').href = student.LinkAgendamento || '#';
                    document.getElementById('payment-link').href = student.LinkPagamento || '#';

                    document.getElementById('login-view').style.display = 'none';
                    document.getElementById('dashboard-view').style.display = 'block';
                } else {
                    errorMessage.style.display = 'block';
                }
            } catch (error) {
                console.error("Erro ao conectar com a base de dados:", error);
            }
        });
    }
});