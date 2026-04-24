import { TagType } from "@/store/data";

type Props = {
  name: string;
  description: string;
  tags: TagType[];
  prerequisites: Record<string, string> | null;
  level: number;
};

const Feat = (props: Props) => {
  return (
    <div className="flex flex-col rounded-md p-1 m-1 mt-2 leading-snug z-10">
      <span className="border-b border-smallTitle text-title font-bold mb-1">
        {props.name}
      </span>
      <div className="flex flex-wrap gap-1">
        {props.tags.map((tag: TagType, index) => {
          let bgColor = "bg-red-900"; // по умолчанию
          if (tag.name === "Необычный") bgColor = "bg-yellow-700";
          if (tag.name === "Редкий") bgColor = "bg-blue-600";
          return (
            <span
              key={index}
              className={`w-fit border border-smallTitle ${bgColor} text-white pr-1 pl-1 text-title font-bold mb-1`}
            >
              {tag.name}
            </span>
          );
        })}
      </div>
      <span dangerouslySetInnerHTML={{ __html: props.description }} />
      {props.prerequisites != null && (
        <span className="mt-1">
          <span className="font-bold">Требования:</span>{" "}
          {props.prerequisites.other}
        </span>
      )}
    </div>
  );
};

export { Feat };
