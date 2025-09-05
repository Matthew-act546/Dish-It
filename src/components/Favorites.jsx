import NavigationalBar from "./NavigationalBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'; // ✅ Import the icon object

const dishes = [
    {
      id: 1,
      name: "Meal Name",
      flag: "🇵🇭",
      category: "Category",
      image: "/ytvid.png",
      tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
    },
    {
      id: 2,
      name: "Another Dish",
      flag: "🇯🇵",
      category: "Category",
      image: "/ytvid.png",
      tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
    },
    {
      id: 3,
      name: "Special Meal",
      flag: "🇺🇸",
      category: "Category",
      image: "/ytvid.png",
      tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
    },
    {
      id: 4,
      name: "Special Mealsss",
      flag: "🇺meow",
      category: "Category",
      image: "/ytvid.png",
      tags: ["Tag1", "Tag2", "Tag3", "Tag4", "Tag5"],
    },
  ];

export default function Favorites() {
  return (
    <div className="bg-[#F5E1DA]/70 min-h-screen">

      <NavigationalBar />
      
      <section className="w-full ">
        <div className="mt-15 flex justify-center ">
          <div>
            <div className="flex justify-center ">
              <FontAwesomeIcon icon={faHeart} className="text-primary text-[5rem] w-full" /> 
            </div>
            
            <h1 className="text-6xl rt-1 font-bold leading-16 text-primary">Favorites</h1>
            <p className="text-center">list of your favorites</p>
          </div>
        </div>
         <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 my-4 mx-5 lg:mx-15 justify-items-center cursor-pointer">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="card border-1 border-primary hover:border-2 hover:border-primary "
              >
                <div className="border-2 border-primary/50 shadow m-5 p-2 rounded-3xl overflow-hidden">
                    <img className="rounded-t-lg w-full" src={dish.image} alt={dish.name} />
                </div>

                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                      {dish.name} <sup>{dish.flag}</sup>
                    </h5>
                  </a>
                  <p className="mb-3 font-normal">{dish.category}</p>

                  <ul className="list-none flex flex-wrap gap-1 ">
                    {dish.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="tags"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                
                </div>
              </div>
            ))}
          </div>
      </section>
    </div>
  )
}
