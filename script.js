document.getElementById('submit').addEventListener('click', calculateDowry);

function calculateDowry() { 
    let basePrice = 100;

    let education = document.getElementById('education').value;
    if (education === 'bachelor') basePrice *= 1.5;
    else if (education === 'college') basePrice *= 1.2;
    else if (education === 'high_school') basePrice *= 1.05;
    else if (education === 'middle_school') basePrice *= 0.9;

    let networth = document.getElementById('networth').value;
    if (networth === 'upper_class') basePrice *= 2;
    else if (networth === 'middle_class') basePrice *= 1.5;
    else if (networth === 'lower_class') basePrice *= 1.2;

    let caste = document.getElementById('caste').value;
    if (caste === 'brahmin') basePrice += 100;
    else if (caste === 'kshatriya') basePrice += 50;
    else if (caste === 'vaishya') basePrice += 20;
    else if (caste === 'shudra') basePrice += 10;
    else if (caste === 'varna') basePrice -= 50;

    if (document.getElementById('skill_music').checked) basePrice += 10;
    if (document.getElementById('skill_cook').checked) basePrice += 20;
    if (document.getElementById('skill_easygoing').checked) basePrice += 15;
    if (document.getElementById('skill_sing').checked) basePrice += 10;

    let age;
    if (document.getElementById('age_18_23').checked) age = 1.5;
    else if (document.getElementById('age_24_27').checked) age = 1.2;
    else if (document.getElementById('age_28').checked) age = 0.95;
    basePrice *= age;

    if (document.getElementById('gossip_parents').checked) basePrice *= 0.85;
    if (document.getElementById('gossip_character').checked) basePrice *= 0.9;
    if (document.getElementById('gossip_person').checked) basePrice -= 20;

    document.getElementById('result').innerHTML = `Final Price: $${basePrice.toFixed(2)}`;
}
