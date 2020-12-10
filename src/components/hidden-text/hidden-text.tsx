import React, { FunctionComponent, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { HiddenTextProps as Props } from '../../types';
import { Button } from '../';
import { StyledText } from './hidden-text.style';

export const HiddenText: FunctionComponent<Props> = ({ children, lines }: Props): ReactElement => {
    const ref = useRef(null);
    const [clamped, setClamped] = useState(true);
    const [refLoaded, setRefLoaded] = useState(false);

    const unClamp = useCallback(() => setClamped(false), []);

    useEffect(() => {
        if (ref && !refLoaded) {
            setRefLoaded(true);
        }
    }, [ref]);

    return (
        <div>
            <StyledText clamped={clamped} lines={lines} ref={ref}>
                {children}
            </StyledText>
            {clamped && ref?.current?.scrollHeight > ref?.current?.clientHeight && (
                <Button onClick={unClamp}>View more</Button>
            )}
        </div>
    );
};
