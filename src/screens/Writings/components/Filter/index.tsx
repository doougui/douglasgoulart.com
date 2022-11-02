import { useForm } from 'hooks/useForm';
import { ParsedUrlQueryInput } from 'querystring';
import React from 'react';
import { SortTypes, SortTypesKeys } from 'utils/mdx/getFilesFrontmatter';
import * as S from './styles';

type Values = ParsedUrlQueryInput;

type FilterProps = {
  sort: SortTypesKeys;
  sortOptions: SortTypes;
  onFilter: (values: Values) => void;
};

export function Filter({ sort, sortOptions, onFilter }: FilterProps) {
  const { values, handleInput } = useForm({
    initialValues: {
      sort,
    },
  });

  React.useEffect(() => {
    onFilter(values);
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
      <S.SearchInput placeholder="Search writings" />
    </S.Container>
  );
}
