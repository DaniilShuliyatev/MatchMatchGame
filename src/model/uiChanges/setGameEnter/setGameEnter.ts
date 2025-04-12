

export const setGameEnter = () => {
    const gamePage = document.querySelector('.game-page') as HTMLDivElement;
    const enterPage = document.querySelector('.game-enter') as HTMLDivElement;
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card');
    const recordCount = document.querySelector('.game-page_counter') as HTMLDivElement;

    gamePage.classList.add('game-page_off')
    setTimeout(() => {
        gamePage.classList.remove('game-page_off')
        gamePage.style.display = 'none';
        enterPage.style.display = 'flex';
        enterPage.style.opacity = '1';

        recordCount.innerHTML = 'Flips count: 0';

        cards.forEach(card => {
            card.remove();
        })
    }, 500)
}