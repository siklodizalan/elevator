import React from 'react';
import Button from './Button';

interface FloorProps {
  floorNumber: number;
  moveElevator: (elevator: 'A' | 'B', floor: number) => void;
  getClosestElevator: (floor: number) => 'A' | 'B';
}

const Floor: React.FC<FloorProps> = ({ floorNumber, moveElevator, getClosestElevator }) => {
  return (
    <div className="floor">
      <h4>Floor {floorNumber}</h4>
      <div className="call-buttons">
        {floorNumber !== 6 && <Button label="↑" onClick={() => moveElevator(getClosestElevator(floorNumber), floorNumber)} />}
        {floorNumber !== 0 && <Button label="↓" onClick={() => moveElevator(getClosestElevator(floorNumber), floorNumber)} />}
      </div>
      <div className="floor-line" />
    </div>
  );
};

export default Floor;
