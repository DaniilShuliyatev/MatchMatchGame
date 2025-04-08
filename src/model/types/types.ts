
export enum GameMods {
    EASY = 'easy',
    NORMAL = 'normal',
    HARD = 'hard'
}

export interface GameStartProps {
    inner: HTMLDivElement, 
    flippedCards: number, 
    iconValue: HTMLDivElement | null, 
    cardInners: NodeListOf<HTMLDivElement>, 
    iconsBinded: HTMLDivElement[], 
    flipsCount: number
}

export interface GameStartRes {
    flippedCards: number,
    flipsCount: number,
    iconValue: HTMLDivElement | null,
    iconsBinded: HTMLDivElement[],
    wrongCardAnimation: boolean | undefined
}
