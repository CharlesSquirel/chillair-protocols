"use client";

import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export type Order = "desc" | "asc";

interface SearchContextInterface {
  searchPhrase: string;
  setSearchPhrase: React.Dispatch<SetStateAction<string>>;
  order: Order;
  setOrder: React.Dispatch<SetStateAction<Order>>;
}

export const SearchContext = createContext<SearchContextInterface | null>(null);

export default function SearchContextProvider({ children }: PropsWithChildren) {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [order, setOrder] = useState<Order>("desc");

  return (
    <SearchContext.Provider
      value={{
        searchPhrase,
        setSearchPhrase,
        order,
        setOrder,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("Search Context is null!");
  }
  return context;
};
