const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('.result');
    const result1=document.querySelector('.result1');

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Enter the correct numericals for height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;
    }

    if(bmi<18.6){
        result1.innerHTML=' you are underweight'
    }
    else if(bmi>18.6 && bmi<24.9){
        result1.innerHTML='correct weight';
    }
    else{
        result.innerHTML=overweight;
    }
});