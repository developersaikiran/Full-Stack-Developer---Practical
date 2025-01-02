import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import Dice from '../Components/Dice/Dice';
import { Colors } from '../Constants/Colors';
import Pocket from '../Components/Pocket/Pocket';
import VerticalPath from '../Components/VerticalPath/VerticalPath';
import HorizontalPath from '../Components/HorizontalPath/HorizontalPath';
import FourTriangles from '../Components/FourTriangles/FourTriangles';
import { Plot1Data, Plot2Data, Plot3Data, Plot4Data } from '../Constants/PlotData';
import { useSelector } from 'react-redux';
import { selectDiceTouch, selectPlayer1, selectPlayer2, selectPlayer3, selectPlayer4 } from '../../../reducers/ludo/gameSelectors';

export default function LudoBoardScreen() {

    const [gamePadSize, setSize] = useState('550px');
    useEffect(() => {
        const updateSize = () => {
            // Set size to the smaller of window width or height
            const parentElement = document.querySelector('.game-play-card');
            if(parentElement){
                const newSize = Math.min(parentElement.offsetWidth, parentElement.offsetHeight - 200);
                setSize(newSize);
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => {
            window.removeEventListener('resize', updateSize);
        };
    }, []);

    const player1 = useSelector(selectPlayer1);
    const player2 = useSelector(selectPlayer2);
    const player3 = useSelector(selectPlayer3);
    const player4 = useSelector(selectPlayer4);
    const isDiceTouched = useSelector(selectDiceTouch);
    const winner = useSelector(state => state.ludoGame.winner);
    
    return (
        <div style={{ height: '100%', width: '100%' }} className='game-play-card'>
            
            <div style={{ height: '100px', width: gamePadSize, display: 'flex', justifyContent: 'space-between', margin: 'auto', pointerEvents: `${isDiceTouched ? 'none' : 'auto'}` }} >
                <Dice color={Colors.green} player={2} data={player2} />
                <Dice color={Colors.yellow} rotate player={3} data={player3}/>
            </div>

            <div style={{ height: gamePadSize, width: gamePadSize, backgroundColor: 'white', margin: '0 auto', padding: '10px', border: '1px solid black' }} >
                <div style={{ height: '40%', width: '100%', display: 'flex', flexDirection: 'row',  }} >
                    <Pocket color={Colors.green} player={2} data={player2}/>
                    <VerticalPath cells={Plot2Data} color={Colors.yellow} />
                    <Pocket color={Colors.yellow} player={3} data={player3} />
                </div>
                <div style={{ height: '20%', width: '100%', display: 'flex', flexDirection: 'row' }} >
                    <HorizontalPath cells={Plot1Data} color={Colors.green} />
                    <FourTriangles color={Colors.blue} />
                    <HorizontalPath cells={Plot3Data} color={Colors.blue} />
                </div>

                <div style={{ height: '40%', width: '100%', display: 'flex', flexDirection: 'row' }} >
                    <Pocket color={Colors.red} player={1} data={player1} />
                    <VerticalPath cells={Plot4Data} color={Colors.red} />
                    <Pocket color={Colors.blue} player={4} data={player4} />
                </div>
            </div>

            <div style={{ height: '100px', width: gamePadSize, display: 'flex', justifyContent: 'space-between', margin: 'auto', pointerEvents: `${isDiceTouched ? 'none' : 'auto'}` }} >
                <Dice color={Colors.red} player={1} data={player1}/>
                <Dice color={Colors.blue} rotate player={4} data={player4} />
            </div>

        </div>
    )
}
