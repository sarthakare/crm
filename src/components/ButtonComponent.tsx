'use client';

import { useButtonContext } from '@/context/ButtonContext';

const ButtonComponent = () => {
    const { setIsClicked } = useButtonContext();

    return (
        <button onClick={() => setIsClicked(true)}>
            Click Me!
        </button>
    );
};

export default ButtonComponent;
