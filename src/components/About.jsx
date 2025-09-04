import recipeImage from '/recipe.png';
import measurementImage from '/measurement.png';
import videoImage from '/ytvid.png';
import favImage from '/favorite.png';
import recipe2Image from '/recipe2.png';

export default function About() {
  return (
    <>
      <hr className="border-5 border-primary" />
      <section className="h-full flex justify-center bg-[#F5E1DA]/50">
        <div className="container mt-7 ">
          <div className="text-center">
            <h1 className="text-primary text-5xl font-bold text-center">Our Features</h1>
            <p className="text-sm text-primary">Our primary features</p>
          </div>
          
          <div className="grid sm:gap-0 grid-cols-1 gap-5 mx-10 md:grid-cols-3 lg:grid-cols-3">
            <div className="my-10 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={recipeImage} alt="" className='h-25'/>
              <h2 className="text-primary text-3xl font-bold leading-12 text-center rt-2">Recipe Instructions</h2>
              <p className="text-primary text-center leading-6.5 rp-2 lg:px-15">
                Dish It provides clear, step-by-step instructions to guide you through every recipe. Whether you’re a beginner or a pro, our detailed directions make cooking stress-free and enjoyable.
              </p>
            </div>
            <div className="my-10 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={measurementImage} alt="" className='h-25'/>
              <h2 className="text-primary font-bold leading-10 rt-2 text-center">Recipe Measurement</h2>
              <p className="text-primary text-center leading-6.5 rp-2 lg:px-15">
                No more guessing! We include accurate ingredient measurements so your dishes come out perfect every time. Just follow the quantities, and you’re good to go.
              </p>
            </div>
            <div className="my-10 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={videoImage} alt="" className='h-25'/>
              <h2 className="text-primary font-bold leading-10 rt-2 text-center">Video Instructions</h2>
              <p className="text-primary text-center leading-6.5 rp-2 lg:px-15">
                Prefer visual learning? Dish It offers YouTube video tutorials for each recipe, making it easier for you to follow along and cook with confidence.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1  mx-10 md:grid-cols-2 lg:grid-cols-2">
            <div className="my-10 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={favImage} alt="" className='h-25'/>
              <h2 className="text-primary font-bold leading-10 rt-2 text-center">Add Favorites</h2>
              <p className="text-primary text-center leading-6.5 rp-2 lg:px-15">
                Found a recipe you love? Save it in your favorites for quick access anytime. Your go-to dishes will always be just one tap away.
              </p>
            </div>
            <div className="my-10 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={recipe2Image} alt="" className='h-25'/>
              <h2 className="text-primary font-bold leading-10 rt-2 text-center">Simple & Easy to understand</h2>
              <p className="text-primary text-center leading-6.5 rp-2 lg:px-15">
                Cooking shouldn’t be complicated. Dish It is designed to be simple and beginner-friendly, so anyone can create delicious meals with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}