import React from "react";
import Elevator from "./Elevator";

interface ElevatorTrackProps {
    numberOfFloors: number;
    currentFloor: number;
    elevatorId: string;
    moveElevator: (elevator: 'A' | 'B', floor: number) => void;
}

const ElevatorTrack: React.FC<ElevatorTrackProps> = ({ numberOfFloors, currentFloor, elevatorId, moveElevator }) => {
    const floorHeight = 250;
    const trackHeight = numberOfFloors * floorHeight;

    const elevatorPosition = (numberOfFloors - 1 - currentFloor) * floorHeight;

    return (
        <div className="elevator-track" style={{ height: `${trackHeight}px` }}>
        <div
            className="elevator"
            style={{
            transform: `translateY(${elevatorPosition}px)`,
            transition: 'transform 0.5s ease-in-out',
            }}
        >
        <Elevator id={elevatorId} numberOfFloors={numberOfFloors} currentFloor={currentFloor} moveElevator={moveElevator} />
      </div>
    </div>
    );
};

export default ElevatorTrack;