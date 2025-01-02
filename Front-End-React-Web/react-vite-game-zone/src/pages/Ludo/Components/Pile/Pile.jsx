import React, { useCallback, useMemo, useState } from 'react'
import { GetImage } from '../../Constants/Images'
import PileStyle from './Pile.module.css'
import Clsx from '../../../../utils/Clsx'
import { Player } from "@lottiefiles/react-lottie-player";
import { useSelector } from 'react-redux';
import { selectCellSelection, selectDiceNo, selectPocketPileSelection } from '../../../../reducers/ludo/gameSelectors';

const Pile = ({ cell, color, player, onClick, pieceId }) => {

    const currentPlayerPileSelection = useSelector(selectPocketPileSelection);
    const currentPlayerCellSelection = useSelector(selectCellSelection);
    const diceNo = useSelector(selectDiceNo);
    const playerPieces = useSelector(state => state.ludoGame[`player${player}`]);
    const pileImage = GetImage(color);

    const isPileEnabled = useMemo(() =>
        player == currentPlayerPileSelection,
        [player, currentPlayerPileSelection]
    );

    const isCellEnabled = useMemo(() =>
        player == currentPlayerCellSelection,
        [player, currentPlayerCellSelection]
    );

    const isForwardable = useCallback(() => {
        const piece = playerPieces?.find(item => item.id == pieceId)
        return piece && piece.travelCount + diceNo <= 57;
    }, [playerPieces, pieceId, diceNo])

    return (
        <div
            className={Clsx(PileStyle.container)}
            onClick={() => {
                if(cell ? isCellEnabled && isForwardable() : isPileEnabled){
                    onClick()
                }
            }}
        >
            {(cell ? isCellEnabled && isForwardable() : isPileEnabled) && (
                <>
                    <div className={Clsx(PileStyle.hallowCircleDefault)} style={{}}></div>
                    <div className={Clsx(PileStyle.hallowCircle)} style={{}}></div>
                </>
            )}
            <img src={pileImage} className={Clsx(PileStyle.pileIcon)} />
        </div>
    )
}

export default Pile
