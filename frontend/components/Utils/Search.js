import React from 'react';
import Downshift from 'downshift';
import Router from 'next/router';
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem } from '../styles/DropDown';



const SEARCH_ITEMS_QUERY = gql`
  query SEARCH_ITEMS_QUERY($searchTerm: String!) {
    items(where: { 
        OR: [
            { title_contains: $searchTerm },{ description_contains: $searchTerm }
            ] }) {
      id
      image
      title
    }
  }
`;

function routeToItem(item) {
    Router.push({
      pathname: '/item',
      query: {
        id: item.id,
      },
    });
  }


class Search extends React.Component {
    state = {
        items: [],
        loading: false
    }

    // user debounce function to delay invoking function after wait milliseconds
    onChange = debounce(async (e, client) => {
        // turn on loading
        this.setState({ loading: true });
        // Manually query apollo client
        const res = await client.query({
            query: SEARCH_ITEMS_QUERY,
            variables: { searchTerm: e.target.value }
        });
        // turn off loading
        this.setState({
            items: res.data.items,
            loading: false
        });
    }, 350);

    render() {
        return(
        <div className="nav-search">
            <Downshift onChange={routeToItem} itemToString={item => (item === null ? '' : item.title)}>
            {({ getInputProps, getItemProps, isOpen, inputValue, highlightedIndex }) => (
                <div>
                <ApolloConsumer>
                    {client => (
                    <input
                        {...getInputProps({
                        type: 'search',
                        placeholder: 'Search Item',
                        id: 'search',
                        className: this.state.loading ? 'loading' : '',
                        onChange: e => {
                            e.persist();
                            this.onChange(e, client);
                        },
                        })}
                    />
                    )}
                </ApolloConsumer>
                {isOpen && (
                    <div className="nav-search-dropdown">
                    {this.state.items.map((item, index) => (
                        <div
                            className="nav-search-dropdown-item"
                            {...getItemProps({ item })}
                            key={item.id}
                            highlighted={index === highlightedIndex}
                            >
                            <img width="50" src={item.image} alt={item.title} />
                            {item.title}
                        </div>
                    ))}
                    {!this.state.items.length &&
                        !this.state.loading && <div className="nav-search-dropdown"> No Item Found</div>}
                    </div>
                )}
                </div>
            )}
            </Downshift>
        </div>
        )
    }
}

export default Search;