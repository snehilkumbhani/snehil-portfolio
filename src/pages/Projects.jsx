import React, { useState } from "react";
import projects from "../data/projects"; // your projects.js data
import { motion } from "framer-motion";

export default function Projects() {
  // State
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("date"); // date | title
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination settings
  const projectsPerPage = 6;

  // ---- Filtering ----
  const filteredProjects = projects.filter((project) => {
    return (project.title + " " + project.tags.join(" "))
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  // ---- Sorting ----
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "date") return new Date(b.date) - new Date(a.date); // latest
    if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
    if (sortBy === "a-z") return a.title.localeCompare(b.title);
    if (sortBy === "z-a") return b.title.localeCompare(a.title);
    return 0;
  });

  // ---- Pagination ----
  const totalPages = Math.ceil(sortedProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const currentProjects = sortedProjects.slice(
    startIndex,
    startIndex + projectsPerPage
  );

  // ---- Colors for skill tags ----
  const colors = [
    "bg-blue-200 text-blue-800",
    "bg-green-200 text-green-800",
    "bg-yellow-200 text-yellow-800",
    "bg-purple-200 text-purple-800",
    "bg-pink-200 text-pink-800",
    "bg-red-200 text-red-800",
    "bg-teal-200 text-teal-800",
  ];

  const getColor = (index) => colors[index % colors.length];

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      {/* --- Controls --- */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        {/* Search */}
       <input
       type="text"
       placeholder="Search projects..."
       value={searchTerm}
       onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
       className="border rounded-xl px-4 py-2 w-full md:w-1/3
             bg-white text-black
             dark:bg-gray-900 dark:text-white
             placeholder-gray-500 dark:placeholder-gray-400
             border-gray-300 dark:border-gray-600
             focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="date">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="a-z">A → Z</option>
          <option value="z-a">Z → A</option>
        </select>
      </div>

      {/* --- Projects Grid --- */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border rounded-2xl shadow-md p-4 bg-white dark:bg-gray-800 flex flex-col justify-between"
          >
            <div>
              {/* Project Title */}
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {project.description}
              </p>

              {/* Skills/Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-xl text-xs font-medium ${getColor(
                      i
                    )}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

           <div className="flex gap-3 mt-auto">
            <a
             href={project.links.github || "#"}
             target="_blank"
             rel="noopener noreferrer"
             className="flex-1 text-center text-sm px-3 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
            GitHub
              </a>
            {/* <a
            href={project.links.live || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm px-3 py-2 bg-blue-500 dark:bg-gray-700 text-black font-semibold rounded-lg hover:bg-blue-600 transition"
            >
            Live Demo
            </a> */}
           </div>

          </motion.div>
        ))}
      </motion.div>

      {/* --- Pagination --- */}
      <div className="flex justify-center items-center gap-3 mt-10">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 border rounded-xl disabled:opacity-50"
        >
          Prev
        </button>

        <span className="text-lg font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 border rounded-xl disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
