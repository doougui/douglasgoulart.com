import { useForm } from 'hooks/useForm';
import { ParsedUrlQueryInput } from 'querystring';
import React from 'react';
import { SortTypes, SortTypesKeys } from 'utils/mdx/writings/types';
import * as S from './styles';

type Values = ParsedUrlQueryInput;

type FilterProps = {
  search: string | null;
  tag: string | null;
  sort: SortTypesKeys;
  sortOptions: SortTypes;
  onFilter: (values: Values) => void;
};

export function Filter({
  search,
  sort,
  sortOptions,
  tag,
  onFilter,
}: FilterProps) {
  const {
    values,
    handleInput,
    formState: { isDirty },
  } = useForm<Values>({
    initialValues: {
      sort,
      search,
      tag,
    },
  });

  React.useEffect(() => {
    if (!isDirty) return;
    const filledValues = Object.fromEntries(
      Object.entries(values).filter(([, value]) => !!value),
    );
    onFilter(filledValues);
    // This method comes from another template that we don't have access
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <S.Container>
      <S.Order>
        <S.OrderText>
          Order by:{' '}
          <S.SelectedOrder
            name="sort"
            data-testid="select-order"
            aria-label="Select order"
            role="listbox"
            defaultValue={sort}
            onChange={(e) => handleInput('sort', e.target.value)}
          >
            {Object.entries(sortOptions).map(([key, value]) => (
              <option value={key} key={key}>
                {value}
              </option>
            ))}
          </S.SelectedOrder>
        </S.OrderText>
      </S.Order>
      <S.SearchInput
        name="search"
        placeholder="Search writings"
        onInputChange={(v: string) => handleInput('search', v)}
        initialValue={search ?? undefined}
      />
    </S.Container>
  );
}
