import React from 'react';



const Timeline = ({cells}) => {

    const week = ['mon', 'tue' , 'wed', 'thu', 'fri', 'sun', 'sut']
    const month = ['jan', 'feb' , 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']


    return (
        <div style={{padding:'100px 20px', margin: '0 auto'}}>
            <div style={{display: 'flex', gap: '105px', paddingLeft: '50px'}}>
                {
                    month.map(el => (
                        <div>{el}</div>
                    ))
                }
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{lineHeight: '17px'}}>
                    {week.map(el => (
                        <p>{el}</p>
                    ))}
                </div>
                <div className={'timeline'}>

                    {
                        cells.map((el, index) => (
                            <div key={index} className={'timeline-cell'} data-timeline-cell={el.date} data-commit={el.commit} style={{backgroundColor: `${el.color}`}}>

                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;