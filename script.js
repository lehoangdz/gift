document.getElementById('start-btn').onclick = function() {
    document.getElementById('birthday-card').style.display = 'none';
    document.getElementById('gifts-section').style.display = 'block';
    showBalloons();
    // Phát nhạc khi nhấn nút (nếu bị chặn tự động)
    var music = document.getElementById('bg-music');
    if (music) music.play();
};

const gifts = document.querySelectorAll('.gift');
const giftContent = document.getElementById('gift-content');
let openedGifts = {};

gifts.forEach(gift => {
    gift.onclick = function() {
        const giftId = this.getAttribute('data-gift');
        if (openedGifts[giftId]) return;
        openedGifts[giftId] = true;
        this.style.opacity = 0.5;
        showGiftContent(giftId);
    };
});

function showGiftContent(id) {
    if (id == '1') {
        giftContent.innerHTML = '<b>Lời chúc:</b> Chúc .... luôn vui vẻ, hạnh phúc và xinh đẹp như bây giờ! 💖';
        showHearts();
    } else if (id == '2') {
        // Hiển thị slideshow 10 ảnh lớn, lần lượt hiện ra
        const images = [
            'mot.jpg',
            'hai.jpg',
            'ba.jpg',
            'bon.jpg',
            'nam.jpg',
            'sau.jpg',
            'bay.jpg',
            'tam.jpg',
            'chin.jpg',
            'muoi.jpg',
            'muoimot.jpg',
            'muoihai.jpg',
            'muoiba.jpg',
            'muoibon.jpg',
            'muoilam.jpg',
            'muoisau.jpg',
            'muoibay.jpg',
            'muoitam.jpg',
            'muoichin.jpg',
            'haimuoi.jpg',
            ];
        let idx = 0;
        giftContent.innerHTML = '<b>Nhân vật chính hôm nay nè:</b><br><div id="slideshow" style="margin-top:16px;"></div>';
        const slideshow = document.getElementById('slideshow');
        function showNextImg() {
            if (idx >= images.length) return;
            const img = document.createElement('img');
            img.src = images[idx];
            img.alt = 'Ảnh kỷ niệm';
            img.style = 'max-width:340px; max-height:420px; border-radius:18px; margin:10px; display:block; margin-left:auto; margin-right:auto; box-shadow:0 4px 24px #e7548080; opacity:0; transition:opacity 1s;';
            slideshow.appendChild(img);
            setTimeout(() => { 
                img.style.opacity = 1; 
                img.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }, 100);
            idx++;
            if (idx < images.length) setTimeout(showNextImg, 1200);
            if (idx === images.length) {
                // Sau khi chiếu hết ảnh, hiển thị video
                setTimeout(() => {
                    const video = document.createElement('video');
                    video.src = 'vd.mp4';
                    video.controls = true;
                    video.style = 'max-width:360px; max-height:480px; border-radius:18px; margin:16px auto 0 auto; display:block; box-shadow:0 4px 24px #e7548080;';
                    video.autoplay = true;
                    video.loop = true;
                    video.muted = true;
                    slideshow.appendChild(video);
                    video.scrollIntoView({ behavior: 'smooth', block: 'end' });
                    // Hiện dần các dòng text chúc mừng sau video
                    const messages = [
                        'Đây cũng là lần đầu tiên mà tớ nói chuyện cùng cậu nhưng tớ cũng đã biết cậu từ lâu rồi,',
                        'tớ mong rằng cậu sẽ luôn hạnh phúc, tươi cười, tràn đầy năng lượng như những tấm ảnh trên,',
                        'chúc cậu có một sinh nhật vui vẻ, một tuổi mới đầy thành công may mắn và thật nhiều sức khỏe!!!',
                        'hy vọng chúng ta có thể quen và là bạn với nhau nhee ;-; '
                    ];
                    setTimeout(() => {
                        let msgIdx = 0;
                        function showNextMsg() {
                            if (msgIdx >= messages.length) return;
                            const p = document.createElement('p');
                            p.textContent = messages[msgIdx];
                            p.style = 'font-size:1.15em;color:#e75480;text-align:center;margin:10px 0;opacity:0;transition:opacity 1s;';
                            slideshow.appendChild(p);
                            setTimeout(() => {
                                p.style.opacity = 1;
                                p.scrollIntoView({ behavior: 'smooth', block: 'end' });
                            }, 100);
                            msgIdx++;
                            if (msgIdx < messages.length) setTimeout(showNextMsg, 1800);
                        }
                        showNextMsg();
                    }, 1500);
                }, 1200);
            }
        }
        showNextImg();
        showFlowers();
    } else if (id == '3') {
        giftContent.innerHTML = '<b>Pháo hoa chúc mừng!</b> Chúc cậu có một tuổi mới rực rỡ! 🎆';
        showFireworks();
    }
}

