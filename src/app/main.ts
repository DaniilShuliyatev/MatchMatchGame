import { buildCardsField } from "../model/buildCardsField/buildCardsField";
import { createSoundEffect } from "../model/uiChanges/createSoundEffect/createSoundEffect";
import { switchTheme } from "../model/features/switchTheme/switchTheme";
import { GameMods } from "../model/types/types";
import chooseGameModeSound from './audio/button-click-sound.mp3';
import './styles/index.scss'

const startGameButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.game-enter_button');

startGameButtons.forEach(button => {
    button.addEventListener('click', () => {
        createSoundEffect(chooseGameModeSound);
        buildCardsField(button.dataset.level as GameMods)
    })
})

const switchThemeButton = document.querySelector('.theme-switcher') as  HTMLButtonElement;

switchThemeButton.addEventListener('click', () => switchTheme())


