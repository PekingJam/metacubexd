import corvu from '@corvu/tailwind'
import daisyui from 'daisyui'
import { Config } from 'tailwindcss'

export default {
  content: ['src/**/*.{css,ts,tsx}'],
  plugins: [daisyui, corvu],
  daisyui: {
    themes: ['light', 'dark'],
    styled: true,
    base: true,
    utils: true,
    // 这里自定义 light 主题
    // 通过 extending 来修改 existing themes
    darkTheme: 'dark',
  },
  theme: {
    extend: {
      fontFamily: {
        twemoji: ['system-ui', 'Twemoji Mozilla', 'Fira Sans', 'monospace'],
        'no-twemoji': ['system-ui', 'Fira Sans', 'monospace'],
      },
      colors: {
        neutral: '#ffffff',
        success: '#1aad19',
        info: '#1E90FF',
        warning: '#f8d007',
        error: '#ff0000',
      },
    },
  },
} as Config
