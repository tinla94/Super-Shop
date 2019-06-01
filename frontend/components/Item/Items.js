import React, { Component } from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import Item from './Item';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Pagination from '../Utils/Pagination';
import {perPage} from '../../config';


const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_ASC) {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
  margin: 0 1rem;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto 4rem auto;

  @media (max-width: 614px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }
`;


export class Items extends Component {
  render() {
    return (
      <>
        <Header />
        <Banner 
          text='"Get your shoes today with our great deal!"'
        />
        <Center>
            <Pagination page={this.props.page}/>
            <Query 
              query={ALL_ITEMS_QUERY}
              fetchPolicy="network-only"
              variables={{
                skip: this.props.page * perPage - perPage
              }}
              >
              {({ data, error, loading }) => {
                  if (loading) return <p>Loading...</p>;
                  if (error) return <p>Error: {error.message}</p>;
                  return (
                  <ItemsList>{data.items.map(item => <Item item={item} key={item.id} />)}</ItemsList>
                  );
              }}
            </Query>
            <Pagination page={this.props.page}/>
        </Center>
      </>
    )
  }
}


export default Items;
export { ALL_ITEMS_QUERY };
