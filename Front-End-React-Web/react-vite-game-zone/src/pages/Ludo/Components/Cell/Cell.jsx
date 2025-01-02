import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Pile from '../Pile/Pile'
import { Colors } from '../../Constants/Colors'
import { ArrowSpots, SafeSpots, StarSpots } from '../../Constants/PlotData'
import { GrStarOutline } from "react-icons/gr";
import { WiDirectionLeft } from "react-icons/wi";
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPositions } from '../../../../reducers/ludo/gameSelectors';
import { handleForwardThunk } from '../../../../reducers/ludo/gameAction';

export default function Cell({ color, id }) {

  const dispatch = useDispatch();
  const plottedPieces = useSelector(selectCurrentPositions);

  const isSafeSport = useMemo(() => SafeSpots.includes(id), [id]);
  const isStarSport = useMemo(() => StarSpots.includes(id), [id]);
  const isArrowSport = useMemo(() => ArrowSpots.includes(id), [id]);

  const piecesAtPosition = useMemo(() => plottedPieces.filter(item => item.pos == id), [plottedPieces, id])

  const handleClick = useCallback((playerNo, pieceId) => {
    dispatch(handleForwardThunk(playerNo, pieceId, id))
  }, [dispatch, id])


  return (
    <div style={{
      border: '1px solid black',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isSafeSport ? color : 'white'
    }}>
      {isStarSport && <GrStarOutline size={20} color='grey' />}
      {isArrowSport && <WiDirectionLeft size={25} color={color} style={{
        transform: `rotate(${id == 38 ? '0deg' : id == 25 ? '270deg' : id == 51 ? '90deg' : id == 12 ? '180deg' : '0deg'})`
      }} />}

      {piecesAtPosition?.map((piece, index) => {
        const playerNo = piece.id[0] === 'A' ? 1 :
          piece.id[0] === 'B' ? 2 :
            piece.id[0] === 'C' ? 3 : 4;

        const playerColor = piece.id[0] === 'A' ? Colors.red :
          piece.id[0] === 'B' ? Colors.green :
            piece.id[0] === 'C' ? Colors.yellow : Colors.blue;

        return (
          <div
            style={{
              width: '100%',
              height: '100%',
              transform: `scale(${piecesAtPosition.length == 1 ? 1 : 0.7})`,
              transformX: `scale(${piecesAtPosition.length == 1 ? 0 : index%2 == 0 ? -6 : 6})`,
              transformY: `scale(${piecesAtPosition.length == 1 ? 0 : index < 2 ? -6 : 6})`
            }}
          >
            <Pile
              cell={true}
              player={playerNo}
              onClick={() => {
                console.log("clicked.....................");
                handleClick(playerNo, piece.id)
              }}
              pieceId={piece.id}
              color={playerColor}
            />
          </div>
        )

      })}

      {/* {id} */}
    </div>
  )
}
