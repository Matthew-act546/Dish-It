export default function Popular() {

  
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
  ];

  return (
    <>
      <hr className="border-5 border-primary" />
      <section className="flex justify-center bg-[#F5E1DA]/70">
        <div className="container my-7">
          <h1 className="text-primary text-5xl font-bold text-center">Popular Dish</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-4 justify-items-center">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="max-w-sm w-full bg-white border border-gray-200 rounded-4xl shadow-sm"
              >
                <div className="border-2 m-5 rounded-3xl overflow-hidden">
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
                        className="border border-gray-300 px-3 py-1 rounded-4xl hover:bg-amber-900 hover:text-white text-center whitespace-nowrap"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-amber-900"
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
        </div>
      </section>
    </>
  );
}
