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
    {
      id: 4,
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
      <section className="flex justify-center bg-[#F5E1DA]/70 ">
        <div className="container my-7">
          <h1 className="text-primary text-5xl font-bold text-center">Popular Dish</h1>

          <div className="grid grid-cols-2 sm:mx-29 lg:grid-cols-4 gap-5 my-5 justify-items-center">
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="card border-2 border-transparent hover:border-primary cursor-pointer">

                <div className="border-2 border-primary/50 shadow m-5 p-2 rounded-3xl">
                  <img className="rounded-t-lg w-full" src={dish.image} alt={dish.name} />
                </div>

                <div className="px-6 py-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight">
                    {dish.name} <sup>{dish.flag}</sup>
                  </h5>
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
        </div>
      </section>
    </>
  );
}
