export default function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex justify-center items-center gap-2 mt-6">
      <button
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-1 rounded text-sm ${
            currentPage === i + 1
              ? "bg-indigo-600 text-white"
              : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}