import React from 'react';
import User from '../User/User';
import Link from 'next/link';
import Header from '../Header/Header';
import styled from 'styled-components';


const AccountStyle = styled.div`
  width: 100%;
  margin-top: 2rem;
  color: ${props => props.theme.darkgrey};

  h2 {
    text-align: center;
    font-size: 3.5rem;
    letter-spacing: .5rem;
  }

  hr {
    margin: 0 10% 1rem 10%;
    border-top: 3px solid ${props => props.theme.darkgrey};
  }

  .account-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin: 0 10% 1rem 10%;
  

    @media(max-width: 940px) {
      grid-template-columns: 1fr;

      img {
        height: 250px;
      }
    }

      img {
        width: 100%;
        height: auto;
        border-radius: .4rem;
        box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
      }

      p {
        font-size: 2rem;
        margin-bottom: 1.5rem;
        font-weight: 600;
        letter-spacing: .2rem;

        .account-detail {
          font-style: italic;
          color: ${props => props.theme.subColor};
          

          &:hover {
            color: ${props => props.theme.pink};
          }
        }
      }

      .account-details {
        width: 100%;

        &-link {
          a {
            display: block;
            font-size: 2rem;
            color: ${props => props.theme.pink};
            letter-spacing: .3rem;
            margin: 1.5rem 0;
            cursor: pointer;
            transition: all .4s;

            &:hover {
              color: ${props => props.theme.subColor};
              transform: translateY(-.4rem);
            }
          }
        }
      }
  }
`



const Nav = () => (
  <>
    <Header />
    <User>
      {({ data }) => {
        const me = data ? data.me : null
        console.log(me);
        return (
          <AccountStyle>
            <h2>Account Information</h2>
            <hr />
            <div className="account-grid">
              <img src="/static/images/picture1.jpg"/>
              <div className="account-details">
                <p>ID: <span className="account-detail">{me.id}</span></p>
                <p>Username: <span className="account-detail">{me.name}</span></p>
                <p>Email: <span className="account-detail">{me.email}</span></p>
                <p>Member Status: <span className="account-detail">{me.permissions[0]}</span></p>
                <div className="account-details-link">
                  <Link href="/orders">
                    <a>Check Your Orders</a>
                  </Link>
                  <Link href="/sell">
                    <a>Sell Your Item</a>
                  </Link>
                </div>
              </div>
            </div>
          </AccountStyle>
        )
      }}
    </User>
  </>
  );
  

export default Nav;