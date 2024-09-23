import React from 'react';
import Button from './Button';
import Arrow from './Arrow';

interface FloorProps {
  floorNumber: number;
  numberOfFloors: number;
  elevatorDirections: Array<'up' | 'down' | null>;
  moveElevator: (elevator: 'A' | 'B', floor: number) => void;
  getClosestElevator: (floor: number) => 'A' | 'B';
}

const Floor: React.FC<FloorProps> = ({ floorNumber, numberOfFloors, elevatorDirections, moveElevator, getClosestElevator }) => {
  return (
    <div className="floor">
      <h4>Floor {floorNumber}</h4>
      <div className="floor-arrows">
        {elevatorDirections.map((direction, index) => (
        < Arrow key={index} direction={direction} />
        ))}
        <div className="call-buttons">
          {floorNumber !== numberOfFloors - 1 && <Button label="↑" onClick={() => moveElevator(getClosestElevator(floorNumber), floorNumber)} />}
          {floorNumber !== 0 && <Button label="↓" onClick={() => moveElevator(getClosestElevator(floorNumber), floorNumber)} />}
        </div>
      </div>
      <div className="floor-line" />
    </div>
  );
};

export default Floor;
