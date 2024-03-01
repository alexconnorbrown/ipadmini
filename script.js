document.addEventListener('DOMContentLoaded', () => {
    const startTime = new Date('March 1, 2024 00:00:00');
    const endTime = new Date('April 1, 2024 00:00:00');
    updateDisplay();

    function updateDisplay() {
        const now = new Date();
        const timeDiff = now - startTime; // milliseconds between now & March 1st
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        let timeString = days < 5 ? `${hours + days * 24} hours and ${minutes} minutes` : `${days} days, ${hours} hours and ${minutes} minutes`;
        document.getElementById('timeDisplay').textContent = timeString;

        const totalDuration = endTime - startTime;
        const elapsedPercentage = ((timeDiff / totalDuration) * 100).toFixed(2);
        document.getElementById('progressBar').style.width = `${elapsedPercentage}%`;
        document.getElementById('progressPercentage').textContent = `${elapsedPercentage}% of the way to April 1st`;
    }

    setInterval(updateDisplay, 60000); // Update every minute
});
