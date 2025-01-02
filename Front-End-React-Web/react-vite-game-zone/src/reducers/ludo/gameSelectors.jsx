export const selectCurrentPositions = state => state.ludoGame.currentPositions;
export const selectCurrentPlayerChance = state => state.ludoGame.chancePlayer;
export const selectDiceRolled = state => state.ludoGame.isDiceRolled;
export const selectDiceNo = state => state.ludoGame.diceNo;

export const selectPlayer1 = state => state.ludoGame.player1;
export const selectPlayer2 = state => state.ludoGame.player2;
export const selectPlayer3 = state => state.ludoGame.player3;
export const selectPlayer4 = state => state.ludoGame.player4;

export const selectPocketPileSelection = state => state.ludoGame.pileSelectionPlayer;
export const selectCellSelection = state => state.ludoGame.cellSelectionPlayer;
export const selectDiceTouch = state => state.ludoGame.touchDiceBlock;
export const selectFireworks = state => state.ludoGame.fireworks;