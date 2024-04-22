let countdownInterval;

function startTimer() {
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    const totalDuration = hours * 3600 + minutes * 60 + seconds;
    const phaseDuration = Math.floor(totalDuration / 4); // 假设有4张图片

    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (countdownInterval) {
        clearInterval(countdownInterval);
    }

    countdownInterval = setInterval(function() {
        const currentPhase = Math.min(3, Math.floor((totalDuration - totalSeconds) / phaseDuration) + 1);
        document.getElementById('treeImage').src = `tree${currentPhase}.png`;
        if (totalSeconds <= 0) {
            clearInterval(countdownInterval);
            document.getElementById('countdown').innerText = "不愧是你！距离理想的自己更进一步！";
            document.getElementById('treeImage').src = "tree4.png"; // 确保最后显示的是大树的图片
            return;
        }

        const displayHours = Math.floor(totalSeconds / 3600);
        const displayMinutes = Math.floor((totalSeconds % 3600) / 60);
        const displaySeconds = totalSeconds % 60;

        document.getElementById('countdown').innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;

        totalSeconds--;
    }, 1000);
}
