import Dashboard from "@/components/dashboard";
import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { FC } from "react";

type DashboardPageProps = {};

const DashboardPage: FC<DashboardPageProps> = async ({}) => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  if (!user || !user.id) redirect("/auth-callback?origin=dashboardpage");

  // Make sure user is synced with database
  const dbUser = await db.user.findFirst({
    where: {
      id: user.id,
    },
  });

  if (!dbUser) redirect("/auth-callback?origin=dashboardpage");

  return <Dashboard />;
};

export default DashboardPage;
