import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Title from '../styles/Title';
import ItemStyles from '../styles/ItemStyles';
import PriceTag from '../styles/PriceTag';
import formatMoney from '../../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from '../Cart/AddToCart';


export class Item extends Component {
    static propTypes = {
        item: PropTypes.object.isRequired,
    };

  render() {

    const { item } = this.props;

    return (
        <ItemStyles>
        <Link
            href={{
              pathname: '/item',
              query: { id: item.id },
            }}
          >
          {item.image && <img src={item.image} alt={item.title} style={{ cursor: 'pointer'}}/>}
        </Link>

        <Title>
          <a>{item.title}</a>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <div className="buttonList">
          <Link
            href={{
              pathname: 'update',
              query: { id: item.id },
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <AddToCart id={item.id} />
          <DeleteItem id={item.id}>Delete This Item</DeleteItem>
        </div>
      </ItemStyles>
    )
  }
}

export default Item
