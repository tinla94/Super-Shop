import React, { Component } from 'react';
import Header from '../Header/Header';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Link from 'next/link';
import Error from '../Utils/ErrorMessage';
import styled from 'styled-components';
import Head from 'next/head';
import DeleteItem from './DeleteItem';
import AddToCart from '../Cart/AddToCart';


const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
`;

const SINGLE_ITEM_QUERY = gql`
    query SINGLE_ITEM_QUERY( $id: ID!) {
        item(where: {id: $id }) {
            id 
            title
            description
            largeImage
        }
    }
`;

export class SingleItem extends Component {
  render() {
    return (
      <>
        <Header />
        <Query
            query={SINGLE_ITEM_QUERY}
            variables={{
                id: this.props.id
            }}>
            {({ error, loading, data }) => {
                if(error) return <Error error={error} />;
                if(loading) return <p>Loading...</p>;
                // Check item length
                if (!data.item) return <p>No Item Found for {this.props.id}</p>;
                const item = data.item;
                return (
                    <SingleItemStyles>
                      <Head>
                        <title>Super Shoes | {item.title}</title>
                      </Head>
                      <img src={item.largeImage} alt={item.title} />
                      <div className="details">
                        <h2>{item.title}</h2>
                        <p>{item.user}</p>
                        <p>{item.description}</p>
                        <div className="buttonList">
                        <Link
                          href={{
                            pathname: 'update',
                            query: { id: item.id },
                          }}
                        >
                          <a>Edit ✏️</a>
                        </Link>å
                        <AddToCart id={item.id} />
                        <DeleteItem id={item.id}>Delete This Item</DeleteItem>
                      </div>
                      </div>
                    </SingleItemStyles>
                );
            }}    
        </Query>
      </>
    )
  }
}

export default SingleItem;
