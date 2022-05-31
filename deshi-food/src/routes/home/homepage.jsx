import FoodMenu from '../../components/food-menu/food-menu';

const HomePage = () => {
  const foods = [
    {
      id: 1,
      title: 'Rice',
      imageUrl: 'https://i.ibb.co/2SMJcff/8.jpg',
    },
    {
      id: 2,
      title: 'Curry',
      imageUrl: 'https://i.ibb.co/KFLNNnG/recipe.jpg',
    },
    {
      id: 3,
      title: 'Snacks',
      imageUrl: 'https://i.ibb.co/5Th7xCs/12.jpg',
    },
    {
      id: 4,
      title: 'Biriyani',
      imageUrl: 'https://i.ibb.co/H2xbs8w/2.jpg',
    },
    {
      id: 5,
      title: 'Dessert',
      imageUrl: 'https://i.ibb.co/8BbjTSw/Whats-App-Image-2022-05-28-at-12-36-25-PM.jpg',
    },
  ];

  return <FoodMenu foods={foods} />;
};

export default HomePage;