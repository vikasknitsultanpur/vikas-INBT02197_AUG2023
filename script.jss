document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const getJokeBtn = document.getElementById('getJokeBtn');
    const jokeText = document.getElementById('joke');
    const categoryDisplay = document.getElementById('category-display');
    
    getJokeBtn.addEventListener('click', async () => {
        const selectedCategory = categorySelect.value;
        const apiUrl = `https://v2.jokeapi.dev/joke/${selectedCategory}`;
        
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            
            if (data.type === 'single') {
                jokeText.textContent = data.joke;
                categoryDisplay.textContent = `Category: ${selectedCategory}`;
            } else if (data.type === 'twopart') {
                jokeText.textContent = data.setup;
                categoryDisplay.textContent = `Category: ${selectedCategory}`;
            }
        } catch (error) {
            console.error('Error fetching joke:', error);
        }
    });
});
