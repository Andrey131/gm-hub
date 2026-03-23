"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RaceType, RacePreviewType } from "@/store/data";
import Image from "next/image";

type Props = {
  race: RacePreviewType;
};

const PreviewCard = ({ race }: Props) => {
  const [image, setIsEdited] = useState<string>("");

  return (
    <Link
      href={`/race/${race.name}`}
      className="flex overflow-hidden relative flex-row bg-footerDeco hover:bg-smallTitle rounded-md h-20 min-w-48 p-1 m-1 text-gray-700"
    >
      <div className="flex flex-row justify-between">
        <span className="font-bold">{race.name}</span>
        <span className="absolute -top-3 -right-6">
          <Image
            src={race.previewImage}
            alt="Picture of the author"
            width={150}
            height={150}
          />
        </span>
      </div>
    </Link>
  );
};

export { PreviewCard };
