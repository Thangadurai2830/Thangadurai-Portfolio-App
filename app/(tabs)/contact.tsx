import { View, Text, TouchableOpacity, Linking } from 'react-native';
import contactStyles from '../styles/contactStyles';

const contactDetails = [
  {
    label: '📧 Email',
    value: 'thangadurai@example.com',
    link: 'mailto:thangadurai@example.com',
  },
  {
    label: '📞 Phone',
    value: '+91 98765 43210',
    link: 'tel:+919876543210',
  },
  {
    label: '🌐 Portfolio',
    value: 'https://yourportfolio.com',
    link: 'https://yourportfolio.com',
  },
  {
    label: '💼 LinkedIn',
    value: 'linkedin.com/in/thangadurai',
    link: 'https://linkedin.com/in/thangadurai',
  },
  {
    label: '🐙 GitHub',
    value: 'github.com/thangadurai',
    link: 'https://github.com/thangadurai',
  },
];

export default function Contact() {
  return (
    <View style={contactStyles.container}>
      <Text style={contactStyles.heading}>Contact Me</Text>

      {contactDetails.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => Linking.openURL(item.link)}
          activeOpacity={0.8}
          style={contactStyles.card}
        >
          <Text style={contactStyles.label}>{item.label}</Text>
          <Text style={contactStyles.value}>{item.value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
