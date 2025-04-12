
export const shuffleCards = (iconsArr: HTMLDivElement[], parentElem: HTMLDivElement) => {

    let currentIndex: number = iconsArr.length;

    while (currentIndex!= 0) {

        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [iconsArr[currentIndex], iconsArr[randomIndex]] = [
          iconsArr[randomIndex], iconsArr[currentIndex]];
    }
    
    iconsArr?.map((elem) => {parentElem.innerHTML += elem.outerHTML})
}