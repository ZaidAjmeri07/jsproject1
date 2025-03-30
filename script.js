document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
  

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Please enter valid values for weight and height.");
      return;
    }
  
    
    const bmi = weight / (height * height);
  

    const bmiValue = document.getElementById('bmi-value');
    const category = document.getElementById('category');
  
    bmiValue.textContent = bmi.toFixed(2);
  

    if (bmi < 18.5) {
      category.textContent = "Underweight";
      category.style.color = "blue";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category.textContent = "Normal weight";
      category.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
      category.textContent = "Overweight";
      category.style.color = "orange";
    } else {
      category.textContent = "Obesity";
      category.style.color = "red";
    }
  });
  