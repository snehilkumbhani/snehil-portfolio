// Dummy projects — replace freely. Make sure each has a unique `id`.
// `date` is a number (YYYYMMDD) for easy sorting; higher = newer.
const projects = [
  {
    id: 1,
    title: 'FoodVision CNN',
    description: 'Image classification with TensorFlow/Keras; transfer learning and fine‑tuning.',
    date: 20240120,
    tags: ['DL', 'CNN', 'Computer Vision'],
    skills: ['TensorFlow', 'Keras', 'Python'],
    links: { github: 'https://github.com/snehilkumbhani/FoodVision-project', live: '' },
  },
  {
    id: 2,
    title: 'IMDB-Movie-Review-Sentiment-Analysis (NLP)',
    description: 'Text preprocessing, embeddings, and a transformer‑based classifier.',
    date: 20240302,
    tags: ['NLP', 'Transformer'],
    skills: ['TensorFlow', 'Python', 'Pandas'],
    links: { github: 'https://github.com/snehilkumbhani/IMDB-Movie-Review-Sentiment-Analysis', live: '' },
  },
  {
    id: 3,
    title: 'Airline Market Demand Dashboard',
    description: 'FastAPI backend + Streamlit frontend using AviationStack API.',
    date: 20240708,
    tags: ['API', 'Dashboard'],
    skills: ['FastAPI', 'Streamlit', 'Python'],
    links: { github: 'https://github.com/snehilkumbhani/airline-demand-visualizer', live: '' },
  },

  {
    id: 4, title: 'Iris Classifier', description: 'Classic ML classifier baseline.', date: 20231215,
    tags:['ML'], skills:['Scikit‑Learn','Python'], links:{github:'https://github.com/snehilkumbhani/Iris-Classifier'}
  },
  
	{
    id: 5, title: 'Heart Disease Predictor', description: 'Binary classification with proper metrics (F1).', date: 20231101,
    tags:['ML'], skills:['Pandas','Scikit‑Learn','Python'], links:{github:'https://github.com/snehilkumbhani/scikitlearn/blob/main/heart_disease_project.ipynb'}
  },
  {
    id: 6, title: 'Bitcoin Price Forecast', description: 'Time series exploration and baselines.', date: 20231020,
    tags:['Time Series'], skills:['Pandas','Matplotlib'], links:{github:'https://github.com/snehilkumbhani/tensorflow/blob/main/bitcoin_price_prediction.ipynb'}
  },
  {
   id: 7,
   title: 'bank-accountholder-churn',
   description: 'Machine learning project predicting bank account holder churn using customer data.',
   date: 20230910,
   tags: ['Machine Learning', 'Finance'],
   skills: ['Python', 'Pandas', 'Scikit-learn'],
  links: { github: 'https://github.com/snehilkumbhani/bank-accountholder-churn' }
  },

  {
   id: 8,
   title: 'AI-Intern-Attrition-Prediction',
   description: 'Machine learning project to predict intern attrition using HR and performance data.',
   date: 20240821,
   tags: ['Machine Learning', 'HR Analytics'],
   skills: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
   links: { github: 'https://github.com/snehilkumbhani/AI-Intern-Attrition-Prediction' }
  },

  {
   id: 9,
   title: 'StudentSupportAgent',
   description: 'AI-powered automation agent to assist students with course queries, leveraging NLP and retrieval-based responses.',
   date: 20240105,
   tags: ['AI Agent', 'EdTech'],
   skills: ['Python', 'FastAPI', 'LangChain', 'Vector Databases'],
   links: { github: 'https://github.com/snehilkumbhani/StudentSupportAgent' }
  }
]

export default projects
