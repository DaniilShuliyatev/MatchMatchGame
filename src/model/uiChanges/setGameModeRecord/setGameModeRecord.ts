import { GameMods } from "../../types/types";


export const setGameModeRecord = (gameMode: GameMods) => {
    const gameModeRecord = document.querySelector('.game-page_record') as HTMLDivElement;
    gameModeRecord.innerHTML = `Personal record: ${localStorage.getItem(gameMode) || 'none'}`
}