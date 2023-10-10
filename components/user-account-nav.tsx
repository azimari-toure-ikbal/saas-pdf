import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { Gem } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Icons } from "./icons";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type UserAccountNavProps = {
  email: string | undefined;
  imgUrl: string;
  name: string;
};

const UserAccountNav: FC<UserAccountNavProps> = ({ email, imgUrl, name }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="ring-0 focus-visible:ring-0">
        <Button className="aspect-square h-8 w-8 rounded-full bg-slate-400">
          <Avatar className="relative h-8 w-8">
            {imgUrl ? (
              <div className="relative aspect-square h-full w-full">
                <Image
                  fill
                  src={imgUrl}
                  alt="profile picture"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : (
              <AvatarFallback>
                <span className="sr-only">{name}</span>
                <Icons.user className="h-4 w-4 text-zinc-900" />
              </AvatarFallback>
            )}
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            {name && <p className="text-sm font-medium text-black">{name}</p>}
            {email && (
              <p className="w-[200px] truncate text-xs text-zinc-700">
                {email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href={"/dashboad"}>Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href={"/dashboad"}>Gérer votre abonnement</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
          <Link href={"/dashboad"}>
            Membre Pro <Gem className="ml-1.5 h-4 w-4 text-blue-600" />
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <LogoutLink className="text-rose-700">Déconnexion</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
