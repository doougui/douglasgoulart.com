import React from 'react';

type UseInfiniteScrollData<DataType> = {
  data: DataType[];
  perPage: number;
};

export function useInfiniteScroll<DataType>({
  data,
  perPage,
}: UseInfiniteScrollData<DataType>) {
  const [count, setCount] = React.useState({
    prev: 0,
    next: perPage,
  });
  const [hasMore, setHasMore] = React.useState(true);
  const [current, setCurrent] = React.useState(
    data.slice(count.prev, count.next),
  );

  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }

    setCurrent(
      current.concat(data.slice(count.prev + perPage, count.next + perPage)),
    );

    setCount((prevState) => ({
      prev: prevState.prev + perPage,
      next: prevState.next + perPage,
    }));
  };

  return { getMoreData, hasMore, current };
}
