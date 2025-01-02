import React, { useEffect, useMemo, useState } from 'react'
import Cell from '../Cell/Cell'

export default function VerticalPath({ cells, color }) {
  const groupedCells = useMemo(() => {
    const groups = [];
    for (let i = 0; i < cells.length; i += 3) {
      groups.push(cells.slice(i, i + 3))
    }
    return groups
  }, [cells])

  console.log({ groupedCells });



  const [cellHeight, setCellHeight] = useState('100%');
  const [cellWidth, setCellWidth] = useState('100%');
  useEffect(() => {
    const updateSize = () => {
      // Set size to the smaller of window width or height
      const parentElement = document.querySelector('.vertical-path');
      if (parentElement) {
        const newCellHeight = parentElement.offsetHeight / 6 + 'px';
        const newCellWidth = parentElement.offsetWidth / 3 + 'px';
        setCellWidth(newCellWidth);
        setCellHeight(newCellHeight);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <div className='vertical-path' style={{
      flexDirection: 'row',
      alignItems: 'center',
      width: '20%',
      height: '100%'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: `100%`,
        height: `100%`
      }}>
        {groupedCells.map((group, groupIndex) => (
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            // width: `${cellWidth}px`,
            // height: `${cellHeight}`,
            width: '100%',
            height: '16.67%'
          }}>
            {group.map((id) => {
              return (
                <div style={{ display: 'flex', width: '33.33%', height: '100%' }}>
                  <Cell id={id} color={color} />
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
