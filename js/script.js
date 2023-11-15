let currentStep = 1;
    const form = document.getElementById('wizardForm');
    const steps = document.querySelectorAll('.step');

    function showStep(step) {
        steps.forEach((s, index) => {
            if (index + 1 === step) {
                s.style.display = 'block';
            } else {
                s.style.display = 'none';
            }
        });
    }

    function nextStep() {
        if (currentStep < steps.length) {
            currentStep++;
            showStep(currentStep);
        }
    }

    function prevStep() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
        }
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Formulario enviado con éxito.');
    });

    showStep(currentStep);
