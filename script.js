async function fetchData() {
    try {
        const response = await fetch('https://rzx.nexcord.pro/api/stats');
        const data = await response.json();

        document.getElementById('guildsCount').innerText = data.guilds;
        document.getElementById('usersCount').innerText = data.users;
    } catch (error) {
        console.error('Error fetching data:', error);
        displayError();
    }
}

function displayError() {
    document.getElementById('guildsCount').innerText = '50+';
    document.getElementById('usersCount').innerText = '1400+';
}

window.onload = fetchData;
