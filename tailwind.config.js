// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F1F5F9', // Soft Grayish Blue
        headerBg: '#3B82F6', // Bright Blue
        textPrimary: '#1E293B', // Dark Slate
        sectionBg1: '#93C5FD', // Light Sky Blue
        sectionBg2: '#A5B4FC', // Soft Indigo
        sectionBg3: '#FCA5A5', // Light Coral
        highlight: '#F87171', // Coral Red
        ctaBg: '#4ADE80', // Soft Green
        ctaText: '#1F2937', // Dark Gray
      },
    },
  },
  plugins: [],
};
