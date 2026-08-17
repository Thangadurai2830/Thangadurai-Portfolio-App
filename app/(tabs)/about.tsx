import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import aboutStyles from '../styles/aboutStyles';

export default function About() {
  const handlePress = () => {
    Alert.alert('Hi there 👋', 'Thanks for checking out my profile!');
  };

  return (
    <View style={aboutStyles.screen}>
      <View style={aboutStyles.container}>
        <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
          <Image
            source={require('../../assets/images/profile.png')}
            style={aboutStyles.image}
          />
        </TouchableOpacity>

        <Text style={aboutStyles.name}>Thangadurai G</Text>

        <Text style={aboutStyles.title}>
          Full Stack Developer | React | Spring Boot | MERN | Mobile Apps
        </Text>

        <Text style={aboutStyles.description}>
          Passionate about building scalable web & mobile applications with clean UI,
          strong backend logic, and seamless UX.
        </Text>
      </View>
    </View>
  );
}
