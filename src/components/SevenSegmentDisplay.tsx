import React from "react";

interface SevenSegmentDisplayProps {
    number: number;
}

const SevenSegmentDisplay: React.FC<SevenSegmentDisplayProps> = ({ number }) => {
    const segments = [
        [true, true, true, true, true, true, false], //0
        [false, true, true, false, false, false, false], // 1
        [true, true, false, true, true, false, true], // 2
        [true, true, true, true, false, false, true], // 3
        [false, true, true, false, false, true, true], // 4
        [true, false, true, true, false, true, true], // 5
        [true, false, true, true, true, true, true], // 6
        [true, true, true, false, false, false, false], // 7
        [true, true, true, true, true, true, true], // 8
        [true, true, true, true, false, true, true], // 9
    ];

    return (
        <div className="seven-segment-display">
            <div className={'segment-point'}/>
            <div className={`segment-horizontal ${segments[number][0] ? 'lit' : ''}`}/>
            <div className={'segment-point'}/>
            <div className={`segment-vertical ${segments[number][5] ? 'lit' : ''}`}/>
            <div className={'segment-big-vertical'}/>
            <div className={`segment-vertical ${segments[number][1] ? 'lit' : ''}`}/>
            <div className={'segment-point'}/>
            <div className={`segment-horizontal ${segments[number][6] ? 'lit' : ''}`}/>
            <div className={'segment-point'}/>
            <div className={`segment-vertical ${segments[number][4] ? 'lit' : ''}`}/>
            <div className={'segment-big-vertical'}/>
            <div className={`segment-vertical ${segments[number][2] ? 'lit' : ''}`}/>
            <div className={'segment-point'}/>
            <div className={`segment-horizontal ${segments[number][3] ? 'lit' : ''}`}/>
            <div className={'segment-point'}/>
        </div>
    );
};

export default SevenSegmentDisplay;