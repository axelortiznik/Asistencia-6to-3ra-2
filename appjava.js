// REEMPLAZÁ ESTE LINK CON TU URL DE GOOGLE APPS SCRIPT
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbygNKvHZ6wn3x2Whml4st8LiFYOOBvxJ34TCFtpQMUSVytFLK3Bz2sct7F7HeGOWk8/exec";

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
        msgDiv.innerText = "¡Presente registrado! Ya podés cerrar esta pestaña.";
        msgDiv.style.display = "block";
        msgDiv.style.padding = "10px";
        msgDiv.style.borderRadius = "5px";
        msgDiv.style.backgroundColor = "#dcfce7";
        msgDiv.style.color = "#166534";
        document.getElementById('attendanceForm').reset();
    })
    .catch(error => {
        msgDiv.innerText = "Error de conexión. Intentá de nuevo.";
        msgDiv.style.display = "block";
        msgDiv.style.backgroundColor = "#fee2e2";
        msgDiv.style.color = "#991b1b";
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerText = "Registrar Presente";
    });
});
