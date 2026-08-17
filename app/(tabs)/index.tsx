import { ScrollView, View } from 'react-native';
import About from './about';
import Education from './education';
import Skills from './skills';
import Projects from './projects';
import Achievements from './achievements';
import Contact from './contact';

export default function HomeScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 60,
        backgroundColor: '#f3f4f6', // Soft gray background for modern look
      }}
    >
      {/* 👤 About */}
      <View style={{ marginBottom: 28 }}>
        <About />
      </View>

      {/* 🎓 Education */}
      <View style={{ marginBottom: 28 }}>
        <Education />
      </View>

      {/* 🛠️ Skills */}
      <View style={{ marginBottom: 28 }}>
        <Skills />
      </View>

      {/* 📂 Projects */}
      <View style={{ marginBottom: 28 }}>
        <Projects />
      </View>

      {/* 🏆 Achievements */}
      <View style={{ marginBottom: 28 }}>
        <Achievements />
      </View>

      {/* 📞 Contact */}
      <View style={{ marginBottom: 28 }}>
        <Contact />
      </View>
    </ScrollView>
  );
}
