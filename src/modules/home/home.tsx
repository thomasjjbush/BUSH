import React, { ChangeEvent, FunctionComponent, ReactElement, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadHomePage, loadProjects } from './home.actions';
import { Store } from '../../types';
import { labels, orders } from '../../config';
import * as Styled from './home.styles';
import { Link } from 'react-router-dom';
import { StyledMain } from '../theme/global';
import { Client, Scroller, Tags, Thumbnail } from '../../components';
import { getMonthAndYear, useGraphQL } from '../../utils/';

const renderOption = (name: string, val?: string | number): ReactElement => (
    <option key={val ?? name} value={val ?? name}>
        {name}
    </option>
);

const Home: FunctionComponent = (): ReactElement => {
    const graphQL = useGraphQL();
    const dispatch = useDispatch();
    const { clients, employment, projects, tags } = useSelector<Store, Partial<Store>>(state => ({
        clients: state.clients,
        employment: state.employment,
        projects: state.projects,
        tags: state.tags,
    }));

    const cv = useRef(null);
    const [client, setClient] = useState('');
    const [order, setOrder] = useState(orders[0].value);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(loadHomePage(graphQL));
    }, []);

    const onChange = (cb: Function, key: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
        cb(e.target.value);
        dispatch(loadProjects(graphQL, { client, order, search, [key]: e.target.value }));
    };

    const onClick = (): void => {
        dispatch(loadProjects(graphQL, { client, order, search, skip: projects.items.length }));
    };

    return (
        <StyledMain max={2000} padding={30}>
            <Styled.CVContainer>
                <Styled.CV ref={cv}>
                    <Styled.CVInfo>
                        <h1>{labels.name}</h1>
                        <h2>{labels.jobTitle}</h2>
                        <Tags tags={tags} />
                    </Styled.CVInfo>

                    <Scroller>
                        <div>
                            <Styled.CVTitle>{labels.aboutMe}</Styled.CVTitle>
                            <h2>{labels.experience}</h2>
                            {employment.map(({ companyName, endDate, responsibilities, startDate, title }, i) => (
                                <Styled.Experience key={i}>
                                    <Styled.Date>
                                        {getMonthAndYear(startDate)} - {getMonthAndYear(endDate) || labels.present}
                                    </Styled.Date>
                                    <Styled.Timeline />
                                    <Styled.ExperienceInfo>
                                        <h2>{title}</h2>
                                        <h3>{companyName}</h3>
                                        <p>{responsibilities}</p>
                                    </Styled.ExperienceInfo>
                                </Styled.Experience>
                            ))}
                        </div>
                    </Scroller>
                </Styled.CV>
            </Styled.CVContainer>
            <Styled.Projects>
                <h1>
                    Projects ({projects.items.length}/{projects.total || 0})
                </h1>
                <Styled.Filters>
                    <Styled.Input
                        aria-label={labels.search}
                        data-test-id="search-input"
                        onChange={onChange(setSearch, 'search')}
                        placeholder={labels.search}
                        value={search}
                        type="text"
                    />
                    <Styled.Select
                        aria-label={labels.selectOrder}
                        data-test-id="select-order"
                        onChange={onChange(setOrder, 'order')}
                        value={order}
                    >
                        {orders.map(({ name, value }) => renderOption(name, value))}
                    </Styled.Select>
                    <Styled.Select
                        aria-label={labels.filterByClient}
                        data-test-id="select-client"
                        onChange={onChange(setClient, 'client')}
                        value={client}
                    >
                        {renderOption('All', '')}
                        {clients.map(({ name }) => renderOption(name))}
                    </Styled.Select>
                </Styled.Filters>
                <Scroller
                    loadMore={onClick}
                    numberOfItems={projects.items.length}
                    loading={projects.loading}
                    totalItems={projects.total}
                    testID="project-scroller"
                >
                    <Styled.Grid>
                        {projects.items.map(({ client, name, slug, tags, thumbnail }) => (
                            <Link data-test-id="project" key={slug} to={`/projects/${slug}`}>
                                <Thumbnail
                                    client={<Client alt={client.name} logo={client.logo.url} size={200} width={100} />}
                                    color={client.primaryColor}
                                    name={name}
                                    url={thumbnail.url}
                                />
                                <Tags tags={tags.items} />
                            </Link>
                        ))}
                    </Styled.Grid>
                </Scroller>
            </Styled.Projects>
        </StyledMain>
    );
};

Home.displayName = 'Home';

export default Home;
