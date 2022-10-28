import { FormMessageTypes } from 'components/FormMessage';
import React from 'react';

type UseFormData<T> = {
  initialValues: T;
};

type Message = {
  type: FormMessageTypes;
  content: string;
};

export function useForm<T>({ initialValues }: UseFormData<T>) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [values, setValues] = React.useState<T>(initialValues);
  const [message, setMessage] = React.useState<Message | null>(null);

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }));
  };

  const handleSubmit =
    (handler: (data: T) => Promise<void>) =>
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      await handler(values);
      setIsLoading(false);
    };

  return { values, handleInput, message, isLoading, setMessage, handleSubmit };
}
