import { modeCount } from "../consts/consts";
import { mountingCards } from "../features/mountingCards/mountingCards";
import { showCards } from "../features/showCards/showCards";
import { shuffleCards } from "../features/shuffleCards/shuffleCards";
import { gameStart } from "../features/gameStart/gameStart";
import { GameMods } from "../types/types";
import { victoryModal } from "../features/victoryModal/victoryModal";
import { setGameModeRecord } from "../uiChanges/setGameModeRecord/setGameModeRecord";
import { leaveGamePage } from "../features/leaveGamePage/leaveGamePage";

export const buildCardsField = (gameMode: GameMods) => {
    const cardsWrapper = document.querySelector('.game-page_wrapper') as HTMLDivElement;
    const cardsCount: number = modeCount[gameMode];
    const iconsArr: HTMLDivElement[] = mountingCards(cardsCount);

    shuffleCards(iconsArr, cardsWrapper);

    showCards(cardsCount, cardsWrapper);

    setGameModeRecord(gameMode);

    const cardInners: NodeListOf<HTMLDivElement>= document.querySelectorAll('.card-inner');
    let flippedCards: number = 0;
    let iconValue: HTMLDivElement | null;
    let iconsBinded: HTMLDivElement[] = [];
    let allFlipped: boolean = false;
    let flipsCount: number = 0;

    cardInners.forEach(inner => {
        inner.parentElement?.addEventListener('click', () => {
            let {
                flippedCards: fc,
                flipsCount: flc,
                iconValue: iv, 
                iconsBinded: ib,
                wrongCardAnimation
            } = gameStart({
                    inner,
                    cardInners, 
                    flippedCards, 
                    iconValue, 
                    iconsBinded, 
                    flipsCount
                })

            flipsCount = flc;
            iconsBinded = ib;
            flippedCards = fc;
            iconValue = iv;
            allFlipped = iconsBinded.length == cardsCount ? true : false;

            if (wrongCardAnimation) {
                setTimeout(() => {
                    iconValue!.style.transform = 'none';
                    inner.style.transform = 'none';
                    iconValue = null;
                    flippedCards = 0;
        
                    cardInners.forEach(inner => {
                        if (!iconsBinded.includes(inner)) {
                            inner.parentElement!.style.pointerEvents = 'all';
                        }
                    })
        
                }, 1000)
            }

            if (allFlipped) {
                victoryModal(gameMode, flipsCount)                
            }
        })
    })
    const backButton = document.querySelector('.game-page_back') as HTMLButtonElement;

    backButton.addEventListener('click', leaveGamePage, {once: true});
}