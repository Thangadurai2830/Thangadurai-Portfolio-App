// styles/aboutStyles.ts
import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  screenBackground: '#f0f4ff',       // Soft indigo-blue background
  sectionBackground: '#ffffff',      // White card background
  primary: '#6366f1',                // Indigo-500
  primaryDark: '#4338ca',            // Indigo-700
  accent: '#c084fc',                 // Light purple
  textPrimary: '#1e293b',            // Slate-800
  textSecondary: '#475569',          // Slate-600
  textMuted: '#64748b',              // Slate-500
  border: '#e2e8f0',                 // Gray-200
};

const aboutStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.screenBackground,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 32,
    alignItems: 'center',
  },
  container: {
    backgroundColor: COLORS.sectionBackground,
    padding: 28,
    borderRadius: 24,
    alignItems: 'center',
    marginVertical: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    width: '100%',
    maxWidth: 380,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
      },
      android: {
        elevation: 7,
      },
      default: {
        boxShadow: '0 6px 12px rgba(0,0,0,0.08)',
      },
    }),
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: COLORS.primary,
    marginBottom: 20,
  },
  name: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.primaryDark,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.accent,
    marginBottom: 16,
    textAlign: 'center',
    maxWidth: 340,
  },
  description: {
    fontSize: 15.5,
    color: COLORS.textMuted,
    lineHeight: 24,
    textAlign: 'center',
    maxWidth: 360,
  },
});

export default aboutStyles;
