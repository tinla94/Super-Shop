import React from 'react';
import { Query } from 'react-apollo';
import { format } from 'date-fns';
import Link from 'next/link';
import styled from 'styled-components';
import gql from 'graphql-tag';
import Error from '../Utils/ErrorMessage';
import formatMoney from '../../lib/formatMoney';
import OrderItemStyles from '../styles/order/OrderItemStyles';
import Header from '../Header/Header';


const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders(orderBy: createdAt_DESC) {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

const ordersStyle = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends React.Component {
  render() {
    return (
      <>
      <Header />
      <Query query={USER_ORDERS_QUERY}>
        {({ data: { orders }, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <Error erorr={error} />;
          console.log(orders);
          return (
            <div>
                <h2 style={{
                  marginLeft: '5rem',
                  marginTop: '2rem',
                  fontSize: '2.5rem',
                  letterSpacing: '.4rem',
                  color: '#676d79'
                }}>
                  You have {orders.length} orders
                </h2>
                <hr style={{ 
                  margin: '1rem 5rem'
                }}/>
                {orders.map(order => (
                  <OrderItemStyles 
                    key={order.id}>
                      <Link
                      href={{
                        pathname: '/order',
                        query: { id: order.id },
                      }}
                      >
                      <a>
                        <div className="order-meta">
                         <p>{order.items.reduce((a, b) => a + b.quantity, 0)} Items</p>
                         <p>{order.items.length} Products</p>
                         <p>{order.createdAt}</p>
                         <p>{formatMoney(order.total)}</p>
                        </div>
                        <div className="images">
                          {order.items.map(item => (
                            <img key={item.id} src={item.image} alt={item.title} />
                          ))}
                        </div>
                      </a>
                      </Link>
                  </OrderItemStyles>
                ))}
            </div>
          );
        }}
      </Query>
      </>
    );
  }
}

export default OrderList;