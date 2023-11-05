import { MouseEventHandler } from 'react';

export interface ButtonProps {
    title:string;
    containerStyles?: string ;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: 'button' | "submit";
}

export interface SearchManufacturerProps {
    Manufacturer:string;
    setManufacturer: (Manufacturer:string) => void;
}