// styles/educationStyles.ts
import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  screenBackground: '#eef2ff',       // Soft Indigo-50
  cardBackground: '#f8fafc',         // Subtle white-blue
  primary: '#6366f1',                // Indigo-500
  secondary: '#4338ca',              // Indigo-700
  borderAccent: '#818cf8',           // Lighter indigo for card edges
  textPrimary: '#1e293b',            // Slate-800
  textSecondary: '#475569',          // Slate-600
  textMuted: '#64748b',              // Slate-500
  grade: '#22c55e',                  // Emerald for highlighting grade
  shadowColor: 'rgba(0,0,0,0.08)',
};

const educationStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.screenBackground,
    padding: 24,
    borderRadius: 20,
    marginHorizontal: 16,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.secondary,
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },

  card: {
    backgroundColor: COLORS.cardBackground,
    padding: 20,
    borderRadius: 16,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: COLORS.borderAccent,
    shadowColor: COLORS.shadowColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  degree: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  institution: {
    marginTop: 6,
    fontSize: 15,
    color: COLORS.textSecondary,
  },

  year: {
    marginTop: 4,
    fontSize: 14,
    color: COLORS.textMuted,
  },

  grade: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.grade,
  },
});

export default educationStyles;
