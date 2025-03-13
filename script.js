document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores do formulário
    const name = document.getElementById('name').value.trim();
    const message = document.getElementById('message').value.trim();

    // Verifica se todos os campos estão preenchidos
    if (name && message) {
        // Formata a mensagem para o WhatsApp
        const whatsappMessage = encodeURIComponent(`${name}: ${message}`);
        const phoneNumber = '+5522997535807'; // Número do WhatsApp

        // Cria o link para o WhatsApp
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

        // Redireciona o usuário para o WhatsApp
        window.open(whatsappLink, '_blank');
    } else {
        // Exibe mensagem de erro se algum campo estiver vazio
        document.getElementById('response-message').textContent = 'Por favor, preencha todos os campos.';
        document.getElementById('response-message').style.color = '#dc3545';
    }
});
