"use client";

import { PktHeader } from "@oslokommune/punkt-react";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <PktHeader
      fixed
      user={{
        name: session?.user?.name ?? "Ikke innlogget",
        shortname:
          session?.user?.name
            ?.split(" ")
            .reduce((prev, curr) => prev + curr[0].toLocaleLowerCase()) ?? "NN",
      }}
      logOut={() => signOut()}
      showLogOutButton
      serviceName="Klagebehandling"
      canChangeRepresentation={false}
    />
  );
}
