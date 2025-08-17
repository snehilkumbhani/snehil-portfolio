export default function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
}