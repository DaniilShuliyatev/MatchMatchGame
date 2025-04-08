import { cardIconsArr } from "../../consts/consts";


export const mountingCards = (cardsCount: number): HTMLDivElement[] => {
    let iconIndex: number = Math.floor(Math.random() * (cardsCount / 2 - 1));
    const iconsArr: HTMLDivElement[] = [];
    
    for (let i = 0; i < cardsCount / 2; i++) {
        const card: HTMLDivElement = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-icon', cardIconsArr[iconIndex]);
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                </div>
                <div class="card-back">
                    <img src="${cardIconsArr[iconIndex]}" alt='${iconIndex}'/>
                </div>
            </div>
        `
        iconsArr.push(card);
        iconsArr.push(card);
        
        iconIndex = iconIndex == (cardIconsArr.length - 1) ? 0 : ++iconIndex;
    }  

    return iconsArr;
}