import React, { FunctionComponent, ReactElement, useCallback } from 'react';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Icon, Image } from '../';
import { StyledNav, StyledActions } from './nav.style';
import { Buttons, Icons, Theme, NavProps as Props } from './../../types';

import darkModeCV from './../../cv/thomas-bush-cv-dark-mode.pdf';
import lightModeCV from './../../cv/thomas-bush-cv-light-mode.pdf';

const social = [
    {
        icon: Icons.LINKEDIN,
        testID: 'linkedin-icon',
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/thomas-bush-555604161/',
    },
    { icon: Icons.GITHUB, testID: 'github-icon', title: 'Github', url: 'https://github.com/thomasjjbush' },
    { icon: Icons.WHATSAPP, testID: 'whatsapp-icon', title: 'WhatsApp', url: 'tel:+447501274429' },
];

export const Nav: FunctionComponent<Props> = ({ darkMode }: Props): ReactElement => {
    const { images } = useTheme() as Theme;
    const onClick = useCallback(() => window.open(darkMode ? darkModeCV : lightModeCV, '_blank'), [darkMode]);

    return (
        <StyledNav>
            <Link to="/">
                <Image alt="BUSH" src={images.logo.pink} size={200} height={40} />
            </Link>
            <StyledActions>
                {social.map(({ icon, testID, title, url }, i) => (
                    <a
                        data-test-id={testID}
                        key={i}
                        href={url}
                        rel="noreferrer"
                        title={title}
                        {...(!url.startsWith('tel:') && { target: '_blank' })}
                    >
                        <Icon icon={icon} size={30} />
                    </a>
                ))}
                <Button design={Buttons.PRIMARY} onClick={onClick}>
                    Download CV
                </Button>
            </StyledActions>
        </StyledNav>
    );
};

Nav.displayName = 'Nav';
