"use client";

import { PktButton } from "@oslokommune/punkt-react";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session?.user)
    return (
      <div className="bym-flex bym-flex-col bym-w-full bym-justify-center bym-gap-5">
        <p className="bym-text-center bym-w-72 bym-mx-auto bym-mt-32">
          Dette er verktøyet for saksbehandling av klager i Oslo kommune. Trykk
          på knappen for å logge inn.
        </p>
        <PktButton onClick={() => signIn()} className="bym-m-auto">
          Logg inn
        </PktButton>
      </div>
    );

  return <div>hei</div>;
}
