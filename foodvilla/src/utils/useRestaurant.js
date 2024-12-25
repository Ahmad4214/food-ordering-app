import { useState , useEffect } from "react";

const useRestaurant = (id) =>{
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        async function getRestaurantMenu() {
          const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + id + "&submitAction=ENTER");
          const json = await data.json();
          setRestaurant(json?.data);
          console.log(json?.data?.cards[2]);
          console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        //   setRestaurant(json?.data?.cards[2]?.card?.card);
        //   setRestaurantsMenuItems(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
        };
        getRestaurantMenu();
      }, [id]);
      return restaurant
};
export default useRestaurant;