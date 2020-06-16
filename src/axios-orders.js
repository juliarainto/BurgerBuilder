import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-builder-86bab.firebaseio.com/',
})

export default instance
