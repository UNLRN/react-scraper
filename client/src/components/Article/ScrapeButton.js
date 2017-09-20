import React from 'react';

const ScrapeButton = (props) => {
    return (
        <div className='row m-3'>
            <button className='mx-auto btn btn-primary' onClick={props.handler}>Scrape that site!</button>
        </div>
    )
};

export default ScrapeButton;