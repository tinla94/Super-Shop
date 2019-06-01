import UpdateItem from '../components/Item/UpdateItem';

const Update = ({ query }) => (
    <div>
        <UpdateItem id={query.id}/>
    </div>
)

export default Update;