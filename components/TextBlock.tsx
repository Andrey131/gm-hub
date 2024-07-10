import Link from "next/link";
import { RaceType } from "@/store/data";
import { Spoiler } from "./Spoiler";
import { RaceContentType } from "@/store/data";

type Props = {
  blockType: string;
  title: string;
  body: string | RaceContentType[];
};

const TextBlock = (props: Props) => {
  switch (props.blockType) {
    case "common":
      return (
        <div className="flex flex-col rounded-md p-1 m-1 mt-2 leading-snug">
          <span className="border-b border-smallTitle text-title font-bold mb-1">
            {props.title}
          </span>
          <span dangerouslySetInnerHTML={{ __html: props.body }} />
        </div>
      );
    case "note":
      return (
        <div className="flex flex-col bg-tables rounded-md p-2 m-4 leading-snug">
          <span className="mb-1 font-bold text-title">{props.title}</span>
          <span dangerouslySetInnerHTML={{ __html: props.body }} />
        </div>
      );
    case "spoiler":
      return <Spoiler title={props.title} content={props.body} />;
    default:
      return <></>;
  }
};

export { TextBlock };
