import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const usePortal = ({ id, container } = {}) => {
    const [currentContainer, setCurrentContainer] = useState(container || document.body);

    useEffect(() => {
        const existingParent = id && document.querySelector(`#${id}`);
        const parentElement = (container || existingParent || document.body);

        setCurrentContainer(parentElement);
    }, [container, id]);

    const Portal = useCallback(
        ({ children }) => {
            if (currentContainer != null) return createPortal(children, currentContainer);
            return null;
        },
        [currentContainer]
    );

    return { target: currentContainer, Portal };
};
