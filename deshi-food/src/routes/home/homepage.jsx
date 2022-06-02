import FoodMenu from '../../components/food-menu/food-menu';

const HomePage = () => {
  const foods = [
    {
      id: 1,
      title: 'Rice',
      imageUrl: 'https://i.ibb.co/bLPqrHV/polao.webp',
    },
    {
      id: 2,
      title: 'Curry',
      imageUrl: 'https://i.ibb.co/LCFrS27/chickencurry.webp',
    },
    {
      id: 3,
      title: 'Biriyani',
      imageUrl: 'https://i.ibb.co/xjXDjXf/chicb.jpg',
    },
    {
      id: 4,
      title: 'Snacks',
      imageUrl: 'https://i.ibb.co/K9ZHcpZ/fuch.webp',
    },
    {
      id: 5,
      title: 'Dessert',
      imageUrl: 'https://i.ibb.co/6NNYL3w/payesh.webp',
    },
  ];

  return <FoodMenu foods={foods} />;
};

export default HomePage;