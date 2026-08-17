// app/(tabs)/skills.tsx

import { View, Text, TouchableOpacity } from 'react-native';
import skillsStyles from '../styles/skillsStyles';

const skills = [
  'React.js',
  'React Native',
  'Spring Boot',
  'Node.js',
  'Express.js',
  'MongoDB',
  'MySQL',
  'HTML/CSS',
  'JavaScript',
  'Tailwind CSS',
  'REST APIs',
  'Git & GitHub',
  'Firebase',
  'Django (Basics)',
];

export default function Skills() {
  return (
    <View style={skillsStyles.container}>
      <Text style={skillsStyles.heading}>My Skills</Text>

      <View style={skillsStyles.skillWrapper}>
        {skills.map((skill, index) => (
          <TouchableOpacity key={index} style={skillsStyles.skillTag} activeOpacity={0.8}>
            <Text style={skillsStyles.skillText}>{skill}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
