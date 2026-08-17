// styles/achievementsStyles.ts
import { StyleSheet, Platform } from 'react-native';

export const COLORS = {
  background: '#eef2ff',         // Soft Indigo Blue
  section: '#ffffff',
  primary: '#6366f1',            // Indigo 500
  primaryDark: '#4338ca',        // Indigo 700
  accent: '#10b981',             // Emerald 500
  highlight: '#a5f3fc',          // Cyan-100
  textPrimary: '#1e293b',        // Slate 800
  textSecondary: '#475569',      // Slate 600
  textMuted: '#94a3b8',          // Slate 400
  border: '#e2e8f0',
  shadow: 'rgba(0, 0, 0, 0.08)',
};

const achievementsStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    padding: 24,
    borderRadius: 20,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.12,
        shadowRadius: 10,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.primaryDark,
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.6,
  },
  card: {
    backgroundColor: COLORS.section,
    padding: 20,
    borderRadius: 18,
    marginBottom: 18,
    borderLeftWidth: 6,
    borderLeftColor: COLORS.accent,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  title: {
    fontSize: 17.5,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  description: {
    marginTop: 8,
    fontSize: 15.5,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },
});

export default achievementsStyles;
