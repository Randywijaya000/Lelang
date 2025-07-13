// --- script.js ---

// Fungsi untuk menangani klik tombol
function handleButtonClick() {
    // 1. Mengubah teks tombol
    const button = document.querySelector('.cool-button'); // Ambil elemen tombol
    if (button) { // Pastikan tombol ditemukan
        button.textContent = 'Terima Kasih Telah Mengklik!';
        // Opsional: Nonaktifkan tombol setelah diklik sekali
        button.disabled = true;
        button.style.cursor = 'not-allowed';
    }

    // 2. Menampilkan pesan di konsol browser
    console.log('Tombol "Klik Saya!" telah diklik!');

    // 3. (Opsional) Menampilkan alert sederhana
    // alert('Anda berhasil mengklik tombol!');

    // 4. (Opsional) Mengubah warna latar belakang body secara acak
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
    console.log(`Warna latar belakang diubah menjadi: ${randomColor}`);
}

// Menambahkan Event Listener saat DOM sudah siap
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.cool-button');

    // Pastikan tombol dengan class 'cool-button' ada sebelum menambahkan event listener
    if (button) {
        button.addEventListener('click', handleButtonClick);
        console.log('Event listener telah ditambahkan ke tombol.');
    } else {
        console.warn('Tombol dengan class "cool-button" tidak ditemukan di dokumen.');
    }
});