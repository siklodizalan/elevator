import React from "react";

interface ButtonProps {
    label: string | number;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button onClick={onClick} className="btn">
            {label}
        </button>
    );
};

export default Button;