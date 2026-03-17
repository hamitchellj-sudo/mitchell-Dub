const container = document.getElementById('game-container');
const modal = document.getElementById('game-modal');
const gameFrame = document.getElementById('game-frame');
const closeBtn = document.getElementById('close-btn');

// 1. Fetch the JSON data
fetch('games.json')
    .then(response => response.json())
    .then(games => {
        games.forEach(game => {
            // 2. Create the HTML for each card
            const card = document.createElement('div');
            card.className = 'game-card';
            card.innerHTML = `
                <img src="${game.thumbnail}" alt="${game.title}">
                <h3>${game.title}</h3>
            `;
            
            // 3. Add click event to open the iframe
            card.onclick = () => {
                gameFrame.src = game.url;
                modal.classList.remove('hidden');
            };
            
            container.appendChild(card);
        });
    });

// 4. Close the modal
closeBtn.onclick = () => {
    modal.classList.add('hidden');
    gameFrame.src = ""; // Stop the game audio/logic
};