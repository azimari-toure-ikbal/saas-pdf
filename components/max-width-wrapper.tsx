import { cn } from "@/lib/utils";
import { FC } from "react";

type MaxWidthWrapperProps = {
  classname?: string;
  children: React.ReactNode;
};

const MaxWidthWrapper: FC<MaxWidthWrapperProps> = ({ classname, children }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        classname,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
