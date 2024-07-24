function calculateBMI() {
    const weight = parseFloat(document.getElementById('weightSlider').value);
    const height = parseFloat(document.getElementById('heightSlider').value);

    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; 

    if (weight > 0 && height > 0) {
        // Convert height from centimeters to meters
        const heightInMeters = height / 100;
        // Calculate BMI
        const bmi = weight / (heightInMeters * heightInMeters);
        let category;

        // Determine the BMI category
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            category = 'Healthy range';
        } else if (bmi >= 25 && bmi <= 29.9) {
            category = 'Overweight';
        } else if (bmi >= 30 && bmi <= 39.9) {
            category = 'Obesity';
        } else {
            category = 'Severe obesity';
        }

       
        resultDiv.innerHTML = `
            <div class="card position-absolute" style="width: 20%; top: 45%; left: 66%; transform: translate(-50%, -50%); background-color: transparent;  border:none;">
                
                <div class="card-img-overlay">
                    <h5 class="card-title text-light text-center" > Your BMI is: ${bmi.toFixed(2)} <br>(${category})</h5>
                </div>
            </div>
        `;
    } else {
      
        resultDiv.innerHTML = `
            <div class="card text-bg-dark position-absolute" style="width: 25%; top: 40%; left: 50%; transform: translate(-50%, -50%); border:none;">
                <div class="card-body">
                    Please enter valid weight and height values.
                </div>
            </div>
        `;
    }
}


function updateHeightValue() {
    const heightValue = document.getElementById('heightSlider').value;
    document.getElementById('heightValue').textContent = heightValue;
}


function updateWeightValue() {
    const weightValue = document.getElementById('weightSlider').value;
    document.getElementById('weightValue').textContent = weightValue;
}


document.getElementById('heightSlider').addEventListener('input', updateHeightValue);
document.getElementById('weightSlider').addEventListener('input', updateWeightValue);
