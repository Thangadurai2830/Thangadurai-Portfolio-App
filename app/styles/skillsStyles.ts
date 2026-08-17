// styles/skillsStyles.ts
import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  background: '#eef2ff',       // Indigo-50
  cardBackground: '#ffffff',
  primary: '#6366f1',          // Indigo-500
  primaryDark: '#4338ca',      // Indigo-700
  accent: '#a5b4fc',           // Indigo-300
  tagBackground: '#e0e7ff',    // Indigo-100
  tagText: '#3730a3',          // Indigo-800
  shadow: 'rgba(0, 0, 0, 0.06)',
};

const skillsStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    padding: 24,
    borderRadius: 20,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.08,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  heading: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.primaryDark,
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  skillWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  skillTag: {
    backgroundColor: COLORS.tagBackground,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 6,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.accent,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  skillText: {
    color: COLORS.tagText,
    fontWeight: '600',
    fontSize: 14,
  },
});

export default skillsStyles;
