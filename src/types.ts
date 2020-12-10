import { ReactElement, UIEvent } from 'react';

export interface AspectRatioProps {
    children?: ReactElement | ReactElement[] | string;
    ratio: AspectRatios;
}

export enum AspectRatios {
    '1:1' = 100,
    '3:2' = 66.66,
    '4:3' = 75,
    '8:5' = 62.5,
    '16:9' = 56.25,
    '32:9' = 28.125,
}

export interface ButtonProps {
    ariaLabel?: string;
    children: Children;
    design?: Buttons;
    onClick: () => void;
}

export enum Buttons {
    PRIMARY,
    SECONDARY,
}

export interface CarouselProps {
    children: ReactElement[];
    color?: string;
    itemsToDisplay?: number;
    margin?: number;
    numberOfItems: number;
    startingIndex?: number;
}

type Children = ReactElement | ReactElement[] | string | string[] | (ReactElement | string)[];

export interface Client {
    logo: {
        url: string;
    };
    name: string;
    primaryColor: string;
    secondaryColor?: string;
    slug: string;
    url: string;
}

export enum ClientsActions {
    LOADED = 'clients/LOADED',
}

export interface ClientProps {
    alt?: string;
    background?: boolean;
    border?: string;
    logo: string;
    size: number;
    url?: string;
    width: number;
}

type Collection<T> = { items: T[]; total?: number };

export interface Employment {
    companyName: string;
    endDate?: string;
    location: {
        lat: string;
        lon: string;
    };
    responsibilities: string;
    startDate: string;
    title: string;
    url: string;
}

export enum EmploymentActions {
    LOADED = 'employment/LOADED',
}

export interface ErrorProps {
    button?: ReactElement;
    code: number;
}

export interface Errors {
    [key: number]: string;
}

type Gallery<T> = Collection<T> & { isLandScape: boolean };

export type GetState = () => Store;

export interface HiddenTextProps {
    children: string;
    lines: number;
}

export interface IconProps {
    color?: string;
    disabled?: boolean;
    icon: Icons | string;
    onClick?: () => void;
    size?: number;
    testID?: string;
}

export enum Icons {
    CONTRAST = 'e9d5',
    ERROR = 'ea07',
    GITHUB = 'eab0',
    INFO = 'ea0c',
    LEFT = 'ea44',
    LINKEDIN = 'eac9',
    RIGHT = 'ea42',
    WHATSAPP = 'ea93',
}

export interface ImageProps {
    alt?: string;
    height?: number;
    quality?: number;
    size: number;
    src: string;
    width?: number | string;
}

interface Media {
    description?: string;
    name: string;
    url: string;
}

export enum Platform {
    DESKTOP,
    MOBILE,
    TABLET,
}

export interface Project {
    client: Client;
    description: string;
    gallery?: Gallery<Media>;
    hero: Media;
    name: string;
    primaryTag?: Tag;
    responsibilities: Collection<Responsibility>;
    slug: string;
    tags: Collection<Tag>;
    thumbnail: Media;
    video: Media;
    year: number;
}

export enum ProjectActions {
    CLEARED = 'project/CLEARED',
    ERROR = 'project/ERROR',
    LOADED_PROJECT = 'project/LOADED',
}

export interface ProjectState {
    error?: number;
    item?: Project;
    sameClient?: Partial<Project>[];
    sameTag?: Partial<Project>[];
}

export enum ProjectsActions {
    LOADED = 'projects/LOADED',
    LOADED_MORE = 'projects/LOADED_MORE',
    LOADING_MORE = 'projects/LOADING_MORE',
}

export interface ProjectsState extends Collection<Project> {
    loading?: boolean;
}

export interface Responsibility {
    description: string;
    icon: string;
    name: string;
}

export interface ScrollerProps {
    children: Children;
    loading?: boolean;
    loadMore?: () => void;
    numberOfItems?: number;
    onScroll?: (e: UIEvent<HTMLDivElement>) => void;
    testID?: string;
    totalItems?: number;
}

export interface Store {
    clients: Client[];
    employment: Employment[];
    project: ProjectState;
    projects: ProjectsState;
    tags: Tag[];
}

export type StyledProps<T = {}> = { theme: Theme } & T;

export interface Tag {
    name: string;
    slug: string;
}

export enum TagActions {
    LOADED = 'tag/LOADED',
}

export interface TagProps {
    tags: Tag[];
}

export interface Theme {
    breakpoints: {
        mobile: number;
        tabletLandscape: number;
        tabletPortrait: number;
    };
    colors: {
        highlight: string;
        background: string;
        border: string;
        brand: string;
        offset: string;
        text: string;
    };
    images: {
        logo: {
            pink: string;
            white: string;
        };
        loading: string;
    };
    isWebpSupported?: boolean;
}

export interface ThumbnailProps {
    client?: ReactElement;
    color: string;
    name: string;
    ratio?: AspectRatios;
    url: string;
}

declare global {
    interface Window extends Window {
        __REDUX_DEVTOOLS_EXTENSION__?: Function;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: Function;
    }
}
