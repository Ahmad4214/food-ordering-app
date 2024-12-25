import { useParams } from 'react-router-dom'
import { IMG_URL_CDN } from './constants';
import "./RestaurantMenu.css"
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';

const RestaurantMenu = () => {
  const { id } = useParams();
 

  const restaurantsMenu = useRestaurant(id);


  return !restaurantsMenu ? <Shimmer/> :  (
    <div className='menucard'>
      <div>
        <img src={IMG_URL_CDN + restaurantsMenu?.cards[2]?.card?.card?.info?.cloudinaryImageId} alt='restaurantBanner' />
        <h2>{restaurantsMenu?.cards[2]?.card?.card?.info?.name}</h2>
        <h3>{restaurantsMenu?.cards[2]?.card?.card?.info?.avgRating} stars • {restaurantsMenu?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>

      </div>
      <div className='itemscard'>
        <h2>Menu Items</h2>
        
        <ul>
          {
            restaurantsMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map((item)=>
              (
                <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
              )
            )
           }
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu