
export const setGamePage = () => {
    const gameSection = document.querySelector('.game-page') as HTMLElement;
    const enterSection = document.querySelector('.game-enter') as HTMLElement;

    enterSection.style.opacity = '0';
    setTimeout(() => {
        enterSection.style.display = 'none';
        gameSection.style.display = 'block';
        gameSection.style.opacity = '1';
    }, 500);
}