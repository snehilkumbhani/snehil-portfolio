import { useState } from "react";

export default function SearchSort({ onSearch, onSort }) {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("latest");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 items-center my-6">
      <input
        type="text"
        placeholder="Search projects..."
        value={query}
        onChange={handleSearch}
        className="w-full sm:w-1/2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      />

      <select
        value={sort}
        onChange={handleSort}
        className="w-full sm:w-auto px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
      >
        <option value="latest">Latest</option>
        <option value="oldest">Oldest</option>
        <option value="az">A - Z</option>
        <option value="za">Z - A</option>
      </select>
    </div>
  );
}