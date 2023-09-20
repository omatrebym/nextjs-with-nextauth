"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session?.user) router.push("/logginn");

  return (
    <div className="tw-flex tw-flex-col tw-w-full tw-justify-center tw-gap-5">
      hei
    </div>
  );
}
