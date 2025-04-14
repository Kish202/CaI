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
    


      