import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: {
//       plugins: [
//         tailwindcss({
//           content: [
//             "./index.html",
//             "./src/**/*.{js,ts,jsx,tsx}",
//           ],
//           theme: {
//             extend: {
//               colors: {
//                 // Custom neumorphic color palette
//                 neugray: {
//                   800: '#1a1a2e',
//                   900: '#0f0f1a',
//                 },
//                 neopurple: {
//                   300: '#bd93f9',
//                   400: '#a277ff',
//                   500: '#8a4fff',
//                   600: '#6e30cc',
//                   700: '#5924a9',
//                   900: '#2c1752',
//                 },
//               },
//               boxShadow: {
//                 'neumorphic-inset': 'inset 2px 2px 5px rgba(0, 0, 0, 0.7), inset -2px -2px 5px rgba(255, 255, 255, 0.1)',
//                 'neumorphic': '5px 5px 10px rgba(0, 0, 0, 0.7), -5px -5px 10px rgba(255, 255, 255, 0.05)',
//                 'neumorphic-sm': '3px 3px 6px rgba(0, 0, 0, 0.7), -2px -2px 5px rgba(255, 255, 255, 0.05)',
//                 'neon': '0 0 5px rgba(189, 147, 249, 0.3), 0 0 10px rgba(189, 147, 249, 0.2), 0 0 15px rgba(189, 147, 249, 0.1)',
//               },
//               dropShadow: {
//                 'glow-sm': '0 0 3px rgba(189, 150, 249, 0.5)',
//                 'glow': '0 0 8px rgba(189, 150, 249, 0.5)',
//               },
//               animation: {
//                 'glow-pulse': 'glow-pulse 2s infinite',
//               },
//               keyframes: {
//                 'glow-pulse': {
//                   '0%, 100%': {
//                     filter: 'drop-shadow(0 0 5px rgba(189, 147, 249, 0.7))'
//                   },
//                   '50%': {
//                     filter: 'drop-shadow(0 0 15px rgba(189, 147, 249, 0.3))'
//                   },
//                 },
//               },
//             },
//           },
//           plugins: [],
//         }),
//         autoprefixer(),
//       ],
//     },
//   },
// });

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
    


      // tailwind.config.js
module.exports = {
  content: [
    ./index.html
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