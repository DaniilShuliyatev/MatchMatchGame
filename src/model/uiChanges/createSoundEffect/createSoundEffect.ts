

export const createSoundEffect = (soundEffect: string) => {
    const flipSoundElem: HTMLAudioElement = document.createElement('audio');
    flipSoundElem.controls = false;
    flipSoundElem.autoplay = true;
    flipSoundElem.src = soundEffect;  
}