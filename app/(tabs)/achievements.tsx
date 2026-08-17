import { View, Text } from 'react-native';
import achievementsStyles from '../styles/achievementsStyles';

const achievements = [
  {
    title: '🏆 Smart India Hackathon Finalist 2024',
    description: 'Selected among top 50 teams across India for a government-level tech solution.',
  },
  {
    title: '🎓 Wipro TalentNext Graduate',
    description: 'Completed Java Full Stack training including React.js, Spring Boot, and MySQL.',
  },
  {
    title: '📜 MERN Stack Master Certificate',
    description: 'Trained under Livewire with real-world MERN projects and deployment.',
  },
  {
    title: '🧠 AI Paper Presentation (Top 5)',
    description: 'Presented ML/DL-based Diabetic Nephropathy system at a national tech symposium.',
  },
];

export default function Achievements() {
  return (
    <View style={achievementsStyles.container}>
      <Text style={achievementsStyles.heading}>Achievements</Text>

      {achievements.map((item, index) => (
        <View key={index} style={achievementsStyles.card}>
          <Text style={achievementsStyles.title}>{item.title}</Text>
          <Text style={achievementsStyles.description}>{item.description}</Text>
        </View>
      ))}
    </View>
  );
}
