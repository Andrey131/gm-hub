import { FeatType } from "@/store/data";
import { Feat } from "@/components/Feat";
import React from "react";

interface FeatListProps {
  feats: FeatType[];
}

const FeatsList = ({ feats }: FeatListProps) => {
  const SPECIAL_LEVELS = [1, 5, 9, 13, 17];

  const grouped = feats.reduce<Record<number, FeatType[]>>((acc, feat) => {
    acc[feat.level] = acc[feat.level] || [];
    acc[feat.level].push(feat);
    return acc;
  }, {});

  const sortedFeats = Object.keys(grouped)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <>
      {sortedFeats.map((level) => {
        const featsOfLevel = grouped[level];
        const isSpecial = SPECIAL_LEVELS.includes(level);

        return (
          <React.Fragment key={level}>
            {isSpecial && (
              <div className="bg-blue-900 text-white font-bold text-xl uppercase py-2 px-4 mt-8 w-full [clip-path:polygon(0%_0%,_100%_0%,_95%_100%,_0%_100%)]">
                Уровень {level}
              </div>
            )}
            {featsOfLevel.map((feat, index) => (
              <Feat
                key={index}
                name={feat.name}
                description={feat.description}
                tags={feat.tags}
                prerequisites={feat.prerequisites}
                level={feat.level}
              />
            ))}
          </React.Fragment>
        );
      })}
    </>
  );
};

export { FeatsList };
