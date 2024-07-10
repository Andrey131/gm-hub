"use client";

import React, { useState } from "react";

type Props = {
  title: string;
  content: string;
};

const Spoiler = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="flex flex-col bg-back2 rounded-md m-2 leading-snug">
      <div
        className="cursor-pointer p-2 text-title font-bold"
        onClick={() => {
          isActive ? setIsActive(false) : setIsActive(true);
        }}
      >
        {title}
      </div>
      <div
        className={(isActive ? ` ` : `hidden `) + `bg-back2 p-1 m-1`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

export { Spoiler };
