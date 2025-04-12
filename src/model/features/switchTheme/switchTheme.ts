import lightIcon from '../../../app/assets/svg/sun.svg';
import darkIcon from '../../../app/assets/svg/moon.svg';
import { createSoundEffect } from '../../uiChanges/createSoundEffect/createSoundEffect';
import clickSound from '../../../app/audio/button-click-sound.mp3'

export const switchTheme = () => {
    const body = document.querySelector('body') as HTMLBodyElement;
    const themeButton = document.querySelector('.theme-switcher') as HTMLButtonElement;

    const isThemeLight = body.classList.contains('light')
    const newTheme = isThemeLight ? 'dark' : 'light';
    body.classList.remove(isThemeLight ? 'light' : 'dark');
    body.classList.add(newTheme);

    themeButton.innerHTML = `
        <img src="${isThemeLight ? darkIcon : lightIcon}" alt="${newTheme} theme">
    `
    createSoundEffect(clickSound);
}