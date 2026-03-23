"use client";

import React, { useState } from "react";
import { RaceType } from "@/store/data";
import { TextBlock } from "@/components/TextBlock";
import { RaceContentType } from "@/store/data";
import { RacePageForm } from "@/components/RacePageForm";
import Image from "next/image";

type Props = {
  race: RaceType;
};

export default function ClientRacePage({ race }: Props) {
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [isPreview, setIsPreview] = useState<boolean>(false);

  return (
    <div>
      {isEdited ? (
        <>
          {isPreview ? (
            <>
              <button
                className="fixed top-2 right-2 text-2xl border-b-4 border-titleLine font-bold text-title bg-smallTitle p-1 rounded-md hover:bg-footerDeco"
                onClick={() => {
                  setIsPreview(false);
                }}
              >
                Close Preview
              </button>
              <h1 className="text-2xl border-b-4 border-titleLine font-bold text-title">
                <b>{race.name}</b>
              </h1>
              {race.content.map((block: RaceContentType, index) => (
                <TextBlock
                  key={index}
                  blockType={block.blockType}
                  title={block.title}
                  body={block.body}
                />
              ))}
            </>
          ) : (
            <button
              className="fixed top-2 right-2 text-2xl border-b-4 border-titleLine font-bold text-title bg-smallTitle p-1 rounded-md hover:bg-footerDeco"
              onClick={() => {
                setIsPreview(true);
              }}
            >
              Look Preview
            </button>
          )}
          <RacePageForm race={race} />
        </>
      ) : (
        <div className="relative flex flex-col justify-between">
          <div className="absolute -z-5 top-5 right-5">
            <Image
              src={race.backgroundImage}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <h1 className="text-2xl border-b-4 border-titleLine font-bold text-title z-10">
            <b>{race.name}</b>
          </h1>
          {race.content.map((block: RaceContentType, index) => (
            <TextBlock
              key={index}
              blockType={block.blockType}
              title={block.title}
              body={block.body}
            />
          ))}
        </div>
      )}
      {isEdited ? (
        <button
          className="fixed top-16 right-2 text-2xl border-b-4 border-titleLine font-bold text-title bg-smallTitle p-1 rounded-md hover:bg-footerDeco"
          onClick={() => {
            setIsEdited(false);
          }}
        >
          Save
        </button>
      ) : (
        <button
          className="fixed top-16 right-2 text-2xl border-b-4 border-titleLine font-bold text-title bg-smallTitle p-1 rounded-md hover:bg-footerDeco"
          onClick={() => {
            setIsEdited(true);
          }}
        >
          Edit
        </button>
      )}
    </div>
  );
}
