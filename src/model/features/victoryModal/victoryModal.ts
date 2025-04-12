import { GameMods } from "../../types/types";
import victorySound from '../../../app/audio/victory-sound.mp3';
import { createSoundEffect } from "../../uiChanges/createSoundEffect/createSoundEffect";
import { closeModal } from "../../uiChanges/closeModal/closeModal";


export const victoryModal = (gameMode: GameMods, flipsCount: number) => {

    const modal = document.querySelector('.win-modal') as HTMLDialogElement;
    const resetBtn = document.querySelector('.win-modal-close') as HTMLButtonElement;
    const modalWrapper = document.querySelector('.win-modal_wrapper') as HTMLDivElement;
    const personalRecord = localStorage.getItem(gameMode);
    const newRecordText = screen.width < 620 ? 'New record!!!' : `New ${gameMode} mode record!!!`

    modal.open = true;

    createSoundEffect(victorySound)

    if(personalRecord){
        if(+personalRecord > flipsCount) {
            localStorage.setItem(gameMode, flipsCount.toString());
            modalWrapper.firstElementChild!.innerHTML = newRecordText;
        } 
    } else {
        localStorage.setItem(gameMode, flipsCount.toString())
        modalWrapper.firstElementChild!.innerHTML = newRecordText;
    }

    function closeModalWrapper(e: MouseEvent) {
        if (e.target == modal) {
            closeModal()
        }
    }
    
    resetBtn.addEventListener('click', closeModal, {once: true});
    modal.addEventListener('click', closeModalWrapper, {once: true});
    
}