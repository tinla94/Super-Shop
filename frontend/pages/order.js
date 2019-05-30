import SigninWarning from '../components/Auth/SigninWarning';
import Order from '../components/Order/Order';

const OrderPage = props => (
  <div>
    <SigninWarning>
      <Order id={props.query.id} />
    </SigninWarning>
  </div>
);

export default OrderPage;