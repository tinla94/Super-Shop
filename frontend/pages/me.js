import SigninWarning from '../components/Auth/SigninWarning';
import Me from '../components/User/Me';

const MePage = props => (
  <div>
    <SigninWarning>
      <Me />
    </SigninWarning>
  </div>
);

export default MePage;