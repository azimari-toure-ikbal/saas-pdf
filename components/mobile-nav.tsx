"use client";

import { ArrowRight, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

type MobileNavProps = {
  isAuth: boolean;
};

const MobileNav: FC<MobileNavProps> = ({ isAuth }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  const path = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [path]);

  const closeOnCurrent = (href: string) => {
    if (path === href) toggleOpen();
  };

  return (
    <div className="sm:hidden">
      <Menu
        onClick={toggleOpen}
        className="relative z-50 h-5 w-5 text-primary"
      />
      {isOpen ? (
        <div className="fixed inset-0 z-0 w-full animate-in fade-in-20 slide-in-from-top-5">
          <ul className="absoulte grid w-full gap-3 border-b border-zinc-200 bg-white px-10 pb-8 pt-20 shadow-xl">
            {!isAuth ? (
              <>
                <li>
                  <Link
                    href={"/sign-up"}
                    onClick={() => closeOnCurrent("/sign-up")}
                    className="flex w-full items-center font-semibold text-primary"
                  >
                    Inscription <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    href={"/sign-in"}
                    onClick={() => closeOnCurrent("/sign-in")}
                    className="flex w-full items-center font-semibold"
                  >
                    Connexion
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    href={"/pricing"}
                    onClick={() => closeOnCurrent("/pricing")}
                    className="flex w-full items-center font-semibold"
                  >
                    Tarifs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href={"/dashboard"}
                    onClick={() => closeOnCurrent("/dashboard")}
                    className="flex w-full items-center font-semibold"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="my-3 h-px w-full bg-gray-300" />
                <li>
                  <Link
                    href={"/sign-out"}
                    className="flex w-full items-center font-semibold text-rose-700"
                  >
                    Déconnexion
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
