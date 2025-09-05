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
    <>
      <NavigationalBar />
      <section className="w-full">
        <div className="mt-15 flex justify-center">
          <div>
            <div className="flex justify-center ">
              <FontAwesomeIcon icon={faHeart} className="text-primary text-[5rem] w-full" /> 
            </div>
            
            <h1 className="text-6xl rt-1 font-bold leading-16 text-primary">Favorites</h1>
            <p className="text-center">list of your favorites</p>
          </div>
        </div>
         <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 my-4 mx-5 lg:mx-15 justify-items-center">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="max-w-sm w-full bg-white/80 backdrop-blur-sm border-primary/30 border-3 rounded-4xl shadow-xl"
              >
                <div className="border-2 border-primary/50 shadow m-5 p-2 rounded-3xl overflow-hidden">
                  <a href="#">
                    <img className="rounded-t-lg w-full" src={dish.image} alt={dish.name} />
                  </a>
                </div>

                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                      {dish.name} <sup>{dish.flag}</sup>
                    </h5>
                  </a>
                  <p className="mb-3 font-normal">{dish.category}</p>

                  <ul className="list-none grid grid-flow-col mb-5 overflow-x-auto gap-2">
                    {dish.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="border border-gray-300 px-3 py-1 rounded-4xl hover:bg-accent hover:text-white text-center whitespace-nowrap"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="btn-accent p-2 "
                  >
                    Dish it now!
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
      </section>
    </>
  )
}
