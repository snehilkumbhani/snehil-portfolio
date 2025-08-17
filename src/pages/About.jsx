import { Mail, Phone, MapPin, Linkedin, BrainCircuit, Bot, Database, Code, GraduationCap, Github } from "lucide-react";

export default function About() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        About Me
      </h2>

      {/* Summary */}
      <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Aspiring and results-driven <span className="font-semibold">Machine Learning Enthusiast </span>  
        seeking an internship to apply and enhance my skills in data analysis, model development, 
        and AI-driven solutions. Proficient in <span className="font-semibold">Python, NumPy, Pandas, 
        Matplotlib, and TensorFlow</span>. Passionate about solving real-world problems with 
        predictive modelling and eager to collaborate in dynamic teams.
      </p>
     <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
      I have successfully completed my <span className="font-semibold">BCA at Veer Narmad South Gujarat University (2022–2025)</span>. 
      I’m open to relocation across India as well as international opportunities. My goal is to contribute 
      to impactful projects while continuously learning and growing in the field of AI.
    </p>


      {/* Skills */}
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
        Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex items-start gap-3">
          <BrainCircuit className="w-6 h-6 text-purple-600 mt-1" />
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Machine Learning & AI:</span> TensorFlow, Keras, Scikit-Learn, Neural Networks, Deep Learning, Transfer Learning
          </p>
        </div>
        <div className="flex items-start gap-3">
          <Code className="w-6 h-6 text-green-600 mt-1" />
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Programming & Development:</span> Python, SQL, HTML, CSS, JavaScript, React.js, Next.js
          </p>
        </div>
        <div className="flex items-start gap-3">
          <Database className="w-6 h-6 text-blue-600 mt-1" />
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Data & Tools:</span> Pandas, NumPy, Matplotlib, MySQL, MongoDB, Git, Postman, Google Colab
          </p>
        </div>
        <div className="flex items-start gap-3">
          <Bot className="w-6 h-6 text-red-600 mt-1" />
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Generative AI:</span> Text, image, and application-focused AI models
          </p>
        </div>
      </div>

      {/* Projects */}
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
        Projects
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          <a
            href="https://github.com/snehilkumbhani"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            GitHub Portfolio
          </a>
        </li>
        <li>
          <a
            href="https://github.com/snehilkumbhani/tensorflow/blob/main/foodvision..ipynb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            FoodVision – Image Classification with TensorFlow
          </a>
        </li>
      </ul>

      {/* Strengths */}
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
        Strengths
      </h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
        <li>Delivering complex projects on time</li>
        <li>Strong collaborative and team management skills</li>
        <li>Quick adaptability to new technologies and environments</li>
      </ul>

      {/* Contact */}
      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
        Contact Information
      </h3>
      <div className="space-y-2 text-gray-700 dark:text-gray-300">
        <p className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-gray-500" /> Surat, Gujarat - 395010
        </p>
        <p className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-gray-500" /> 6353563960
        </p>
        <p className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-gray-500" /> snehilkumbhani@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <Linkedin className="w-5 h-5 text-gray-500" />
          <a
            href="https://linkedin.com/in/snehilkumbhani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Snehil Kumbhani
          </a>
        </p>
      </div>
    </section>
  );
}
