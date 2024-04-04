//Inicialmente, exibe apenas a primera etapa do formulario
let currentStep = 1;
showStep(currentStep);

// Função para exibir a etapa atual e ocultar as outras
function showStep(step) {
    const steps = document.querySelectorAll('.step');
    for (let i = 0; i < steps.length; i++) {
        if (i + 1 === step) {
            steps[i].style.display = 'block';
        } else {
            steps[i].style.display = 'none';
        }
    }
}

// Função para avançar para a próxima etapa
function nextStep(step) {
    //validar a entrada antes de avançar
    if (!validateStep(step)) {
        return;
    }

    // avançar para a próxima etapa
    currentStep = step + 1;
    showStep(currentStep);
}

// Função para validar a entrada na etapa atual
function validateStep(step) {
    // Aqui voce pode adicionar lógica de validação para cada etapa
    // Por exemplo, verificar se os campos obrigatórios foram preenchidos

    // Exemplo simples: verifica se todos os campos estao preenchidos
    const inputs = document.querySelectorAll('.step:nth-child('+ step +') input');
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            alert('Por favor, preencha todos os campos.');
            return false;
        }
    }

    // Se a validação for bem-sucedida, retorna verdadeiro
    return true;
}

// Função para enviar o  formulário
function submitForm() {
    // Aqui voce pode adicionar lógica para enviar os dados do formulário
    // para o servidor
    // Por Exemplo, usar AJAX para enviar os dados sem recarregar a página
    alert('Formulário enviado com sucesso')
}
