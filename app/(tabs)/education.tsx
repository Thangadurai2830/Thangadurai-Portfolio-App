import { View, Text } from 'react-native';
import educationStyles from '../styles/educationStyles';

const educationData = [
  {
    degree: 'B.TECH-INFORMATION TECHNOLOGY',
    institution: 'Mahendra College Of Engineering,Salem, Tamil Nadu',
    year: '2021 – 2025',
    grade: '7.6 CGPA',
  },
  {
    degree: 'HSC (Class 12)',
    institution: 'ST.Josep Matric Higher Secondary School, Sankarapuram',
    year: '2019 – 2021',
    grade: '80%',
  },
  {
    degree: 'SSLC (Class 10)',
    institution: 'ST.DonBosco Matric Higher Secondary School, Moongilthuraipattu',
    year: '2018 – 2019',
    grade: '70%',
  },
];

export default function Education() {
  return (
    <View style={educationStyles.container}>
      <Text style={educationStyles.heading}>Education</Text>

      {educationData.map((edu, index) => (
        <View key={index} style={educationStyles.card}>
          <Text style={educationStyles.degree}>🎓 {edu.degree}</Text>
          <Text style={educationStyles.institution}>{edu.institution}</Text>
          <Text style={educationStyles.year}>{edu.year}</Text>
          <Text style={educationStyles.grade}>{edu.grade}</Text>
        </View>
      ))}
    </View>
  );
}
