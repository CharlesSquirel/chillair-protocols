import Search from "./icons/Search";

export default function Searchbar() {
  return (
    <label className="input input-border border-2 h-[62px] rounded-full placeholder:pl-3 border-secondary">
      <Search />
      <input
        type="text"
        placeholder="Wyszukaj..."
        name="search"
        className="grow"
      />
    </label>
  );
}
