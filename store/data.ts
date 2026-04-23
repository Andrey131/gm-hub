export type RaceType = {
  id: string;
  name: string;
  backgroundImage: string;
  content: RaceContentType[];
  feats: FeatType[];
  heritages: HeritageType[];
};

export type RacePreviewType = {
  id: string;
  name: string;
  previewImage: string;
};

export type RaceContentType = {
  blockType: string;
  title: string;
  body: string | RaceContentType[];
};

export type FeatType = {
  name: string;
  description: string;
  tags: TagType[];
  prerequisites: Record<string, string> | null;
  level: number;
};

export type HeritageType = {
  name: string;
  description: string;
  tags: TagType[];
};

export type TagType = {
  name: string;
  description: string;
};

export interface WithId {
  id: string;
}
