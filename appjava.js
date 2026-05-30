const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzjqW5gf156KeBsZr9ritEXtf15qGzKqy9WOxzVbyOX9sd4xZpP-phQ-TNJB52PZi0D1A/exec";

document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.getElementById('btnSubmit');
    const msgDiv = document.getElementById('responseMessage');
    
    btn.disabled = true;
    btn.innerText = "Enviando...";

    const payload = {
        nombre: document.getElementById('studentName').value,
        pc: document.getElementById('pcNumber').value,
        codigo: document.getElementById('validationCode').value
    };

    fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        msgDiv.innerText = "¡Presente registrado! Revisá con el profe.";
        msgDiv.style.display = "block";
        msgDiv.style.backgroundColor = "#d4edda"; // Verde éxito
        document.getElementById('attendanceForm').reset();
    })
    .catch(error => {
        msgDiv.innerText = "Error. Intentá de nuevo.";
        msgDiv.style.display = "block";
        msgDiv.style.backgroundColor = "#f8d7da"; // Rojo error
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerText = "Registrar Presente";
    });
});
