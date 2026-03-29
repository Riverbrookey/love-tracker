const countdown = () => {
    const endingDate = new Date('2026-06-01T00:00:00Z');
    const currentDate = new Date();
    const totalSeconds = (endingDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);
    const seconds = Math.floor(totalSeconds % 60);

    document.getElementById('countdown').innerHTML = `Days: ${days}, Hours: ${hours}, Minutes: ${minutes}, Seconds: ${seconds}`;
};

setInterval(countdown, 1000);

const loveChart = () => {
    const ctx = document.getElementById('loveChart').getContext('2d');
    const data = {
        labels: ['Communication', 'Trust', 'Respect', 'Support', 'Passion'],
        datasets: [{
            label: 'Love Metrics',
            data: [20, 15, 30, 25, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }],
    };
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true },
            },
        },
    });
};

window.onload = () => {
    countdown();
    loveChart();
};