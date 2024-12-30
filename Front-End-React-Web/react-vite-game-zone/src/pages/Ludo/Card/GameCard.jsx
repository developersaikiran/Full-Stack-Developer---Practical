import { Col, Row } from 'antd'
import React from 'react'

export default function GameCard() {
    return (
        <div style={{ height: '100%', width: '100%', backgroundColor: 'white' }}>
            <div style={{ height: '100px', width: '100%', backgroundColor: 'white' }} >
                
            </div>

            <div style={{ height: '550px', width: '550px', backgroundColor: 'white', margin: '0 auto' }} >
                <div style={{ height: '40%', width: '100%', backgroundColor: 'grey', display: 'flex', flexDirection: 'row' }} >
                    <div style={{ height: '100%', width: '40%', backgroundColor: 'green', padding: '30px' }} >
                        <div style={{ height: '50%', width: '100%', backgroundColor: 'white', padding: '10px 10px 5px 10px', display: 'flex', gap: '10px'}}>
                            <div style={{ height: '100%', width: '50%', backgroundColor: 'green', borderRadius: '10px',}} > 1 </div>
                            <div style={{ height: '100%', width: '50%', backgroundColor: 'green', borderRadius: '10px',}} > 2 </div>
                        </div>
                        <div style={{ height: '50%', width: '100%', backgroundColor: 'white', padding: '5px 10px 10px 10px', display: 'flex', gap: '10px'}}>
                            <div style={{ height: '100%', width: '50%', backgroundColor: 'green', borderRadius: '10px',}} > 1 </div>
                            <div style={{ height: '100%', width: '50%', backgroundColor: 'green', borderRadius: '10px',}} > 2 </div>
                        </div>
                    </div>
                    <div style={{ height: '100%', width: '20%', backgroundColor: 'white' }} >
                        <div>

                        </div>
                    </div>
                    <div style={{ height: '100%', width: '40%', backgroundColor: 'yellow' }} >

                    </div>
                </div>
                <div style={{ height: '20%', width: '100%', backgroundColor: 'grey', display: 'flex', flexDirection: 'row' }} >
                    <div style={{ height: '100%', width: '40%', backgroundColor: 'white' }} >

                    </div>
                    <div style={{ height: '100%', width: '20%', backgroundColor: 'gold' }} >

                    </div>
                    <div style={{ height: '100%', width: '40%', backgroundColor: 'white' }} >

                    </div>
                </div>

                <div style={{ height: '40%', width: '100%', backgroundColor: 'grey', display: 'flex', flexDirection: 'row' }} >
                    <div style={{ height: '100%', width: '40%', backgroundColor: 'red' }} >

                    </div>
                    <div style={{ height: '100%', width: '20%', backgroundColor: 'white' }} >

                    </div>
                    <div style={{ height: '100%', width: '40%', backgroundColor: 'blue' }} >

                    </div>
                </div>
            </div>

            <div style={{ height: '100px', width: '100%', backgroundColor: 'white' }} >

            </div>
        </div>
    )
}
