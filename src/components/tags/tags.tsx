import React, { FunctionComponent, ReactElement } from 'react';
import { StyledTag, StyledTags } from './tags.style';
import { TagProps } from '../../types';

export const Tags: FunctionComponent<TagProps> = ({ tags }: TagProps): ReactElement => {
    return (
        <StyledTags>
            {tags.map(({ name, slug }) => (
                <StyledTag key={slug}>{name}</StyledTag>
            ))}
        </StyledTags>
    );
};
