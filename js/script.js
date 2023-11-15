document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (validateForm(nameInput, emailInput, messageInput)) {
            generatePDF(nameInput.value, emailInput.value, messageInput.value);
            form.submit();
        }
    });

    function validateForm(name, email, message) {
        if (name.value === '') {
            alert('Por favor, ingresa tu nombre.');
            name.focus();
            return false;
        }

        if (email.value === '') {
            alert('Por favor, ingresa tu Email.');
            email.focus();
            return false;
        }

        if (message.value === '') {
            alert('Por favor, ingresa tu mensaje.');
            message.focus();
            return false;
        }

        return true;
    }

    function generatePDF(name, email, message) {
        const doc = new jsPDF();
        doc.text(20, 20, `Nombre: ${name}`);
        doc.text(20, 30, `Email: ${email}`);
        doc.text(20, 40, `Mensaje: ${message}`);
        doc.save('formulario.pdf');
    }
});
