// styles/contactStyles.ts
import { StyleSheet, Platform } from 'react-native';

const COLORS = {
  screenBackground: '#eef2ff',     // Soft Indigo background
  cardBackground: '#f0f9ff',       // Light Sky Blue
  primary: '#0ea5e9',              // Sky Blue
  primaryDark: '#0369a1',          // Deep Blue
  accent: '#38bdf8',               // Light Blue
  textPrimary: '#1e293b',          // Slate-800
  textSecondary: '#475569',        // Slate-600
  borderAccent: '#0284c7',         // Blue border
  shadowColor: 'rgba(0, 0, 0, 0.08)',
};

const contactStyles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.screenBackground,
    padding: 26,
    borderRadius: 24,
    marginHorizontal: 18,
    marginTop: 18,
    marginBottom: 28,
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: '#cbd5e1', // soft border
    ...Platform.select({
      ios: {
        shadowColor: COLORS.shadowColor,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
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
    textAlign: 'center',
    marginBottom: 24,
    letterSpacing: 0.5,
  },

  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 14,
    padding: 18,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderLeftColor: COLORS.borderAccent,
    shadowColor: COLORS.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },

  label: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primaryDark,
    marginBottom: 4,
  },

  value: {
    fontSize: 15.5,
    color: COLORS.textPrimary,
  },
});

export default contactStyles;
