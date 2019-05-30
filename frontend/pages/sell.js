import CreateItem from '../components/Item/CreateItem';
import SigninWarning from '../components/Auth/SigninWarning';

const Sell = props => (
    <div>
        <SigninWarning>
            <CreateItem />
        </SigninWarning>
    </div>
)

export default Sell;