import recipeImage from '/recipe.png';
import measurementImage from '/measurement.png';
import videoImage from '/ytvid.png';
import favImage from '/favorite.png';
import simpleImage from '/simple.png';
import recipe2Image from '/recipe2.png';

export default function About() {
  return (
    <>
      <hr className="border-8 border-primary" />
      <section className="h-full w-screen flex justify-center bg-[#F5E1DA]/50">
        <div className="container mt-7 ">
          <div className="text-center">
            <h1 className="text-primary text-5xl font-bold text-center">Our Features</h1>
            <p className="text-sm text-primary">Our primary features</p>
          </div>
          
          <div className="grid grid-cols-1 gap-15 mx-10 md:grid-cols-2 lg:grid-cols-3">
            <div className="h-80 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={recipeImage} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Recipe Instructions</h2>
              <p className="text-primary text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat et quasi ea. Eum libero blanditiis enim! Nam aspernatur laborum iusto sequi rerum vitae, maiores voluptatum commodi! Eaque distinctio dolore aliquam.
              </p>
            </div>
            <div className="h-80 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={measurementImage} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Recipe Measurement</h2>
              <p className="text-primary text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat et quasi ea. Eum libero blanditiis enim! Nam aspernatur laborum iusto sequi rerum vitae, maiores voluptatum commodi! Eaque distinctio dolore aliquam.
              </p>
            </div>
            <div className="h-80 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={videoImage} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Video Instructions</h2>
              <p className="text-primary text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat et quasi ea. Eum libero blanditiis enim! Nam aspernatur laborum iusto sequi rerum vitae, maiores voluptatum commodi! Eaque distinctio dolore aliquam.
              </p>
            </div>
            <div className="h-80 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={favImage} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Add Favorites</h2>
              <p className="text-primary text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat et quasi ea. Eum libero blanditiis enim! Nam aspernatur laborum iusto sequi rerum vitae, maiores voluptatum commodi! Eaque distinctio dolore aliquam.
              </p></div>
            <div className="h-80 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={recipe2Image} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Simple</h2>
              <p className="text-primary text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat et quasi ea. Eum libero blanditiis enim! Nam aspernatur laborum iusto sequi rerum vitae, maiores voluptatum commodi! Eaque distinctio dolore aliquam.
              </p>
            </div>
            <div className="h-80 rounded-2xl flex flex-col items-center justify-center text-wrap">
              <img src={simpleImage} alt="" className='h-25'/>
              <h2 className="text-primary text-2xl font-bold text-center">Easy to understand</h2>
              <p className="text-primary text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat et quasi ea. Eum libero blanditiis enim! Nam aspernatur laborum iusto sequi rerum vitae, maiores voluptatum commodi! Eaque distinctio dolore aliquam.
              </p>
            </div>
          </div>
        </div>


      </section>


    </>
  )
}