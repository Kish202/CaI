// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand colors extracted from your navbar
        slate: {
          950: '#0f172a', // From navbar gradient
          300: '#cbd5e1', // For text elements
        },
        violet: {
          900: '#4c1d95', // From navbar gradient
          700: '#6d28d9', // From navbar gradient
          300: '#c4b5fd', // For text elements
        },
        purple: {
          700: '#7e22ce', // From navbar gradient
          500: '#a855f7', // For text elements
          400: '#c084fc', // For hover states
          300: '#d8b4fe', // For text elements
          200: '#e9d5ff', // For hover states
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #0f172a, #4c1d95, #7e22ce)',
        'gradient-transparent': 'linear-gradient(to right, rgba(15,23,42,0.9), rgba(76,29,149,0.9), rgba(126,34,206,0.9))',
        'text-gradient': 'linear-gradient(to right, #d8b4fe, #a855f7)',
      },
      boxShadow: {
        // Neumorphic shadows customized for dark theme
        'neumorphic': '8px 8px 16px rgba(0,0,0,0.4), -8px -8px 16px rgba(255,255,255,0.05)',
        'neumorphic-sm': '4px 4px 8px rgba(0,0,0,0.4), -4px -4px 8px rgba(255,255,255,0.05)',
        'neumorphic-pressed': 'inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(255,255,255,0.05)',
        'neumorphic-inner': 'inset 1px 1px 3px rgba(255,255,255,0.05), inset -1px -1px 4px rgba(0,0,0,0.4)',
        'neumorphic-glow': '4px 4px 12px rgba(255,255,255,0.3)',
      },
      borderColor: {
        'neumorphic': 'rgba(109,40,217,0.6)', // violet-700 with opacity
        'neumorphic-hover': 'rgba(109,40,217,0.3)', // lighter variant for hover
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionProperty: {
        'hover': 'transform, shadow, border-color, text-color, background-color',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  // Custom utility classes for your neumorphic design
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.shadow-neumorphic': {
          'boxShadow': '8px 8px 16px rgba(0,0,0,0.4), -8px -8px 16px rgba(255,255,255,0.05)',
        },
        '.shadow-neumorphic-sm': {
          'boxShadow': '4px 4px 8px rgba(0,0,0,0.4), -4px -4px 8px rgba(255,255,255,0.05)',
        },
        '.shadow-neumorphic-pressed': {
          'boxShadow': 'inset 4px 4px 8px rgba(0,0,0,0.4), inset -4px -4px 8px rgba(255,255,255,0.05)',
        },
        '.shadow-neumorphic-inner': {
          'boxShadow': 'inset 1px 1px 3px rgba(255,255,255,0.05), inset -1px -1px 4px rgba(0,0,0,0.4)',
        },
        '.shadow-neumorphic-glow': {
          'boxShadow': '4px 4px 12px rgba(255,255,255,0.3)',
        },
        '.bg-neumorphic': {
          'backgroundImage': 'linear-gradient(to right, #0f172a, #4c1d95, #7e22ce)',
        },
        '.bg-neumorphic-transparent': {
          'backgroundImage': 'linear-gradient(to right, rgba(15,23,42,0.9), rgba(76,29,149,0.9), rgba(126,34,206,0.9))',
          'backdropFilter': 'blur(2px)',
        },
        '.text-neumorphic': {
          'backgroundClip': 'text',
          'textFillColor': 'transparent',
          'backgroundImage': 'linear-gradient(to right, #d8b4fe, #a855f7)',
        },
        '.border-neumorphic': {
          'borderColor': 'rgba(109,40,217,0.6)',
          'borderWidth': '1px',
        },
        '.border-neumorphic-hover': {
          'borderColor': 'rgba(109,40,217,0.3)',
          'borderWidth': '1px',
        },
        '.transition-neumorphic': {
          'transitionProperty': 'transform, box-shadow, border-color, color, background-color',
          'transitionDuration': '300ms',
          'transitionTimingFunction': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        '.hover-neumorphic': {
          '&:hover': {
            'transform': 'scale(1.05)',
            'boxShadow': '4px 4px 12px rgba(255,255,255,0.3)',
            'borderColor': 'rgba(109,40,217,0.3)',
          },
        },
      };
      
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}