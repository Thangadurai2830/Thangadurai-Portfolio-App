// app/(tabs)/projects.tsx

import { View, Text, TouchableOpacity, Linking } from 'react-native';
import projectsStyles from '../styles/projectsStyles';

const projects = [
  {
    title: '🛒 E-Commerce Web App',
    description: 'React.js + Spring Boot + MySQL web app for product management, cart, and orders.',
    github: 'https://github.com/yourusername/ecommerce-app',
  },
  {
    title: '🩺 Doctor Appointment System',
    description: 'Cross-platform system using React Native + Django + MySQL.',
    github: 'https://github.com/yourusername/doctor-app',
  },
  {
    title: '🧠 Medical Diagnosis AI',
    description: 'MERN stack + ML models to detect diabetic nephropathy from clinical + image data.',
    github: 'https://github.com/yourusername/diabetic-ai',
  },
  {
    title: '🌐 Portfolio Website',
    description: 'Responsive personal portfolio made with React, Tailwind, and Vite.',
    github: 'https://github.com/yourusername/portfolio',
  },
];

export default function Projects() {
  return (
    <View style={projectsStyles.container}>
      <Text style={projectsStyles.heading}>My Projects</Text>

      {projects.map((project, index) => (
        <View key={index} style={projectsStyles.card}>
          <Text style={projectsStyles.title}>{project.title}</Text>
          <Text style={projectsStyles.description}>{project.description}</Text>
          <TouchableOpacity onPress={() => Linking.openURL(project.github)}>
            <Text style={projectsStyles.githubLink}>🔗 View on GitHub</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
