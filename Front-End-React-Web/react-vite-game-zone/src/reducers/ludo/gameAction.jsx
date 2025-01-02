import { SafeSpots, startingPoints, turningSpots, victoryStart } from "../../pages/Ludo/Constants/PlotData";
import { playSound } from "../../pages/Ludo/Constants/SoundUtility";
import { selectCurrentPositions, selectDiceNo } from "./gameSelectors";
import { announceWinner, disableTouch, unfreezeDice, updateFireworks, updatePlayerChance, updatePlayerPieceValue } from "./gameSlice";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const handleForwardThunk = (playerNo, id, pos) => async (dispatch, getState) => {

    const state = getState();
    const plottedPieces = selectCurrentPositions(state);
    const diceNo = selectDiceNo(state);

    let alpha = playerNo == 1 ? 'A' : playerNo == 2 ? 'B' : playerNo == 3 ? 'C' : 'D';
    const pieceAtPosition = plottedPieces?.filter(item => item.pos == pos);
    const piece = pieceAtPosition[pieceAtPosition?.findIndex(item => item.id[0] == alpha)];

    dispatch(disableTouch());

    let finalPath = piece.pos;
    const beforePlayerPiece = state.ludoGame[`player${playerNo}`].find(
        item => item.id == id
    );
    let travelCount = beforePlayerPiece.travelCount;

    for (let i = 0; i < diceNo; i++) {
        const updatePosition = getState();
        const playerPiece = updatePosition?.ludoGame[`player${playerNo}`].find(
            item => item.id == id
        )
        let path = playerPiece.pos + 1;
        if (turningSpots.includes(path) && turningSpots[playerNo - 1] == path) {
            path = victoryStart[playerNo - 1];
        }
        if (path == 53) {
            path = 1
        }
        finalPath = path;
        travelCount += 1;
        dispatch(updatePlayerPieceValue({
            playerNo: `player${playerNo}`,
            pieceId: playerPiece.id,
            pos: path,
            travelCount: travelCount,
        }));
        playSound('pile_move');
        await delay(200);
    }

    const updatedState = getState()
    const updatedPlottedPieces = selectCurrentPositions(updatedState)

    const finalPlot = updatedPlottedPieces?.filter(item => item.pos === finalPath);
    const ids = finalPlot.map(item => item.id[0]); // get pile id first character like (A1 or B2) has (A, B)
    const uniqueIds = new Set(ids);
    const areDifferentIds = uniqueIds.size > 1;

    // pile is in safe cell
    if (SafeSpots.includes(finalPath)) {
        playSound('safe_spot');
    }

    // pile die condition
    if (
        areDifferentIds &&
        !SafeSpots.includes(finalPlot[0].pos)
    ) {
        const enemyPice = finalPlot.find(piece => piece.id !== id[0])
        const enemyId = enemyPice.id[0]; // enemy id first letter A1 - A
        let no = enemyId == 'A' ? 1 : enemyId == 'B' ? 2 : enemyId == 'C' ? 3 : 4;

        // to send pile to theres home when dies
        let backwardPath = startingPoints[no - 1];
        let i = enemyPice.pos;
        playSound('collied');

        while (i !== backwardPath) {
            dispatch(updatePlayerPieceValue({
                playerNo: `player${no}`,
                pieceId: enemyPice.id,
                pos: i,
                travelCount: 0
            }))

            await delay(0.4);
            i--;

            if (i == 0) {
                i = 52
            }
        }


        dispatch(updatePlayerPieceValue({
            playerNo: `player${no}`,
            pieceId: enemyPice.id,
            pos: 0,
            travelCount: 0
        }))

        dispatch(unfreezeDice());
        return;
    }


    if (diceNo == 6 || travelCount == 57) {
        dispatch(updatePlayerChance({ chancePlayer: playerNo }))
        if (travelCount == 57) {
            playSound('home_win');
            const finalPlayerState = getState();
            const playerAllPieces = finalPlayerState.ludoGame[`player${playerNo}`];
            if(checkWinningCriteria(playerAllPieces)){
                dispatch(announceWinner(playerNo));
                playSound('cheer');
                return;
            }
            
            dispatch(updateFireworks(true));
            dispatch(unfreezeDice());
            return;
        }
    }else{
        let chancePlayer = playerNo + 1;
        if(chancePlayer > 4){
            chancePlayer = 1
        }
        dispatch(updatePlayerChance({chancePlayer}))
    }
};

function checkWinningCriteria(pieces) {
    for(let piece of pieces){
        if(piece.travelCount < 57){
            return false;
        }
        return true;
    }
}