import React from 'react';

export async function useData(url: string) {
  const [state, setState] = React.useState();

  React.useEffect(() => {
    const dataFetch = async () => {
      const data = await (await fetch(url)).json();

      setState(data);
    };

    dataFetch();
  }, [url]);

  return { data: state };
}
