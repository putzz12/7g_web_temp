document.addEventListener('DOMContentLoaded', function() {
    // 1. Set Tahun Saat Ini di Footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // 2. Smooth Scroll untuk Navigasi
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Adjust scroll position to account for sticky header
                const headerHeight = document.querySelector('.header').offsetHeight;
                window.scrollTo({
                    top: targetElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu after clicking a link
            const mainNav = document.querySelector('.main-nav');
            const mobileMenu = document.getElementById('mobile-menu');
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileMenu.classList.remove('active'); // Remove X icon
            }
        });
    });

    // 3. Slideshow Otomatis (Foto Geser)
    let slideIndex = 0;
    const slides = document.getElementsByClassName("mySlides");

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000); // Ganti gambar setiap 5 detik (5000ms)
    }
    if (slides.length > 0) { // Only run if slides exist
        showSlides();
    }

    // 4. Toggle Menu Mobile (Hamburger Icon)
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    mobileMenu.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        mobileMenu.classList.toggle('active'); // Add active class to change hamburger to X
    });

    // 5. Google Maps Link (Button "Bawa Aku Kesana")
    const mapBtn = document.querySelector('.map-btn');
    if (mapBtn) {
        mapBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Link langsung ke Google Maps dengan koordinat SMPN 1 Mejayan
            // Ganti ini dengan link Google Maps yang akurat jika Anda punya
            const googleMapsLink = "https://www.google.com/maps/place/SMPN+1+Mejayan,+Jl.+Panglima+Sudirman+No.71,+Sanggrahan,+Mejayan,+Kec.+Mejayan,+Kabupaten+Madiun,+Jawa+Timur+63153/@-7.549355,111.6678237,17z/data=!4m6!3m5!1s0x2e79c80a4e819dd3:0xd9783f10ee7df1d7!8m2!3d-7.549355!4d111.6678237!16s%2Fg%2F1hm1sb201?source=lnms&utm_campaign=ml-ardl&g_ep=Eg1tbF8yMDI1MDcyN18wIJvbDyoASAJQAQ%3D%3D";
            window.open(googleMapsLink, '_blank');
        });
    }

    // 6. Form Kontak dengan Formspree
    // URL action di HTML (formspree.io/f/your_form_id) harus diganti dengan ID form Anda
    // Script ini tidak perlu diubah, karena Formspree menangani pengiriman data secara langsung.
    // Pastikan Anda mendaftar di Formspree (formspree.io) untuk mendapatkan form ID Anda.
    // dan ganti 'patrubambong@gmail.com' dengan email tujuan di HTML (<input type="hidden" name="_cc" value="patrubambong@gmail.com">)
});
