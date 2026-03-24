const btn = document.getElementById('loveBtn');
const heartsContainer = document.getElementById('hearts');

btn.addEventListener('click', function () {
    // 弹出彩色的“培宇我爱你”
    alert("🌈 培宇我爱你 💕");

    // 爱心喷射效果
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});

// 生成爱心
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 1 + 1 + 's';
    heartsContainer.appendChild(heart);

    // 自动删除
    setTimeout(() => {
        heart.remove();
    }, 2000);
}