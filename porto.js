document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen-elemen yang diperlukan
    const carousel = document.querySelector('.carousel-container');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    // Cek apakah elemen utama carousel ada
    if (!carousel || !prevBtn || !nextBtn) return;

    // PENTING: Ambil elemen item pertama dengan class .carousel-item
    const firstItem = carousel.querySelector('.carousel-item');
    if (!firstItem) {
        console.error("Error: Tidak ditemukan elemen dengan class '.carousel-item'. Carousel tidak akan berfungsi.");
        return;
    }

    // Hitung lebar geseran (lebar satu item + margin-right)
    const itemStyle = window.getComputedStyle(firstItem);
    // Lebar item = Lebar visual elemen (offsetWidth) + Margin Kanan
    const itemWidth = firstItem.offsetWidth + parseFloat(itemStyle.marginRight);

    // Fungsi utama untuk menggeser carousel
    function scrollCarousel(direction) {
        // Geser berdasarkan lebar yang sudah dihitung
        carousel.scrollBy({
            left: direction * itemWidth,
            behavior: 'smooth'
        });
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        scrollCarousel(-1); // Geser ke KIRI (negatif)
    });

    nextBtn.addEventListener('click', () => {
        scrollCarousel(1); // Geser ke KANAN (positif)
    });
});