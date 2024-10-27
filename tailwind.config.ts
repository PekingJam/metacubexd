import corvu from '@corvu/tailwind'
import daisyui from 'daisyui'
import { Config } from 'tailwindcss'

export default {
  content: ['src/**/*.{css,ts,tsx}'],
  plugins: [daisyui, corvu],
  daisyui: {
    themes: [
      {
        light: {
          accent: '#ffffff',
          success: '#1aad19',
          info: '#0000ff',
          warning: '#f8d007',
          error: '#ff0000',
        },
      },
      'dark',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        twemoji: ['system-ui', 'Twemoji Mozilla', 'Fira Sans', 'monospace'],
        'no-twemoji': ['system-ui', 'Fira Sans', 'monospace'],
      },
    },
  },
} as Config
