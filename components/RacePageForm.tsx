"use client";

import React, { useState } from "react";
import { RaceType } from "@/store/data";
import { TextBlock } from "@/components/TextBlock";
import { RaceContentType } from "@/store/data";

type Props = {
  race: RaceType;
};

const RacePageForm = ({ race }: Props) => {
  return (
    <div>
      <h1 className="text-2xl border-b-4 border-titleLine font-bold text-title">
        <b>{race.name}</b>
      </h1>
      {race.content.map((block: RaceContentType, index) => (
        <>
          <TextBlock
            key={index}
            blockType={block.blockType}
            title={block.title}
            body={block.body}
          />
        </>
      ))}
    </div>
  );
};

export { RacePageForm };
