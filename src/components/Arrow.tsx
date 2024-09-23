import React from 'react';

interface ArrowProps {
    direction: 'up' | 'down' | null;
}

const Arrow: React.FC<ArrowProps> = ({ direction }) => {
    return (
        <div className="arrow-container">
            {direction === 'up' && <div className="arrow arrow-up"></div>}
            {direction === 'down' && <div className="arrow arrow-down"></div>}
            {direction === null && <div className="arrow-horizontal"></div>}
        </div>
    );
};

export default Arrow;