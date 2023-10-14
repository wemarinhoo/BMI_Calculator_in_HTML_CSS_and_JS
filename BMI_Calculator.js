const calculator = document.getElementById('calculator');

calculator.addEventListener('submit', function(event) {
  event.preventDefault();

  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  const value = document.getElementById('value');
  value.textContent = '';
  const bmi = (weight / (height * height)).toFixed(2);

  let bmi_classification = '';

  value.classList.add('warning');
  document.getElementById('infos').classList.remove('hidden');

  if (bmi < 18.5) {
    bmi_classification = "Be careful, you are underweight!";
    value.classList.remove('normal');
  } else if (bmi >= 18.5 && bmi <= 25) {
    bmi_classification = "Congratulations, you are at your ideal weight";
    value.classList.remove('warning');
    value.classList.add('normal');
  } else if (bmi > 25 && bmi <= 30) {
    bmi_classification = "You are slightly over your ideal weight";
    value.classList.remove('normal');
  } else if (bmi > 30 && bmi <= 35) {
    bmi_classification = "Be careful, you have grade 1 obesity";
    value.classList.remove('normal');
  } else if (bmi > 35 && bmi <= 40) {
    bmi_classification = "Be careful, you have grade 2 obesity (severe)";
    value.classList.remove('normal');
  } else {
    bmi_classification = "Be careful, you have grade 3 obesity (morbid)";
    value.classList.remove('normal');
  }

  value.textContent = bmi;
  document.getElementById('bmi_classification').textContent = bmi_classification;
});

