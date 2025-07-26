

export default function Popular() {
  return (
    <>
      <hr className="border-8 border-primary" />
      <section className="w-screen flex justify-center bg-[#F5E1DA]/70">
        <div className="container mt-7 ">
          <h1 className="text-primary text-5xl font-bold text-center">Popular Dish</h1>
          <div className="grid grid-cols-1 mx-auto my-4 gap-20 lg:grid-cols-3">
            <div className="h-60 rounded-2xl border-2 border-primary text-center text-wrap">
              <div className="h-40 w-50 border-2 mx-auto mt-5 border-primary ">
                {/* <img src="" alt="" /> */}
              </div>
              <h2 className="text-primary text-2xl font-medium">Meal Name</h2>
            </div>
            <div className="h-60 rounded-2xl border-2 border-primary flex flex-col items-center justify-center text-wrap">
              <div className="h-40 w-50 border-2 mx-auto mt-5 border-primary ">
                {/* <img src="" alt="" /> */}
              </div>
              <h2 className="text-primary text-2xl font-medium">Meal Name</h2>
            </div>
            <div className="h-60 rounded-2xl border-2 border-primary flex flex-col items-center justify-center text-wrap">
              <div className="h-40 w-50 border-2 mx-auto mt-5 border-primary ">
                {/* <img src="" alt="" /> */}
              </div>
              <h2 className="text-primary text-2xl font-medium">Meal Name</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}