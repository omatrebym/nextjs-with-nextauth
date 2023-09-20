"use client";

import { PktButton } from "@oslokommune/punkt-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoggInn() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user) router.push("/");

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-justify-center tw-gap-5">
      <p className="tw-text-center tw-w-72 tw-mx-auto tw-mt-32">
        Dette er verktøyet for saksbehandling av klager i Oslo kommune. Trykk på
        knappen for å logge inn.
      </p>
      <PktButton onClick={() => signIn()} className="tw-m-auto">
        Logg inn
      </PktButton>
    </div>
  );
}
