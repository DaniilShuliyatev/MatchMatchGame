import { GameStartProps, GameStartRes } from "../../types/types";
import flipSound from '../../../app/audio/flipping-sound.mp3';
import { createSoundEffect } from "../../uiChanges/createSoundEffect/createSoundEffect";

export const gameStart = ({inner, cardInners, flippedCards, iconValue, iconsBinded, flipsCount}: GameStartProps): GameStartRes => {

    const counterElement = document.querySelector('.game-page_counter') as HTMLDivElement;
    inner.style.transform = 'rotateY(180deg)';
    flippedCards += 1;
    let wrongCardAnimation;
        
    if (flippedCards == 2 && (inner.parentElement?.dataset.icon !== iconValue?.parentElement?.dataset.icon)) {

        wrongCardAnimation = true;
        cardInners.forEach(inner => {
            inner.parentElement!.style.pointerEvents = 'none';
        })
        ++flipsCount;

    } else if (flippedCards == 2 && (inner.parentElement?.dataset.icon == iconValue?.parentElement?.dataset.icon)){

        inner.parentElement!.style.pointerEvents = 'none';
        iconValue!.parentElement!.style.pointerEvents = 'none';
        iconsBinded.push(inner, iconValue as HTMLDivElement);

        iconValue = null;

        flippedCards = 0;
        ++flipsCount;
        
    } else {
        iconValue = inner as HTMLDivElement;
        iconValue!.parentElement!.style.pointerEvents = 'none';
    }

    createSoundEffect(flipSound);

    counterElement.innerHTML = `Flips count: ${flipsCount}`;

    return {
        flipsCount,
        flippedCards,
        iconValue,
        iconsBinded,
        wrongCardAnimation
    }
}