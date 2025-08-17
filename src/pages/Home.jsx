// src/pages/Home.jsx
import { Cpu, MessageCircle, Brain, BrainCircuit, Upload, Bot} from "lucide-react";

export default function Home() {
  return (
    <div className="w-full">
      {/* First Section (Hero or Intro) */}
      <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Snehil 👋</h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I am a passionate Machine Learning Enthusiast and Developer.  
            Exploring AI, Data, and creating impactful solutions.
          </p>
        </div>
      </section>

      {/* Second Section (Areas of Interest Grid) */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas of Interest</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            Take a look at some of the things I love working on.
          </p>

          {/* Responsive 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
               <Cpu className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg">Artificial Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
               I build, fine-tune, and deploy AI models to solve real-world problems with smart automation.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Brain className="w-10 h-10 text-purple-600 mb-4" />
              <h3 className="font-semibold text-lg">Machine Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                I enjoy the math, theory, and implementation of ML, beyond just API calls.
              </p>
            </div>
						
            <div className="flex flex-col items-center">
              <MessageCircle className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="font-semibold text-lg">NLP</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                I work with researchers to apply NLP techniques and understand human interactions.
              </p>
            </div>

          <div className="flex flex-col items-center">
            <BrainCircuit className="w-10 h-10 text-pink-600 mb-4" />
            <h3 className="font-semibold text-lg">Deep Learning</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            I design and train neural networks for tasks like vision, language, and prediction.
            </p>
            </div>

          <div className="flex flex-col items-center">
            <Bot className="w-10 h-10 text-red-600 mb-4" />
            <h3 className="font-semibold text-lg">Generative AI</h3>
            <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            I build generative models to create text, images, and intelligent applications.
            </p>
          </div>

						<div className="flex flex-col items-center">
              <Upload className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="font-semibold text-lg">Model Deployment</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                I deploy ML models into production with REST APIs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
