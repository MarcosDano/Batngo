// Các phần tử HTML
const flame = document.getElementById('flame');
const smoke = document.getElementById('smoke');
const flameContainer = document.getElementById('candle-flame-container');
const cardClosed = document.getElementById('card-closed');
const cardOpen = document.getElementById('card-open');
const song = document.getElementById('birthday-song');
const restartBtn = document.getElementById('restart-btn');

// Sự kiện chạm để thổi nến
flameContainer.addEventListener('click', () => {
    // 1. Tắt lửa, hiện khói
    flame.classList.remove('flicker');
    flame.classList.add('vanish');
    smoke.classList.remove('hidden');

    // 2. Mở thiệp
    setTimeout(() => {
        // Xóa khói
        smoke.classList.add('vanish');
        // Chuyển màn hình
        cardClosed.style.transform = 'translateY(-100%)';
        cardClosed.style.opacity = '0';
        
        cardOpen.classList.remove('hidden');
        cardOpen.classList.add('active');
        
        // Phát nhạc
        song.play();

        // Bắn pháo giấy
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 }
        });

    }, 800); // Đợi khói mờ dần
});

// Sự kiện trở lại
restartBtn.addEventListener('click', () => {
    location.reload();
});
