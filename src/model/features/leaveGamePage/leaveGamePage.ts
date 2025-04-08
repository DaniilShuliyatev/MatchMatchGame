import { createSoundEffect } from "../../uiChanges/createSoundEffect/createSoundEffect";
import { setGameEnter } from "../../uiChanges/setGameEnter/setGameEnter";
import clickSound from '../../../app/audio/button-click-sound.mp3';

export const leaveGamePage = () => {
    setGameEnter();
    createSoundEffect(clickSound);
}