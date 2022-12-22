import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

const storage = new Storage({
  size: 1000,
  storageBackend: AsyncStorage,
  enableCache: true,
  sync: {},
  defaultExpires: 1000 * 60 * 60 * 24,
})

export default storage