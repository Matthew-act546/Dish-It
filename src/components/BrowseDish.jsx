import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ faHeart } from '@fortawesome/free-solid-svg-icons'; 
import NavigationalBar from "./NavigationalBar";

export default function BrowseDish() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllMeals = async () => {
      try {      
        const cachedMeals = localStorage.getItem("meals");
        if (cachedMeals) {
          setMeals(JSON.parse(cachedMeals));
          setLoading(false);
          return;
        }

        const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
        const allMeals = [];

        for (const letter of alphabet) {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
          );
          const data = await res.json();
          if (data.meals) {
            allMeals.push(...data.meals);
          }
        }

      setMeals(allMeals);

      localStorage.setItem("meals", JSON.stringify(allMeals));
    } catch (err) {
      console.error("Error fetching meals:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchAllMeals();
}, []); 

  if (loading) {
    return (
      <div className="bg-[#F5E1DA]/70 min-h-screen flex items-center justify-center">
        <p className="text-2xl font-semibold text-primary">Loading meals...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#F5E1DA]/70 min-h-screen">
      <NavigationalBar />
      <section className="w-full ">
        <div className="mt-15 flex justify-center">
          <div>
            <div className="flex justify-center ">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-primary text-[5rem] w-full"
              />
            </div>
            <h1 className="text-6xl rt-1 font-bold leading-16 text-primary">
              Favorites
            </h1>
            <p className="text-center">List of your favorite meals</p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-4 mx-5 lg:mx-15 justify-items-center">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="card border-1 border-primary hover:border-2 cursor-pointer hover:border-primary"
            >
              <div className="border-2 border-primary/50 shadow m-5 p-2 rounded-3xl overflow-hidden">
                <img
                  className="rounded-t-lg w-full"
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
              </div>

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">
                  {meal.strMeal}{" "}
                  <sup>
                    {meal.strArea === "Unknown" ? "🌍" : meal.strArea || "🍽"}
                  </sup>
                </h5>
                <p className="mb-3 font-normal">
                  {meal.strCategory || "No category"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}