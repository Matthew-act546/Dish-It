import { faEarthAsia } from "@fortawesome/free-solid-svg-icons";
import NavigationalBar from "./NavigationalBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CountryDish() {
  return (
    <>
      <NavigationalBar />
      <section className="w-full">
        <div className="mt-15 flex justify-center">
          <div>
            <div className="flex justify-center ">
              <FontAwesomeIcon icon={faEarthAsia} className="text-primary text-[5rem] w-full" /> 
            </div>
            
            <h1 className="text-6xl rt-1 font-bold leading-16 text-primary">Country Dish</h1>
            <p className="text-center">list of the country dishes</p>
          </div>

        </div>
      </section>
    </>
  )
}