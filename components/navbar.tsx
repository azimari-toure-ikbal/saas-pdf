import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import MobileNav from "./mobile-nav";
import { buttonVariants } from "./ui/button";
import UserAccountNav from "./user-account-nav";

type NavbarProps = {};

const Navbar: FC<NavbarProps> = ({}) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-zinc-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href={"/"} className="z-40 flex font-semibold">
            <span>TalkPDF.</span>
          </Link>

          <MobileNav isAuth={!!user} />

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link
                  href={"/pricing"}
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Tarifs
                </Link>
                <LoginLink
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Connexion
                </LoginLink>
                <RegisterLink
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Inscription <ArrowRight className="ml-2 h-5 w-5" />
                </RegisterLink>
              </>
            ) : (
              <>
                <Link
                  href={"/dashboard"}
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>

                <UserAccountNav
                  name={
                    !user.given_name || !user.family_name
                      ? "Votre compte"
                      : `${user.given_name} ${user.family_name}`
                  }
                  email={user.email ?? ""}
                  imgUrl={user.picture ?? ""}
                />
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
