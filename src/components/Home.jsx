import NavigationalBar from "./NavigationalBar";



export default function Home() {
  return (
    <>
    <NavigationalBar />

    <div className="text-center mt-10">
      <h1 className="text-4xl font-bold">Welcome to Dish It.</h1>
      <p className="">“Your personal recipe companion”</p>
      <p className="mt-3 mx-5">
        Whether you’re craving something new or want to recreate a classic, Dish It makes it easy to find, learn, and enjoy meals from all cuisines — all in one place.
      </p>

    </div>
    </>
  )
}