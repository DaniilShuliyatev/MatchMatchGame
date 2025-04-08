import { leaveGamePage } from "../../features/leaveGamePage/leaveGamePage";


export const closeModal = () => {
    const modalWrapper = document.querySelector('.win-modal_wrapper') as HTMLDivElement;
    const modal = document.querySelector('.win-modal') as HTMLDialogElement;
    
    modalWrapper.classList.add('win-modal_close-animation');
    setTimeout(() => {
        modal.open = false;
        modalWrapper.classList.remove('win-modal_close-animation');
        leaveGamePage();

    }, 500)
}