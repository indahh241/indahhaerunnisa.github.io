document.getElementById("kontakForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let nama = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (nama && email && pesan) {
        alert(`Terima kasih, ${nama}! Pesan Anda telah dikirim.`);
        document.getElementById("kontakForm").reset();
    } else {
        alert("Harap isi semua kolom.");
    }
});
