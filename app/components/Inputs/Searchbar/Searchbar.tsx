import SearchIcon from "@/assets/icons/SearchIcon";

export default function Searchbar() {
  return (
    <div className="relative">
      <label
        htmlFor="search"
        className="absolute m-[-1px] h-[1px] w-[1px] overflow-hidden border-0 p-0"
      >
        Wyszukaj
      </label>
      <SearchIcon className="absolute right-6 top-[50%] translate-y-[-50%]" />
      <input
        autoComplete="off"
        type="text"
        placeholder="Wyszukaj..."
        name="search"
        id="search"
        className="h-[50px] w-[400px] rounded-full border border-secondary pl-4 text-xl  text-secondary outline-none focus:border-[3px] focus:border-primary md:h-[62px] min-[1180px]:w-[558px]"
      />
    </div>
  );
}
