import { setGamePage } from "../../uiChanges/setGame/setGamePage";


export const showCards = (cardsCount: number, parentElement: HTMLDivElement) => {
    const cards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.card');
    switch (cardsCount) {
        case 18: 
            parentElement.style.gridTemplateColumns = 'repeat(3, 24vw)';
            cards.forEach(card => {
                card.style.width = '24vw';
            })
            break;
        default:
            parentElement.style.gridTemplateColumns = 'repeat(4, 20vw)';
    }

    setGamePage();
}