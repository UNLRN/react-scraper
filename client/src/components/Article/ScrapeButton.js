import React from 'react';

const ScrapeButton = (props) => {
    return <button onClick={props.handler}>Scrape that site!</button>;
};

export default ScrapeButton;