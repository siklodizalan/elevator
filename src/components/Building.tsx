import React, { useState } from 'react';
import Floor from './Floor';
import ElevatorTrack from './ElevatorTrack';

const Building: React.FC = () => {
  const numberOfFloors = 7;

  const [elevatorA, setElevatorA] = useState<number>(0);
  const [elevatorB, setElevatorB] = useState<number>(6);

  const getClosestElevator = (floor: number) => {
    const distanceA = Math.abs(floor - elevatorA);
    const distanceB = Math.abs(floor - elevatorB);

    if (distanceA === distanceB) {
      return elevatorA < elevatorB ? 'A' : 'B';
    }

    return distanceA < distanceB ? 'A' : 'B';
  };

  const moveElevator = (elevator: 'A' | 'B', destination: number) => {
    if (elevator === 'A') {
      setElevatorA(destination);
    } else {
      setElevatorB(destination);
    }
  };

  return (
    <div className="building">
        <div className="elevator-system">
            <ElevatorTrack numberOfFloors={numberOfFloors} currentFloor={elevatorA} elevatorId="A" moveElevator={moveElevator} />
            <div className="floors">
                {([...Array(numberOfFloors).keys()].reverse()).map((floor) => (
                    <Floor
                        key={floor}
                        floorNumber={floor}
                        moveElevator={moveElevator}
                        getClosestElevator={getClosestElevator}
                    />
                ))}
            </div>
            <ElevatorTrack numberOfFloors={numberOfFloors} currentFloor={elevatorB} elevatorId="B" moveElevator={moveElevator} />
        </div>
        
    </div>
  );
};

export default Building;