// Hiệu ứng bong bóng
function showBalloons() {
    const container = document.getElementById('effect-container');
    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.background = `hsl(${Math.random()*360},80%,80%)`;
        balloon.style.animationDuration = (4 + Math.random()*3) + 's';
        container.appendChild(balloon);
        setTimeout(() => balloon.remove(), 7000);
    }
}

// Hiệu ứng trái tim
function showHearts() {
    const container = document.getElementById('effect-container');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (2 + Math.random()*2) + 's';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}

// Hiệu ứng hoa nở
function showFlowers() {
    const container = document.getElementById('effect-container');
    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.animationDuration = (2 + Math.random()*2) + 's';
        container.appendChild(flower);
        setTimeout(() => flower.remove(), 3500);
    }
}

// Hiệu ứng pháo hoa
function showFireworks() {
    const container = document.getElementById('effect-container');
    for (let i = 0; i < 5; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = (20 + Math.random()*60) + 'vw';
        firework.style.animationDuration = (1.2 + Math.random()*0.8) + 's';
        container.appendChild(firework);
        setTimeout(() => firework.remove(), 2000);
    }
}

// Thêm CSS động cho hiệu ứng
const style = document.createElement('style');
style.innerHTML = `
.balloon {
    position: fixed;
    bottom: -80px;
    width: 32px; height: 48px;
    border-radius: 16px 16px 16px 16px / 24px 24px 32px 32px;
    opacity: 0.7;
    animation: balloonUp linear forwards;
    z-index: 101;
}
@keyframes balloonUp {
    to { bottom: 110vh; opacity: 0; }
}
.heart {
    position: fixed;
    bottom: 0;
    width: 28px; height: 28px;
    background: pink;
    clip-path: polygon(50% 0%, 100% 35%, 82% 100%, 50% 80%, 18% 100%, 0 35%);
    opacity: 0.8;
    animation: heartUp linear forwards;
    z-index: 101;
}
@keyframes heartUp {
    to { bottom: 100vh; opacity: 0; }
}
.flower {
    position: fixed;
    bottom: 0;
    width: 32px; height: 32px;
    background: radial-gradient(circle at 16px 16px, #ffb6c1 60%, #fff 100%);
    border-radius: 50%;
    opacity: 0.8;
    animation: flowerUp linear forwards;
    z-index: 101;
}
@keyframes flowerUp {
    to { bottom: 90vh; opacity: 0; }
}
.firework {
    position: fixed;
    bottom: 10vh;
    width: 8px; height: 8px;
    background: yellow;
    border-radius: 50%;
    box-shadow: 0 0 24px 8px #ff0, 0 0 48px 16px #f0f;
    opacity: 0.9;
    animation: fireworkUp linear forwards;
    z-index: 101;
}
@keyframes fireworkUp {
    0% { bottom: 10vh; opacity: 1; }
    60% { bottom: 60vh; opacity: 1; }
    100% { bottom: 80vh; opacity: 0; }
}
`;
document.head.appendChild(style);
