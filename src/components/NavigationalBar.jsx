import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogTrigger,
  DialogContent
} from "@/components/ui/dialog"
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem
} from "@/components/ui/command"

export default function NavigationalBar() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto flex items-center justify-between py-4">
        <h1 className="text-xl font-bold  d cursor-pointer">Dish It.</h1>
        
        <div>
          <Dialog>
            <DialogTrigger>
              <button className=" rounded border-2 text-start h-10 p-2 border-gray-600 w-80">Search</button>
            </DialogTrigger>
            <DialogContent className="p-0 overflow-hidden">
              <Command>
                <CommandInput placeholder="Type to search..." />
                <CommandList>
                  <CommandItem>Home</CommandItem>
                  <CommandItem>Profile</CommandItem>
                  <CommandItem>Logout</CommandItem>
                </CommandList>
              </Command>
            </DialogContent>
          </Dialog>
        </div>

        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="text-sm font-medium hover:underline">Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/meals" className="text-sm font-medium hover:underline">Meals</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="text-sm font-medium hover:underline">About</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
