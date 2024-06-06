"use client";

import {
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface SearchContextInterface {
  searchPhrase: string;
  setSearchPhrase: React.Dispatch<SetStateAction<string>>;
}

export const SearchContext = createContext<SearchContextInterface | null>(null);

export default function SearchContextProvider({ children }: PropsWithChildren) {
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchPhrase,
        setSearchPhrase,
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
