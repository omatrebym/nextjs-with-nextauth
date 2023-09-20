"use client";

import { PktHeader } from "@oslokommune/punkt-react";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <PktHeader
      fixed
      user={
        session?.user && {
          name: session?.user?.name ?? "Ikke innlogget",
          shortname:
            session?.user?.name
              ?.split(" ")
              .reduce((prev, curr) => prev + curr[0].toLocaleLowerCase()) ??
            "NN",
        }
      }
      logOut={() => signOut()}
      showLogOutButton={session?.user !== undefined}
      serviceName="Klagebehandling"
      canChangeRepresentation={false}
      logoLink={process.env.CLIENT_BASE_URL}
    />
  );
}
