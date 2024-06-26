import React from 'react';
import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';
import AlbumIcon from '@mui/icons-material/Album';

export type NavbarItem = {
    id: number,
    icon: JSX.Element,
    label: string,
    route: string
}

export const mainNavbarItems: Array<NavbarItem> = [
    {
        id: 0,
        icon: <PeopleIcon />,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id: 1,
        icon: <DnsIcon />,
        label: 'Database',
        route: 'database',
    },
    {
        id: 2,
        icon: <ImageIcon />,
        label: 'Storage',
        route: 'storage',
    },
    {
        id: 3,
        icon: <PublicIcon />,
        label: 'Hosting',
        route: 'hosting',
    },
    {
        id: 4,
        icon: <SettingsEthernetIcon />,
        label: 'Functions',
        route: 'functions',
    },
    {
        id: 5,
        icon: <SettingsInputComponentIcon />,
        label: 'Machine learning',
        route: 'machine-learning',
    },
    {
        id: 6,
        icon: <AlbumIcon />,
        label: 'Browse',
        route: 'browse',
    }
];