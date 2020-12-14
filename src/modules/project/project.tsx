import React, { Fragment, FunctionComponent, ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Carousel, Client, Error, HiddenText, Icon, Image, Scroller, Tags } from '../../components';
import { StyledMain } from '../theme/global';
import { labels } from '../../config';
import { ProjectActions, ProjectState, Store, Project as ProjectType } from '../../types';
import { loadProject } from './project.actions';
import * as Styled from './project.styles';
import { Loading } from '../../components/loading/loading';
import { useGraphQL } from '../../utils';

const renderSimilar = (title: string, items: Partial<ProjectType>[], color?: string): ReactElement => (
    <Fragment>
        <p style={{ margin: 30 }}>{title}</p>
        <Styled.SimilarContainer>
            {items.map(({ client, hero, name, slug }) => (
                <Styled.Similar color={color || client.primaryColor} key={slug} url={hero.url}>
                    <Link to={`/projects/${slug}`} data-test-id={`similar-${slug}`}>
                        <h1>{name}</h1>
                    </Link>
                </Styled.Similar>
            ))}
        </Styled.SimilarContainer>
    </Fragment>
);

const Project: FunctionComponent = (): ReactElement => {
    const graphQL = useGraphQL();
    const dispatch = useDispatch();
    const { slug } = useParams<{ slug: string }>();
    const project = useSelector<Store, ProjectState>(state => state.project);
    const [scrolled, setScrolled] = useState(0);
    const clientRef = useRef(null);
    const scrollerRef = useRef(null);
    const throttle = useRef(null);

    useEffect(() => {
        dispatch(loadProject(graphQL, slug));
        return (): void => {
            if (scrollerRef?.current?.scrollTop) {
                scrollerRef.current.scrollTop = 0;
            }
            clearTimeout(throttle.current);
            setScrolled(0);
            dispatch({ type: ProjectActions.CLEARED });
        };
    }, [slug]);

    const onScroll = useCallback(
        e => {
            if (throttle?.current) return;
            e.persist();
            throttle.current = setTimeout(() => {
                const newScroll = Math.ceil(e.target.scrollTop / 10);
                throttle.current = null;

                if (newScroll < 0) return;

                if (newScroll < 40) {
                    return setScrolled(newScroll);
                }
                if (newScroll > 40 && scrolled < 40) {
                    setScrolled(40);
                }
            }, 100);
        },
        [scrolled],
    );

    if (project.error) return <Error code={project.error} />;
    if (!project.item) return <Loading />;

    const { item, sameClient, sameTag } = project;
    const { client, description, gallery, hero, name, primaryTag, responsibilities, tags } = item;

    return (
        <StyledMain vertical>
            <Styled.Hero
                color={client.primaryColor}
                data-test-id="hero"
                style={{ height: 40 - scrolled + 'vh', minHeight: clientRef?.current?.clientHeight }}
                url={hero.url}
            >
                <Client
                    background={false}
                    logo={client.logo.url}
                    url={client.url}
                    ref={clientRef}
                    size={200}
                    width={100}
                />
            </Styled.Hero>
            <Scroller onScroll={onScroll} ref={scrollerRef}>
                <Styled.Info>
                    <Styled.Grid cols={3} colGap={30}>
                        <Styled.Panel>
                            <h1>{name}</h1>
                            <Tags tags={tags.items} />
                        </Styled.Panel>
                        <Styled.Description>{description}</Styled.Description>
                    </Styled.Grid>
                    {Boolean(gallery.total) && (
                        <Carousel
                            color={client.primaryColor}
                            margin={30}
                            numberOfItems={gallery.total}
                            itemsToDisplay={gallery.isLandScape ? 1 : 2}
                        >
                            {gallery.items.map(({ url }, i) => (
                                <Image key={i} src={url} size={800} width="100%" />
                            ))}
                        </Carousel>
                    )}
                    <Styled.Grid data-test-id="responsibilities" cols={3} colGap={30} rowGap={30}>
                        {responsibilities.items.map(({ description, icon, name }) => (
                            <Styled.Responsibility data-test-id="responsibility" key={name}>
                                <Icon color={client.primaryColor} icon={icon} size={50} />
                                <h1>{name}</h1>
                                <HiddenText lines={4}>{description}</HiddenText>
                            </Styled.Responsibility>
                        ))}
                    </Styled.Grid>
                    {project.item.video && (
                        <video style={{ width: '100%' }} controls>
                            <source src={project.item.video.url} />{' '}
                        </video>
                    )}
                </Styled.Info>
                {Boolean(sameClient?.length) &&
                    renderSimilar(labels.sameClient + client.name, sameClient, client.primaryColor)}
                {Boolean(sameTag?.length) && renderSimilar(labels.sameTag + primaryTag.name, sameTag)}
            </Scroller>
        </StyledMain>
    );
};

Project.displayName = 'Project';

export default Project;
