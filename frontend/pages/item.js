import SingleItem from '../components/Item/SingleItem';

const Item = props => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

export default Item;