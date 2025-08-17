export default function Resume() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Resume
      </h2>
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300">
        You can view or download my resume below.
      </p>
      <div className="mt-6 flex gap-4">
        {/* View Button */}
        <a
          href="/Snehil Kumbhani.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-indigo-600 text-white dark:text-black font-semibold rounded-xl hover:bg-indigo-700 transition"
        >
          View Resume
        </a>

        {/* Download Button */}
        <a
          href="/Snehil Kumbhani.pdf"
          download="Snehil_Kumbhani_Resume.pdf"
          className="px-6 py-3 bg-green-600 text-white dark:text-black font-semibold rounded-xl hover:bg-green-700 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
