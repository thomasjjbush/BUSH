import { ReactNode } from 'react';
import { renderModule } from '../../test-utils/render-module/render-module';
import Project from './project';
import { loadProject } from './project.actions';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(() => ({ slug: 'sluggy' })),
}));

jest.mock('../../utils', () => ({
    ...jest.requireActual('../../utils'),
    useGraphQL: jest.fn().mockReturnValue('graphQLContext'),
}));

jest.mock('./project.actions', () => ({
    loadProject: jest.fn().mockReturnValue({ type: 'MOCK_LOAD_PROJECT' }),
}));

jest.mock('react-markdown', () => ({
    __esModule: true,
    default: ({ children }: { children: string }): string => children,
}));

jest.mock('./../../components', () => ({
    Carousel: ({ children }: { children: ReactNode[] }): ReactNode[] => children,
    Client: (): string => '',
    Error: (): string => '',
    HiddenText: ({ children }: { children: string }): string => children,
    Icon: (): string => '',
    Image: (): string => '',
    Scroller: ({ children }: { children: ReactNode[] }): ReactNode[] => children,
    Tags: (): string => '',
}));

describe('Project', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should match snapshot', () => {
        expect(renderModule(Project).find(Project)).toMatchSnapshot();
    });

    it('should invoke loadProject on mount', () => {
        renderModule(Project);
        expect(loadProject).toHaveBeenCalledTimes(1);
        expect(loadProject).toHaveBeenCalledWith('graphQLContext', 'sluggy');
    });
});
