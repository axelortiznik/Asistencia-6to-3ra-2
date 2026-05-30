const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwSws4_TekI8W1yBmRf4pgZihgUmubpdtamYoV_STKvSy9vUhu-8FLVzMWJQYtWSeL4/exec";

document.getElementById('attendanceForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.getElementById('btnSubmit');
    const msgDiv = document.getElementById('responseMessage');
    
    btn.disabled = true;
    btn.innerText = "Enviando...";
    msgDiv.style.display = "none";

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
        msgDiv.style.color = "#155724";
        msgDiv.style.backgroundColor = "#d4edda";
        msgDiv.style.padding = "10px";
        msgDiv.style.borderRadius = "5px";
        document.getElementById('attendanceForm').reset();
    })
    .catch(error => {
        msgDiv.innerText = "Error. Intentá de nuevo.";
        msgDiv.style.display = "block";
        msgDiv.style.color = "#721c24";
        console.error(error);
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerText = "Registrar Presente";
    });
});
