import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../User/User';
import Signin from './Signin';


const SigninWarning = props => (
    <Query query={CURRENT_USER_QUERY}>
        {({ data, loading }) => {
        if (loading) return <p>Loading...</p>;
        if (!data.me) {
            return (
            <div>
                <p>Please Sign In Your Account!</p>
                <Signin />
            </div>
            );
        }
        return props.children;
        }}
    </Query>
)


export default SigninWarning;