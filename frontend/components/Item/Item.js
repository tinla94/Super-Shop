import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Title from '../styles/Title';
import ItemStyles from '../styles/item/ItemStyles';
import formatMoney from '../../lib/formatMoney';
import DeleteItem from './DeleteItem';
import AddToCart from '../Cart/AddToCart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';



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
          <p>{formatMoney(item.price)}</p>
        </Title>
        <div className="buttonList">
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
      </ItemStyles>
    )
  }
}

export default Item
