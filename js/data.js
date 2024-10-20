document.addEventListener("DOMContentLoaded", function() {
    const data = document.getElementById('data');
    const inputText = localStorage.getItem('inputText');
    
    if (inputText) {
        data.textContent = inputText;
    } else {
        data.textContent = 'No se ingresó valor'; // Cambiar a 'data.value'
    }
});
