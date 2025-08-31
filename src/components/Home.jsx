import NavigationalBar from "./NavigationalBar";

export default function Home() {
  return (
    <>
    
      <NavigationalBar />
      <section className="w-full h-screen">
        <div className="banner bg-primary w-full">
          <div className="flex h-35 justify-center items-center py-10">
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
                className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-primary bg-secondary rounded-lg border border-secondary hover:bg-secondary/90 focus:ring-4 focus:outline-none focus:ring-amber-800"
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

        <div className="container my-30 flex justify-center">
          <div className="grid grid-cols-2 gap-6 place-items-center mx-auto">
            <div>
              <div className="h-[20rem] w-[35rem] text-xl rounded-3xl bg-primary p-10 text-secondary">
                <p>
                  Whether you’re craving something new or want to recreate a classic, Meal It makes it easy to find, learn, and enjoy meals from all cuisines — all in one place.
                </p>
                <br />
                <button
                  type="button"
                  className="flex justify-center items-center py-2.5 px-3 text-sm w-30 h-12 font-medium text-primary bg-secondary rounded-lg hover:bg-secondary/90 focus:ring-4 focus:outline-none focus:ring-amber-800">
                  Browse dish
                </button>
              </div>
            </div>
            <div className="h-[30rem] w-[55rem] rounded-3xl bg-secondary p-4 text-secondary flex items-center justify-center">
              tery
            </div>
          </div>
        </div>


        

        
      </section>
    </>
  );
}