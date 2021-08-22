import { createContext, ReactNode } from 'react';
import { useLocalObservable } from 'mobx-react';

interface ProviderProps {
  children: ReactNode;
}

export function createProvider<T>(StoreClass: new () => T) {
  const Context = createContext<T | null>(null);

  const Provider = ({ children }: ProviderProps) => {
    const store = useLocalObservable(() => new StoreClass());
    return (
      <Context.Provider value={store}>
        {children}
      </Context.Provider>
    );
  }

  return {
    Context,
    Provider,
  };
}