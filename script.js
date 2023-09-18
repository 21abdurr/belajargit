// Handle form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Simpan data form dalam variabel
    const formData = new FormData(contactForm);

    // Kirim data form ke server atau tambahkan logika sesuai kebutuhan
    // Di sini, Anda bisa menambahkan logika untuk mengirim email atau menyimpan pesan ke database

    // Setelah pengiriman berhasil, reset form
    contactForm.reset();
});

// Toggle responsive menu
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('show-menu');
});
