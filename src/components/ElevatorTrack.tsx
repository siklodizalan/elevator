import React from "react";
import Elevator from "./Elevator";

interface ElevatorTrackProps {
    elevatorId: string;
    numberOfFloors: number;
    currentFloor: number;
    transitionTime: number;
    moveElevator: (elevator: 'A' | 'B', floor: number) => void;
}

const ElevatorTrack: React.FC<ElevatorTrackProps> = ({ elevatorId, numberOfFloors, currentFloor, transitionTime, moveElevator }) => {
    const floorHeight = 250;
    const trackHeight = numberOfFloors * floorHeight;
    transitionTime /= 1000;

    const elevatorPosition = (numberOfFloors - 1 - currentFloor) * floorHeight;

    return (
        <div className="elevator-track" style={{ height: `${trackHeight}px` }}>
        <div
            className="elevator"
            style={{
            transform: `translateY(${elevatorPosition}px)`,
            transition: `transform ${transitionTime}s ease-in-out`,
            }}
        >
        <Elevator id={elevatorId} numberOfFloors={numberOfFloors} currentFloor={currentFloor} moveElevator={moveElevator} />
      </div>
    </div>
    );
};

export default ElevatorTrack;