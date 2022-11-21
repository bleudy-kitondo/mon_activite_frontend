// import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    Image,
  } from 'react-native'
  
  export default function App() {
    const connexion = () => {
      alert('connexion reussie !')
    }
    return (
      <View style={styles.container}>
        <View style={styles.hearder}>
          <Image
            style={styles.picture}
            source={require('./assets/logo.jpg')}
          />
          <Text style={styles.title}>
            Mon rapport d'activité de predication
          </Text>
        </View>
        <View>
          <Text style={styles.title2}>Page Admin</Text>
          <TextInput
            style={styles.input}
            placeholder="Nom d'utlisateur "
          />
          <TextInput style={styles.input} placeholder="Mot de passe" />
          <View>
            <Pressable onPress={connexion} style={styles.connexion}>
              <Text style={styles.PressableConnexion}> Connexion</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.footer}>
          <Image
            style={styles.picture}
            source={require('./assets/jw.png')}
          />
          <Text style={styles.hearderText}>
            {' '}
            Copyright ©2022, by Bleudy TETE
          </Text>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
    },
    input: {
      marginHorizontal: 40,
      marginVertical: 15,
      borderWidth: 1,
      borderColor: '#17144D',
      padding: 15,
      color: '#17144D',
      borderRadius: 20,
      fontSize: 14,
    },
    connexion: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#17144D',
      padding: 15,
      borderRadius: 20,
      marginHorizontal: 40,
      marginVertical: 15,
    },
    create: {
      backgroundColor: '#17144D',
      padding: 15,
      borderRadius: 20,
      marginHorizontal: 40,
      marginVertical: 15,
    },
    PressableCreate: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',
    },
    PressableConnexion: {
      color: '#17144D',
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    paragraph: {
      marginHorizontal: 40,
      marginVertical: 15,
      fontSize: 16,
      color: '#17144D',
    },
    picture: {
      height: 66,
      width: 66,
    },
    footer: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 375,
    },
    hearder: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 33,
      padding: 10,
      backgroundColor: '#E8E8EA',
    },
    title: {
      color: '#17144D',
      fontSize: 24,
      width: '90%',
    },
    title2: {
      textAlign: 'center',
      fontSize: 30,
      marginVertical: 40,
    },
    hearderText: {
      backgroundColor: '#206FAB',
      width: '90%',
      color: '#fff',
      padding: 20,
    },
  })
  