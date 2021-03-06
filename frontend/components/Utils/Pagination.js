import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PaginationStyles from '../styles/item/PaginationStyles';
import { perPage } from '../../config';
import Head from 'next/head';
import Link from 'next/link';



const PAGINATION_QUERY = gql`
    query PAGINATION_QUERY {
        itemsConnection {
            aggregate {
                count
            }
        }
    }
`;

const Pagination = (props) => (
    <Query  
        query={PAGINATION_QUERY}
    >
        {({ data, loading, error}) => {
            if(loading) return <p>Loading...</p>;
            if(error) return <Error error={error} />
            const count = data.itemsConnection.aggregate.count;
            const pages = Math.ceil(count / perPage);
            const page = props.page;
            return (
                <PaginationStyles>
                    <Head>
                        <title>Super Shoes Page {page} of {pages}</title>
                    </Head>
                    <Link
                        prefetch
                        href={{
                        pathname: 'items',
                        query: { page: page - 1 },
                        }}
                    >
                        <a className="prev" aria-disabled={page <= 1}>
                        ← Prev
                        </a>
                    </Link>
                    <p>Page {props.page} of {pages}</p>
                    <Link
                        prefetch
                        href={{
                        pathname: 'items',
                        query: { page: page + 1 },
                        }}
                    >
                        <a className="prev" aria-disabled={page >= pages}>
                        Next →
                        </a>
                    </Link>
                </PaginationStyles>
            )
        }}        
    </Query>
)

export default Pagination;