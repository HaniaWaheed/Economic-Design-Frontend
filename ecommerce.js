document.addEventListener('DOMContentLoaded', function() {
    // Timer Functionality
    const timerElements = {
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
        day: document.getElementById('day'),
        date: document.getElementById('date')
    };

    function updateTimer() {
        const now = new Date();
        
        // Update time with zero-padding
        timerElements.hours.textContent = now.getHours().toString().padStart(2, '0') + ' Hours';
        timerElements.minutes.textContent = now.getMinutes().toString().padStart(2, '0') + ' Minutes';
        timerElements.seconds.textContent = now.getSeconds().toString().padStart(2, '0') + ' Seconds';
        
        // Update date and day
        timerElements.day.textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
        timerElements.date.textContent = now.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    }

    // Initialize timer only if elements exist
    if (timerElements.hours && timerElements.minutes && timerElements.seconds) {
        setInterval(updateTimer, 1000);
        updateTimer();
    }
});