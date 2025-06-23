document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.form-step');
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });
  }

  document.getElementById('next1').addEventListener('click', function () {
    currentStep = 1;
    showStep(currentStep);
  });

  document.getElementById('next2').addEventListener('click', function () {
    currentStep = 2;
    showStep(currentStep);
  });

  showStep(currentStep);
});
