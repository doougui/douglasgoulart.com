export enum SortTypes {
  new = 'New',
  name = 'Name',
}

export type SortTypesKeys = keyof typeof SortTypes;

export type Filters = {
  search?: string;
  tag?: string;
  isDraft?: boolean;
};

export type GetWritingsData = {
  sort?: SortTypesKeys;
  max?: number;
  filters?: Filters;
};
