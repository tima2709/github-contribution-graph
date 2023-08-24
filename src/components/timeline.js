import React from 'react';
import {format} from "date-fns";


const Timeline = ({cells}) => {



    return (
        <div className={'timeline'}>
            {
                cells.map((el, index) => (
                    <div key={index} className={'timeline-cell'} data-timeline-cell={el.date} data-commit={el.commit} style={{backgroundColor: `${el.color}`}}>

                    </div>
                ))
            }
        </div>
    );
};

export default Timeline;