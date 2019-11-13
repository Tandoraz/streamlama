import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'md'
  },
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#673ab7',
        secondary: '#424242',
        accent: '#ffc107',
        error: '#CC0000',
        info: '#0099CC',
        success: '#007E33',
        warning: '#FF8800'
      },
      dark: {
        primary: '#b39ddb', // purple
        secondary: '#212121',
        accent: '#ffe082', // yellow
        error: '#ff4444',
        info: '#33b5e5',
        success: '#00C851',
        warning: '#ffbb33',
        normal: '#2E2E2E',
        normal_dark: '#212121'
      }
    }
  }
})
