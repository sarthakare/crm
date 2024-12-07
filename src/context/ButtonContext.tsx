'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ButtonContextType {
    isClicked: boolean;
    setIsClicked: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export const ButtonProvider = ({ children }: { children: ReactNode }) => {
    const [isClicked, setIsClickedState] = useState(false);

    const setIsClicked = (value: boolean | ((prev: boolean) => boolean)) => {
        if (typeof value === 'function') {
            setIsClickedState((prev) => value(prev)); // Handle functional updates
        } else {
            setIsClickedState(value); // Handle direct values
        }
    };

    return (
        <ButtonContext.Provider value={{ isClicked, setIsClicked }}>
            {children}
        </ButtonContext.Provider>
    );
};

export const useButtonContext = () => {
    const context = useContext(ButtonContext);
    if (!context) {
        throw new Error('useButtonContext must be used within a ButtonProvider');
    }
    return context;
};
