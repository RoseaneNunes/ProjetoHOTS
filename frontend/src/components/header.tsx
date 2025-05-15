import { SquareUserIcon, User2Icon } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@/context/contextAuth";
import { useRouter } from "next/router";


export function Header() {

    const router = useRouter(); 
    const ContextAuth = useAuth();

    
async function handleToggleLogOut() {
    ContextAuth.logout();
    window.localStorage.clear();
    await router.push("/");
    
  }
  return (
    <section className="bg-[#f2f7f5] flex h-[6vh] relative items-center w-screen rounded-2xl">
      <DropdownMenu>
        <DropdownMenuTrigger className="text-neutral-900 border-4 absolute right-[3vw] border-[#faae2b] rounded-full"><Avatar><AvatarFallback><User2Icon color="#faae2b"/></AvatarFallback></Avatar></DropdownMenuTrigger>
        <DropdownMenuContent className=" ">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator>
            <DropdownMenuItem onClick={handleToggleLogOut}>Logout </DropdownMenuItem>
          </DropdownMenuSeparator>
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
}
