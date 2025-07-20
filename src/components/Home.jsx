import NavigationalBar from "./NavigationalBar";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <>
    <NavigationalBar />

    <div className="mx-5">
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Welcome to Dish It.</h1>
        <p className="">“Your personal recipe companion”</p>
        <p className="mt-3 mx-5">
          Whether you’re craving something new or want to recreate a classic, Dish It makes it easy to find, learn, and enjoy meals from all cuisines — all in one place.
        </p>
        <Button className={"mt-3"}>Browse Food</Button>

        <div>
          <h1 className="text-2xl ml-5 text-start mt-3 font-bold">Popular Dishes</h1>
          <div className="grid grid-cols-3 gap-10 my-3 mx-3"> 
            <div>
              <Card className="p-5">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptas rem, eveniet praesentium fugiat, neque omnis quam voluptatum commodi dignissimos iusto ex explicabo tempore doloribus ducimus reiciendis. Eum vel doloribus iusto architecto repellat! Incidunt sapiente neque aut ex? Accusantium excepturi debitis molestias iste aut quod at ratione nemo sed laborum voluptatem minus adipisci nobis dolore cupiditate quibusdam laboriosam, distinctio voluptate?</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="p-5">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia voluptas rem, eveniet praesentium fugiat, neque omnis quam voluptatum commodi dignissimos iusto ex explicabo tempore doloribus ducimus reiciendis. Eum vel doloribus iusto architecto repellat! Incidunt sapiente neque aut ex? Accusantium excepturi debitis molestias iste aut quod at ratione nemo sed laborum voluptatem minus adipisci nobis dolore cupiditate quibusdam laboriosam, distinctio voluptate?</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>

            <div>
              <Card className="p-5">
                <CardHeader>
                  <CardTitle>Card Title</CardTitle>
                  <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, eveniet aut. Corrupti cumque aliquid laborum adipisci iusto quam, pariatur veniam, eligendi nemo praesentium, perspiciatis in vitae expedita maiores? Atque aspernatur repudiandae rem ducimus minima consequuntur itaque libero minus incidunt pariatur commodi est numquam dolor nulla animi necessitatibus blanditiis, quam fugiat ipsam autem corporis! Dolores voluptas consequuntur consequatur ut dolorem temporibus!</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}