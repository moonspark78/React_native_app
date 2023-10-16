import {useState} from 'react'
import { View, Text, TextInput, TouchableOpacit, Image, FlatList } from 'react-native'
import styles from './welcome.style'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  return (
    <View>
      <View style={styles.container}>
          <Text style={styles.userName }>Hello Souli</Text>
          <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>

      <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
              <TextInput
                style={styles.searchInput}
                value=""
                onChange={() => {}}
                placeholder=""
              />
          </View>
      </View>
    </View>
  )
}

export default Welcome