import React from 'react';



const Timeline = ({cells}) => {

    const week = ['mon', 'tue' , 'wed', 'thu', 'fri', 'sun', 'sut']


    return (
        <div style={{display: 'flex', padding:'100px 20px', alignItems: 'center'}}>
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
    );
};

export default Timeline;