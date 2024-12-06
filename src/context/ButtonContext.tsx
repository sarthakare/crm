'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface ButtonContextType {
    isClicked: boolean;
    setIsClicked: (value: boolean) => void;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export const ButtonProvider = ({ children }: { children: ReactNode }) => {
    const [isClicked, setIsClicked] = useState(false);

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
