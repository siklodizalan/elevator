import React from 'react';
import Button from './Button';

interface ElevatorProps {
    numberOfFloors: number;
    id: string;
    moveElevator: (elevator: 'A' | 'B', floor: number) => void;
}

const Elevator: React.FC<ElevatorProps> = ({ id, numberOfFloors, moveElevator}) => {

    return (
        <div className="elevator">
            <h3>Elevator {id}</h3>
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