import React from 'react';
import Button from './Button';
import SevenSegmentDisplay from './SevenSegmentDisplay';

interface ElevatorProps {
    id: string;
    numberOfFloors: number;
    currentFloor: number;
    moveElevator: (elevator: 'A' | 'B', floor: number) => void;
}

const Elevator: React.FC<ElevatorProps> = ({ id, numberOfFloors, currentFloor, moveElevator}) => {

    return (
        <div className="elevator">
            <h3>Elevator {id}</h3>
            <SevenSegmentDisplay number={currentFloor} />
            <p></p>
            <div className="floor-buttons">
                {[...Array(numberOfFloors)].map((_, floor) => (
                    <Button 
                        key={floor} 
                        label={floor} 
                        onClick={() => moveElevator(id == 'A' ? 'A' : 'B', floor)} 
                    />
                ))}
            </div>
        </div>
    );
};

export default Elevator;