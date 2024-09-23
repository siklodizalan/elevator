import React, { useState } from 'react';
import Floor from './Floor';
import ElevatorTrack from './ElevatorTrack';

const Building: React.FC = () => {
  const numberOfFloors = 7;
  const transitionTime = 1000;

  const [elevatorA, setElevatorA] = useState<number>(0);
  const [elevatorB, setElevatorB] = useState<number>(numberOfFloors - 1);
  const [elevatorADirection, setElevatorADirection] = useState<'up' | 'down' | null>(null);
  const [elevatorBDirection, setElevatorBDirection] = useState<'up' | 'down' | null>(null);

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
      if (elevatorA !== destination) {
        setElevatorADirection(elevatorA > destination ? 'down' : 'up');
      }

      setTimeout(() => {
        setElevatorADirection(null);
      }, transitionTime);
    } else {
      setElevatorB(destination);

      if (elevatorB !== destination) {
        setElevatorBDirection(elevatorB > destination ? 'down' : 'up');
      }

      setTimeout(() => {
        setElevatorBDirection(null);
      }, transitionTime);
    }
  };

  return (
    <div className="building">
        <div className="elevator-system">
            <ElevatorTrack 
              elevatorId="A" 
              numberOfFloors={numberOfFloors} 
              currentFloor={elevatorA} 
              transitionTime={transitionTime}
              moveElevator={moveElevator} 
            />
            <div className="floors">
                {([...Array(numberOfFloors).keys()].reverse()).map((floor) => (
                    <Floor
                        key={floor}
                        floorNumber={floor}
                        numberOfFloors={numberOfFloors}
                        elevatorDirections={[elevatorADirection, elevatorBDirection]}
                        moveElevator={moveElevator}
                        getClosestElevator={getClosestElevator}
                    />
                ))}
            </div>
            <ElevatorTrack 
              elevatorId="B"
              numberOfFloors={numberOfFloors} 
              currentFloor={elevatorB}  
              transitionTime={transitionTime}
              moveElevator={moveElevator} 
            />
        </div>
        
    </div>
  );
};

export default Building;

/// To move elevator one-by-one:
/*
if (elevator === 'A') {
      const step = elevatorA < destination ? 1 : -1;
      const length = Math.abs(destination - elevatorA);
      const elevatorWay = Array.from({ length }, (_, index) => elevatorA + (index + 1) * step);

      elevatorWay.forEach((currentFloor, index) => {
        setTimeout(() => {
          setElevatorA(currentFloor);
          setElevatorADirection(elevatorA > destination ? 'down' : 'up');
        }, transitionTime * index);
      });

      setTimeout(() => {
        setElevatorADirection(null);
      }, transitionTime * length);
    }
*/
