import SigninWarning from '../components/Auth/SigninWarning';
import OrderList from '../components/Order/OrderList';

const Orders = props => (
  <div>
    <SigninWarning>
      <OrderList />
    </SigninWarning>
  </div>
);

export default Orders;