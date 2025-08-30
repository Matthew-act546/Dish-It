import { Link } from "react-router";

export default function Footer() {
  const navigation = [
    { name: "Home", to: "/" },
    { name: "Favorites", to: "/Favorites" },
    { name: "Country Dish", to: "/CountryDish" },
    { name: "Browse Dish", to: "/BrowseDish" },
  ];

  const webData = [
    { name: "Github(source code)", href: "/" },
    { name: "Figma Design", href: "#" },
    { name: "Meal it API", href: "/CountryDish" },
  ];

  const portfolio = [
    { name: "Github", href: "/" },
    { name: "Facebook", href: "/Favorites" },
    { name: "Upwork", href: "/CountryDish" },
  ];

  return (
    <>
      <section className="flex justify-center bg-primary text-white">
        <div className="container mt-7">
          <div className="grid grid-cols-2 gap-10 mx-3 lg:grid-cols-4 md:grid-cols-4">
            <div>
              <h2 className="text-4xl font-bold">Dish it.</h2>
              <h4 className="text-xl ">Your personal recipe companion</h4>
            </div>
            <div>
              <ul className="list-none">
                <li>
                  {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`hover:underline`}
                  >
                    {item.name} <br />
                  </Link>
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none">
                <li>
                  {webData.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`hover:underline`}
                  >
                    {item.name} <br />
                  </Link>
                  ))}
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none">
                <li>
                  {portfolio.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`hover:underline`}
                  >
                    {item.name} <br />
                  </Link>
                  ))}
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center mt-7">
            <hr className="w-[40%]"/>
          </div>

          <p className="text-center mt-2">© 2025 Dish It. All rights reserved</p>
        </div>
      </section>
    </>
  )
}