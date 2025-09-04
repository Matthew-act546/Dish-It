import NavigationalBar from "./NavigationalBar";

export default function Home() {
  return (
    <>
      
      <NavigationalBar />
      <section className="w-full h-screen md:[100dvh] bg-secondary/20">
        <div className="banner bg-primary w-full">
          <div className="flex h-35 justify-center items-center py-10 mx-7">
            <form className="flex max-w-lg w-full relative">
              {/* Search Input */}
              <label htmlFor="voice-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="voice-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                  placeholder="Search Dish"
                  required
                />
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="btn-accent ml-2"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                Search
              </button>
            </form>
          </div>
        </div>

      <div className="container my-5 lg:my-10 flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-10 mx-auto px-4">
  
        
        <div className=" flex-1 min-w-[18rem]
      text-xl rounded-3xl bg-primary/90 p-6 md:p-10 shadow-md shadow-primary text-white">
          <h1 className="text-3xl md:text-4xl rt-1 font-bold leading-tight mb-4">
            Your personal recipe companion
          </h1>
          <p className="leading-relaxed rp-1 text-gray-50">
            Whether you’re craving something new or want to recreate a classic, Meal It makes it easy to find, learn, and enjoy meals from all cuisines — all in one place.
          </p>
          <br />
          <button
            type="button"
            className="btn-accent h-[3rem]">
            Browse dish
          </button>
        </div>

        <div className="md:h-[32rem] flex items-center w-full md:flex-1">
          <img src="dish1-h.jpeg" alt="Delicious food"
            className="rounded-3xl md:h-[24rem] shadow-xl shadow-primary h-full w-full " />
        </div>

      </div>



      </section>
    </>
  );
}