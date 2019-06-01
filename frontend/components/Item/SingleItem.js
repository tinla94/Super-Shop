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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const SingleItemStyles = styled.div`
  width: 100%;

  
  .singleitem-top {
    display: flex;
    align-items:center;
    padding: 3rem 5rem 0 5rem;

    h2 {
      font-size: 2.6rem;
      letter-spacing: .3rem;
    }

    &-details {
      margin-left: 3rem;
    }

    &-buttons {
      width: 100%;
      padding: 1rem 0;
    }
  }

  hr {
    margin-bottom: 1rem;
    border-top: 4px solid${props => props.theme.darkgrey};
  }

  img {
    width: 50%;
    height: auto;
    border: 1px solid black;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    border-radius: .5rem;
    transition: all .3s;

      &:hover {
        transform: scale(1.1);
      }
  }

  span {
    margin-right: 2.5rem;
    font-size: 2rem;
    cursor: pointer;

    &:nth-child(1) {
      color: ${props => props.theme.purpleOne}
    }

    &:nth-child(2) {
      color: ${props => props.theme.purpleTwo}
    }

    &:nth-child(3) {
      color: ${props => props.theme.purpleThree}
    }

    &:hover {
      color: ${props => props.theme.lightgrey};
    }
  }

  .singleitem-bottom {
    padding: 5rem 5rem 2rem 5rem !important;
    font-size: 2rem;
    letter-spacing: .2rem;

      h3 {
        font-size: 3rem;
        letter-spacing: .4rem;
      }
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
                      <div className="singleitem-top">
                        <img src={item.largeImage} alt={item.title} />
                        <div className="singleitem-top-details">
                          <h2>{item.title}</h2>
                          <p>{item.user}</p>
                          <hr />
                          <div className="singleitem-top-buttons">
                            <Link
                              href={{
                                pathname: 'update',
                                query: { id: item.id },
                              }}
                            >
                              <span>
                                <FontAwesomeIcon icon={faPen} />
                              </span>
                            </Link>
                            <AddToCart id={item.id}>
                              <FontAwesomeIcon icon={faShoppingCart} />
                            </AddToCart>
                            <DeleteItem id={item.id}>
                              <FontAwesomeIcon icon={faTrash} />
                            </DeleteItem>
                          </div>
                        </div>
                      </div>
                      <div className="singleitem-bottom">
                        <h3>Description</h3>
                        <hr />
                        <p>{item.description}</p>
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
