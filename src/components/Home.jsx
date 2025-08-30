import NavigationalBar from "./NavigationalBar";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
    <NavigationalBar />
    <section className="bg-[url('/hero-img.png')] bg-no-repeat bg-cover bg-bottom w-full h-screen">
      <div className="w-full h-full  flex items-center justify-center bg-black/35">
        <div className="w-[40rem] h-auto p-10 rounded-4xl flex items-center justify-center bg-black/20">
          <div className="container">
            <h1 className="text-white uppercase text-4xl font-bold">
              Your personal <br />
              recipe companion

            </h1>
            <p className="text-white w-full max-w-2xl my-8 text-lg">
              Whether you’re craving something new or want to recreate a classic, 
              Dish It makes it easy to find, learn, and enjoy meals from all cuisines — all in one place.

            </p>
            <a
              href=""
              className="bg-primary text-white uppercase font-semibold px-6 py-3 rounded-md transition-all inline-block hover:scale-95"
            >
              <Link to="/BrowseDish">Browse Dish</Link>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}