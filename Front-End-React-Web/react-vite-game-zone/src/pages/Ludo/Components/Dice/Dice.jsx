import React, { useState } from 'react'
import { GetImage } from '../../Constants/Images'
import DiceStyle from './Dice.module.css'
import Clsx from '../../../../utils/Clsx'
import { Player } from "@lottiefiles/react-lottie-player";
import diceAnimation from '../../../../assets/ludo/animation/diceroll.json';
import arrowIcon from '../../../../assets/ludo/images/arrow.png';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPlayerChance, selectDiceNo, selectDiceRolled } from '../../../../reducers/ludo/gameSelectors';
import { enableCellSelection, enablePileSelection, updateDiceNo, updatePlayerChance } from '../../../../reducers/ludo/gameSlice';
import { playSound } from '../../Constants/SoundUtility';

const Dice = ({ color, rotate, player, data }) => {

    const dispatch = useDispatch()
    const currentPlayerChance = useSelector(selectCurrentPlayerChance)
    const isDiceRolled = useSelector(selectDiceRolled)
    const diceNo = useSelector(selectDiceNo)
    const playerPieces = useSelector(state => state.ludoGame[`player${currentPlayerChance}`])

    const pileIcon = GetImage(color);
    const diceIcon = GetImage(diceNo);

    const [diceRolling, setDiceRolling] = useState(false);

    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const handleDiceClick = async () => {
        setDiceRolling(true);
        playSound('dice_roll');

        // Stop the animation after 2 seconds
        // const newDiceNo = Math.floor(Math.random() * 6) + 1;
        const newDiceNo = 6;
        console.log({ newDiceNo });

        await delay(800);
        dispatch(updateDiceNo({ diceNo: newDiceNo }))
        setDiceRolling(false);

        const isAnyPieceAlive = data?.findIndex(i => i.pos != 0 && i.pos != 57);
        const isAnyPieceLocked = data?.findIndex(i => i.pos == 0);

        if (isAnyPieceAlive == -1) {
            if (newDiceNo == 6) {
                dispatch(enablePileSelection({ playerNo: player }))
            } else {
                let chancePlayer = player + 1;
                if (chancePlayer > 4) {
                    chancePlayer = 1;
                }
                await delay(600)
                dispatch(updatePlayerChance({ chancePlayer: chancePlayer }))
            }
        } else {
            const canMove = playerPieces.some(
                pile => pile.travelCount + newDiceNo <= 57 && pile.pos != 0,
            )
            if (
                (!canMove && newDiceNo == 6 && isAnyPieceLocked == -1) ||
                (!canMove && newDiceNo != 6 && isAnyPieceLocked != -1) ||
                (!canMove && newDiceNo != 6 && isAnyPieceLocked == -1)
            ) {
                let chancePlayer = player + 1;
                if (chancePlayer > 4) {
                    chancePlayer = 1;
                }
                await delay(600);
                dispatch(updatePlayerChance({ chancePlayer: chancePlayer }))
                return;
            }

            if (newDiceNo == 6) {
                dispatch(enableCellSelection({ playerNo: player }))
            }
            dispatch(enableCellSelection({ playerNo: player }))
        }
    };

    return (
        <div className={Clsx(DiceStyle.flexRow)} style={{ transform: `scaleX(${rotate ? -1 : 1})` }}>

            <div className={Clsx(DiceStyle.ludoContainer)}>
                {/* Left box with location marker */}

                <div className={Clsx(DiceStyle.locationBox)}>
                    <img
                        src={pileIcon}
                        alt="Location Marker"
                        className={Clsx(DiceStyle.locationImage)}
                    />
                </div>

                {/* Right box with dice */}
                <div className={Clsx(DiceStyle.diceBox)}>

                    {currentPlayerChance === player && (
                        diceRolling ? (
                            <Player
                                autoplay
                                loop={false}
                                src={diceAnimation}
                                style={{ height: "110px", width: "110px", marginBottom: '30px' }}
                            />
                        ) : (
                            <div onClick={() => {
                                if (!isDiceRolled) {
                                    handleDiceClick()
                                }
                            }} style={{ height: '100%', width: '100%', justifyItems: 'center', alignContent: 'center' }}>
                                <img
                                    src={diceIcon}
                                    alt="Dice"
                                    className={Clsx(DiceStyle.diceImage)}
                                />
                            </div>
                        )
                    )}
                </div>

                {currentPlayerChance === player && !diceRolling &&
                    <div className={Clsx(DiceStyle.arrowIcon)} onClick={handleDiceClick}>
                        <img
                            src={arrowIcon}
                            alt="Dice"
                            className={Clsx(DiceStyle.arrowIconImage)}
                        />
                    </div>
                }

            </div>
        </div>
    )
}

export default Dice
