'use client';

import { useButtonContext } from '@/context/ButtonContext';

const StatusComponent = () => {
    const { isClicked } = useButtonContext();

    return (
        <p>The button has been {isClicked ? 'clicked' : 'not clicked'}.</p>
    );
};

export default StatusComponent;
