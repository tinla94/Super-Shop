import SigninWarning from '../components/Auth/SigninWarning';
import Permissions from '../components/User/Permissions';

const PermissionsPage = props => (
    <div>
        <SigninWarning>
            <Permissions />
        </SigninWarning>
    </div>
)

export default PermissionsPage;