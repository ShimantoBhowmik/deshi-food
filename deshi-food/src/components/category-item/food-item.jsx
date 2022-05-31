import './food-item.scss';

const FoodItem = ({ food }) => {
  const { imageUrl, title } = food;
  return (
    <div className='foods'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='food-body'>
        <h2>{title}</h2>
        <p>Enjoy this delight today!</p>
      </div>
    </div>
  );
};

export default FoodItem;