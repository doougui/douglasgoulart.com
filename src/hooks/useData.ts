import React from 'react';

export function useData<ResponseType = unknown>(url: string) {
  const [state, setState] = React.useState<ResponseType | undefined>();

  React.useEffect(() => {
    const dataFetch = async () => {
      try {
        const data: ResponseType = await (await fetch(url)).json();
        setState(data);
      } catch (e) {
        setState(undefined);
      }
    };

    dataFetch();
  }, [url]);

  return { data: state };
}
