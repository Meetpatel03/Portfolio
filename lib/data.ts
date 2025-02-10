import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ldaImg from "@/public/Loan_Data_Analysis.png";
import spImg from "@/public/Student_Performance_Analysis.jpg";
import rstaImg from "@/public/Retail_Sales_Trend Analysis.png";
import fnImg from "@/public/Fake_News_Identification.jpg";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import qqsdImg from "@/public/qqsdImg.jpg";
import sddImg from "@/public/sddImg.jpg";
import apmsImg from "@/public/apmsImg.jpg";
import taxiImg from "@/public/taxi_gcp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    companyName: "JuniorKids Group",
    title: "Artificial Intelligence Programmer",
    location: "Montreal, Canada",
    description: [
      "Developed and optimized an AI-powered eCommerce chatbot using diffusion models, enhancing customer interaction and engagement through intelligent automation.",
      "Assisted in building an AI-driven virtual influencer capable of singing and generating music, leveraging advanced machine learning models and audio synthesis techniques to create lifelike vocal performances.",
      "Integrated NLP and deep learning algorithms to improve chatbot responses, making interactions more context-aware and human-like.",
      "Contributed to enhancing AI-generated content, refining the chatbot’s ability to handle diverse customer queries and improve user experience.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 – August 2024",
  },
  {
    companyName: "Foremost Digital Technologies",
    title: "Web Developer Intern",
    location: "Ahmedabad, India",
    description: [
      "Worked on various web application projects including WEBOOKCARE and the FOREMOST DIGITAL CHANNEL (the company’s website).",
      "Developed WEBOOKCARE, a web-based service designed to assist elderly individuals.",
      "Utilized a tech stack of JavaScript, HTML, CSS, React, Node.js, and MongoDB, gaining proficiency in libraries such as Express.js, Redux, and Tailwind CSS for developing web-based services."
    ],
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 – June 2023",
  },
  {
    companyName: "Brainy Beam Technologies Pvt Ltd., Ahmedabad",
    title: "Data Science Intern",
    location: "Ahmedabad, India",
    description: [
      "Developed a recommender system that uses linguistics and a contextual-based technique to identify sentiment using a Bayes classifier or SVM and it achieved an accuracy rate of about 92% using ML algorithms.",
      "Developed and applied cutting-edge RNN and LSTM algorithms integrated with NLP methodologies to forecast and evaluate sentiment in user-generated content, driving a 30% enhancement in content relevance and a 20% rise in customer retention rates.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "August 2022 - November 2022",
  },
] as const;


export const projectsData = [
  {
    title: "Loan Data Analysis and Visualization",
    description:
      "Developed an interactive loan data analysis dashboard by cleaning data with SQL and integrating Tableau Live Server, providing real-time insights on loan amounts, risk classification, durations, and ownership trends for better decision-making.",
    tags: ["Tableau","SQL", "Tableau Live Server","Excel", "Python"],
    imageUrl: ldaImg,
  },
  {
    title: "Uber Data Analysis Pipeline using GCP",
    description:
      "I developed a GCP data pipeline to analyze NYC taxi trip data, enhancing processing efficiency and operational effectiveness through insightful visualizations with Looker.",
    tags: ["Python", "BigQuery", "Data Extraction", "Data Transformation", "MageAI", "Looker"],
    imageUrl: taxiImg,
  },
  {
    title: "End-to-End ML Pipeline for Student Performance",
    description:
      "Built an end-to-end ML pipeline for student performance prediction, handling data preprocessing, model training, and evaluation. Optimized models using RandomizedSearchCV and deployed on Microsoft Azure for scalable, reliable predictions.",
    tags: ["Machine Learning", "Azure Development", "Version Control"],
    imageUrl: spImg,
  },
  {
    title: "Retail Sales Trend Analysis",
    description:
      "Built interactive dashboards in Excel and Tableau to analyze retail sales trends and seasonal patterns. Applied data preprocessing techniques to ensure accuracy, enabling data-driven decision-making and performance improvements.",
    tags: ["Data Analysis", "Visualization","Excel","Tableau"],
    imageUrl: rstaImg,
  },
  {
    title: "Fake News Prediction System",
    description:
      "Developed a fake news detection web app using Machine Learning and NLP, achieving 97% accuracy. Fine-tuned models on large datasets, improving classification by 20%, and implemented advanced text analysis techniques.",
    tags: ["Python", "TensorFlow", "NLTK", "Scikit-learn", "Flask"],
    imageUrl: fnImg,
  },
  {
    title: "Quora Question Pair Similarity Detection using NLP",
    description:
      "Built a deep learning-based NLP system for Quora question similarity detection, reducing redundant questions by 30%. Improved user experience and content quality by identifying duplicate queries efficiently.",
    tags: ["Python", "TensorFlow", "SpaCy", "Scikit-learn", "Flask"],
    imageUrl: qqsdImg,
  },
  {
    title: "Social Distance Detection",
    description:
      "Developed a social distance detection system using OpenCV and YOLOv3 for human recognition. Implemented centroid tracking and distance estimation to monitor violations and enhance public safety.",
    tags: ["Python", "OpenCV", "YOLOv3", "TensorFlow", "NumPy"],
    imageUrl: sddImg,
  },
  {
    title: "Advanced Project Management System",
    description:
      "Built a project management platform for faculty-student collaboration, enabling document submissions, group creation, and mentorship requests. Integrated AI-powered plagiarism detection and a Kanban app for progress tracking.",
    tags: ["Python", "Django", "JavaScript", "React", "PostgreSQL"],
    imageUrl: apmsImg,
  },
  
] as const;

export const skillsData = [
  "Python",
  "JavaScript",
  "C",
  "C++",
  "PHP",
  "HTML",
  "CSS",
  "Node.js",
  "React",
  "Flask",
  "Django",
  "RESTful APIs",
  "PyTorch",
  "TensorFlow",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "NLTK",
  "Matplotlib",
  "Seaborn",
  "Selenium",
  "Tailwind CSS",
  "SQL",
  "PostgreSQL",
  "MySQL",
  "NoSQL",
  "MongoDB",
  "DynamoDB",
  "AWS",
  "Docker",
  "GitHub Actions",
  "CI/CD",
  "Kubernetes",
  "Git",
  "Postman",
  "Tableau",
  "Power Bi",
  "Agile",
  "SDLC",
] as const;
