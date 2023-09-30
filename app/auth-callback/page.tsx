"use client";

import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { trpc } from "../_trpc/client";

type AuthCallbackProps = {};

const AuthCallback: FC<AuthCallbackProps> = ({}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  trpc.authCallback.useQuery(undefined, {
    onSuccess: (success) => {
      if (success) router.push(origin ? `/${origin}` : "/dashboard");
    },
    onError: (err) => {
      if (err.data?.code === "UNAUTHORIZED") router.push("/sign-in");
    },
    retry: true,
    retryDelay: 500,
  });

  return (
    <div className="flex w-full justify-center pt-24">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-800" />
        <h3 className="text-xl font-semibold">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default AuthCallback;
