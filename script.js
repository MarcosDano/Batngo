const flame = document.getElementById('flame');
const smoke = document.getElementById('smoke');
const flameContainer = document.getElementById('candle-flame-container');
const cardClosed = document.getElementById('card-closed');
const cardOpen = document.getElementById('card-open');
const song = document.getElementById('birthday-song');
const restartBtn = document.getElementById('restart-btn');

flameContainer.addEventListener('click', () => {
    // 1. Tắt lửa
    flame.classList.add('hidden');
    
    // 2. Hiện khói bay lên
    smoke.classList.remove('hidden');
    smoke.classList.add('smoke-anim');

    // 3. Chờ khói bay một chút rồi mở thiệp (khoảng 1 giây)
    setTimeout(() => {
        // Trượt màn hình 1 lên trên
        cardClosed.style.transform = 'translateY(-100%)';
        cardClosed.style.opacity = '0';
        
        // Hiện màn hình 2
        cardOpen.classList.remove('hidden');
        // Cho phép trình duyệt render kịp trước khi thêm class active
        setTimeout(() => { cardOpen.classList.add('active'); }, 50);
        
        // Bật nhạc (Lưu ý: Một số trình duyệt trên iOS cần tương tác chạm này để cho phép phát nhạc)
        song.play().catch(e => console.log("Trình duyệt chặn tự động phát nhạc: ", e));

        // Bắn pháo giấy
        fireConfetti();

    }, 1000); 
});

restartBtn.addEventListener('click', () => {
    location.reload();
});

// Hàm tạo pháo giấy nhiều màu
function fireConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 15 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        confetti(Object.assign({}, defaults, { particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
    }, 250);
}
