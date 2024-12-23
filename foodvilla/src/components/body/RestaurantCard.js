import React, { useEffect, useState } from 'react'
import './RestaurantCard.css'
import { IMG_URL_CDN,  } from '../constants';
import Shimmer from '../Shimmer';

const filteredData = ( inputText, restaurant )=>{
    const newfilteredData = restaurant.filter((res)=>{
        return res?.info?.name?.toLowerCase().includes(inputText.toLowerCase())
    })
    return newfilteredData
}
const RestaurantCard = () => {
    let [inputText, setInputText] = useState('');
    let [restaurant, setRestaurant] = useState([]);
    let [fillteredRestaurant, setFillteredRestaurant] = useState([]);

    useEffect(()=>{
        getResturantsFromSwiggy();
    },[]);

    async function getResturantsFromSwiggy(){
        const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1");
        console.log(data);
        const jsondata = await data.json();
        const dehlirestaurant = jsondata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants 
        console.log(dehlirestaurant);
        setRestaurant(dehlirestaurant);
        setFillteredRestaurant(dehlirestaurant);
    }

    return (restaurant?.length===0) ? <Shimmer/> : (
        <>
            <div>
                <input type='text'
                    className='searchText'
                    placeholder='search'
                    value={inputText}
                    onChange={(e) => { setInputText(e.target.value) }} />
                <button onClick={() => {
                     const data = filteredData(inputText, restaurant);
                     setFillteredRestaurant(data)
                }}>Search</button>
            </div>

            <div className='cardgrid'>
                {
                    fillteredRestaurant.map((res) => {
                        return (
                            <div key={res.info.id} className='rescard'>
                                <img src={IMG_URL_CDN + res.info.cloudinaryImageId} alt='card'></img>
                                <h2>{res.info.name}</h2>
                                <h3>{res.info.avgRating} stars <span>•</span> {res.info.sla.slaString}</h3>
                                <p>{res.info.cuisines.join(', ')}</p>
                                <p>{res.info.areaName}</p>
                            </div>
                        )
                    })
                }


            </div>
        </>
    )
}

export default RestaurantCard