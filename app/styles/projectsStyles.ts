// styles/projectsStyles.ts
import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  screenBackground: '#eef2ff',     // Soft Indigo-50
  cardBackground: '#ffffff',
  primary: '#6366f1',              // Indigo-500
  primaryDark: '#4338ca',          // Indigo-700
  borderAccent: '#818cf8',         // Lighter Indigo
  textPrimary: '#1e293b',          // Slate-800
  textSecondary: '#475569',        // Slate-600
  textMuted: '#64748b',            // Slate-500
  link: '#6366f1',                 // GitHub link color
  shadow: 'rgba(0, 0, 0, 0.08)',
};

const projectsStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.screenBackground,
    padding: 24,
    borderRadius: 22,
    marginHorizontal: 16,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadow,
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
    color: COLORS.primaryDark,
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  card: {
    backgroundColor: COLORS.cardBackground,
    padding: 20,
    borderRadius: 16,
    marginBottom: 18,
    borderLeftWidth: 5,
    borderLeftColor: COLORS.borderAccent,
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
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },

  description: {
    marginTop: 8,
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 22,
  },

  githubLink: {
    marginTop: 10,
    fontSize: 14,
    color: COLORS.link,
    fontWeight: '600',
  },
});

export default projectsStyles;
