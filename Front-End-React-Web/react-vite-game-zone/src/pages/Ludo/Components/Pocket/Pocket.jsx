import React, { useState } from 'react'
import PocketCSS from './Pocket.module.css'
import { Clsx } from "@utils";
import { GetImage } from '../../Constants/Images';
import Pile from '../Pile/Pile';
import { Colors } from '../../Constants/Colors';
import { useDispatch } from 'react-redux';
import { unfreezeDice, updatePlayerPieceValue } from '../../../../reducers/ludo/gameSlice';
import { startingPoints } from '../../Constants/PlotData';

const Pocket = ({ color, player, data }) => {

    const dispatch = useDispatch();
    const handleClick = async (value) => {
        let playerNo = value?.id[0]

        switch (playerNo) {
            case 'A':
                playerNo = 'player1'
                break;
            case 'B':
                playerNo = 'player2'
                break;
            case 'C':
                playerNo = 'player3'
                break;
            case 'D':
                playerNo = 'player4'
                break;
        }
        dispatch(updatePlayerPieceValue({
            playerNo: playerNo,
            pieceId: value.id,
            // pos: startingPoints[parseInt(playerNo[6]) - 1],
            pos: startingPoints[parseInt(playerNo.match(/\d+/)[0], 10) - 1],
            travelCount: 1
        }))

        dispatch(unfreezeDice());
    }

    return (
        <div className={Clsx(PocketCSS.playerCard)} style={{ backgroundColor: `${color}` }}>
            <div className={Clsx(PocketCSS.childFrame)} style={{ borderColor: Colors.borderColor }}>
                <div className={Clsx(PocketCSS.flexRow)}>
                    <Plot pieceNo={0} data={data} onClick={handleClick} color={color} player={player} />
                    <Plot pieceNo={1} data={data} onClick={handleClick} color={color} player={player} />
                </div>
                <div className={Clsx(PocketCSS.flexRow)}>
                    <Plot pieceNo={2} data={data} onClick={handleClick} color={color} player={player} />
                    <Plot pieceNo={3} data={data} onClick={handleClick} color={color} player={player} />
                </div>
            </div>
        </div>
    )
}

const Plot = ({ pieceNo, data, onClick, player, color }) => {
    return (
        <div style={{ padding: '10px', height: '100%', width: '100%', alignContent: 'end' }}>
            <div className={Clsx(PocketCSS.plot)} style={{ backgroundColor: color }}>
                {data && data[pieceNo]?.pos == 0 && (
                    <Pile color={color} player={player} onClick={() => onClick(data[pieceNo])} />
                )}
            </div>
        </div>
    )
}

export default Pocket;