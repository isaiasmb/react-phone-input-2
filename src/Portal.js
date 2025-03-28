import React, { useMemo } from 'react';

import { usePortal } from './hooks/usePortal';

const PortalWrapper = ({ id, container, portalRef, inputRef, children }) => {
    const { Portal } = usePortal({ id, container });

    const rect = inputRef.getBoundingClientRect();

    const { top, left } = useMemo(() => {
        if (!rect) {
            return { top: 0, left: 0 };
        }

        return { top: rect.bottom + window.scrollY, left: rect.left };
    }, [rect.bottom, rect.left]);

    return (
        <Portal>
            <div className="react-tel-input" style={{ position: 'absolute', margin: 0, top, left }} ref={portalRef}>
                {children}
            </div>
        </Portal>
    );
};

export default PortalWrapper;
