import React from 'react';


import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Categories></Categories>
            <Products></Products>
        </div>
    );
};

export default Home;