import * as S from './styles';

export function Filter() {
  const orders: string[] = ['New', 'Top', 'Hot'];

  return (
    <S.Container>
      <S.Order>
        <S.OrderText>
          Order by:{' '}
          <S.SelectedOrder
            data-testid="select-order"
            aria-label="Select order"
            role="listbox"
          >
            {orders.map((order, index) => (
              <option key={`${order}-${String(index)}`}>{order}</option>
            ))}
          </S.SelectedOrder>
        </S.OrderText>
      </S.Order>
      <S.SearchInput placeholder="Search articles" />
    </S.Container>
  );
}
