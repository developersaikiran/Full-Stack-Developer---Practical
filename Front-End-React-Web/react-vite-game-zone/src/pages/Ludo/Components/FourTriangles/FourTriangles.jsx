import React, { useEffect, useMemo, useState } from 'react'
import Pile from '../Pile/Pile'
import { Colors } from '../../Constants/Colors'
import { ArrowSpots, SafeSpots, StarSpots } from '../../Constants/PlotData'
import { GrStarOutline } from "react-icons/gr";
import { WiDirectionLeft } from "react-icons/wi";
import fireWork from '../../../../assets/ludo/animation/firework.json';
import girlAnimation from '../../../../assets/ludo/animation/girl.json';
import { Player } from '@lottiefiles/react-lottie-player';

export default function Cell({ color, id }) {
  const [blast, setBlast] = useState(false);
  const isStarSport = useMemo(() => StarSpots.includes(id), [id]);
  const isArrowSport = useMemo(() => ArrowSpots.includes(id), [id]);

  return (
    <div style={{
      border: '1px solid black',
      width: '20%',
      height: '100%',
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: isSafeSport ? color : 'white',
      position: 'relative',
    }}>
      {blast &&
        <Player
          autoplay
          loop={true}
          src={fireWork}
          style={{ position: 'absolute', zIndex: 1, width: '100%', top: 0 }}
        />
      }


      {/* Top-left triangle */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: Colors.yellow,
          clipPath: 'polygon(50% 50%, 0% 0%, 100% 0%)',
          
        }}
      ></div>

      {/* Top-right triangle */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundColor: Colors.blue,
          clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)',
        }}
      ></div>

      {/* Bottom-left triangle */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: Colors.green,
          clipPath: 'polygon(0% 100%, 50% 50%, 0% 0%)',
        }}
      ></div>

      {/* Bottom-right triangle */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundColor: Colors.red,
          clipPath: 'polygon(50% 50%, 100% 100%, 0% 100%)',
        }}
      ></div>
    </div>
  )
}
