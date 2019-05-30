import PasswordReset from '../components/Users/PasswordReset';

const Reset = props => (
    <div>
        <p>Reset Your Password</p>
        <PasswordReset resetToken={props.query.resetToken} />
    </div>
);


export default Reset;