type SortOptionsProps = {
  sortOption: string;
  onSortChange: (option: string) => void;
};

export const SortOptions = ({ sortOption, onSortChange }: SortOptionsProps) => {
  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <label
          htmlFor="sort"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Sort by due date
        </label>
        <select
          // id="sort"
          value={sortOption}
          onChange={(e) => onSortChange(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
        >
          <option value="newest">Newest added</option>
          <option value="oldest">Oldest added</option>
          <option value="due-asc">Due Soonest</option>
          <option value="due-desc">Due Latest</option>
          <option value="titleAsc">Title A–Z</option>
          <option value="titleDesc">Title Z–A</option>
        </select>
      </div>
    </>
  );
};
