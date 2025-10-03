const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    // console.log(height, weight);
    
    const results = document.querySelector('#results')
    if(height == '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please, enter a valid height ${height}`;
    }

    else if(weight == '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please, enter a valid weight ${weight}`;
    }

    else{
        const bmi = ((weight * 10000)/(height * height)).toFixed(3)
        if(bmi <18.6){
            results.innerHTML = `you are underweight ${bmi}`;
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            results.innerHTML = `you are in normal range ${bmi}`;
        }
        else
        {
            results.innerHTML = `you are uoverweight ${bmi}`;
        }
    }
})

