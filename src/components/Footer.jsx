export default function Footer() {
  return (
    <>
      <section className="w-screen flex justify-center bg-primary text-white">
        <div className="container mt-7">
          <div className="grid grid-cols-2 gap-10 mx-3 lg:grid-cols-4 md:grid-cols-4">
            <div>
              <h2 className="text-4xl font-bold">Dish it.</h2>
              <h4 className="text-xl ">Your personal recipe companion</h4>
            </div>
            <div>
              <ul className="list-none">
                <li><a className="hover:underline" href="#">Home</a></li>
                <li><a className="hover:underline" href="#">Favorites</a></li>
                <li><a className="hover:underline" href="#">Country Dish</a></li>
                <li><a className="hover:underline" href="#">Browse Dish</a></li>
                <li><a className="hover:underline" href="#">Popular Dish</a></li>
              </ul>
            </div>
            <div>
              <ul className="list-none">
                <li><a className="hover:underline" href="#">Github(source code)</a></li>
                <li><a className="hover:underline" href="#">Figma Design</a></li>
                <li><a className="hover:underline" href="#">Meal it API</a></li>
              </ul>
            </div>
            <div>
              <ul className="list-none">
                <li><a className="hover:underline" href="#">Github</a></li>
                <li><a className="hover:underline" href="#">Facebook</a></li>
                <li><a className="hover:underline" href="#">Upwork</a></li>
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