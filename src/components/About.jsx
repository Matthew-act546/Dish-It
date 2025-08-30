import recipeImage from '/recipe.png';
import measurementImage from '/measurement.png';
import videoImage from '/ytvid.png';
import favImage from '/favorite.png';
import recipe2Image from '/recipe2.png';

export default function About() {
  return (
    <>
      <hr className="border-8 border-primary" />
      <section className="h-full flex justify-center bg-[#F5E1DA]/50">
        <div className="container mt-7 ">
          <div className="text-center">
            <h1 className="text-primary text-5xl font-bold text-center">Our Features</h1>
            <p className="text-sm text-primary">Our primary features</p>
          </div>
          
          <div className="grid grid-cols-1 gap-2 mx-10 md:grid-cols-3 lg:grid-cols-3">
            <div className="my-9 lg:my-15 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={recipeImage} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Recipe Instructions</h2>
              <p className="text-primary text-center">
                In dish it we have a set of instructions for you to follow.
              </p>
            </div>
            <div className="my-9 lg:my-15 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={measurementImage} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Recipe Measurement</h2>
              <p className="text-primary text-center">
                Not just that we indicate the measurement too!
              </p>
            </div>
            <div className="my-9 lg:my-15 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={videoImage} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Video Instructions</h2>
              <p className="text-primary text-center">
                We do have a youtube videos here!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1  mx-10 md:grid-cols-2 lg:grid-cols-2">
            <div className="my-9 lg:my-15 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={favImage} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Add Favorites</h2>
              <p className="text-primary text-center">
                You can add favorites to save your the dish you like!
              </p>
            </div>
            <div className="my-9 lg:my-15 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={recipe2Image} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Simple & Easy to understand</h2>
              <p className="text-primary text-center">
                Dish it. Designed to become easy and simple to understand ensuring everyone can make dish! (even your 5yr old child can do dish it!)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}