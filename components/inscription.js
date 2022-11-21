// import { StatusBar } from 'expo-status-bar'
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    Image,
    SafeAreaView,
    ScrollView,
  } from 'react-native'
  
  export default function App() {
    const inscription = () => {
      alert('inscription reussie !')
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
        <SafeAreaView>
          <ScrollView style={styles.body}>
            <Text style={styles.title2}>Inscription</Text>
            <View style={styles.mainPart}>
              <View style={styles.containerProfil}>
                <Image
                  style={styles.profil}
                  source={require('./assets/defaultProfil.png')}
                />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Nom d'utlisateur"
              />
              <TextInput
                style={styles.input}
                placeholder="Mot de passe"
              />
              <TextInput
                style={styles.input}
                placeholder="Confirmenr mot de passe"
              />
              <TextInput
                style={styles.input}
                placeholder="Numero de l'assemblée"
              />
            </View>
            <View style={styles.secondPart}>
              <TextInput style={styles.input} placeholder="Nom" />
              <TextInput style={styles.input} placeholder="Prenom" />
              <TextInput style={styles.input} placeholder="Sexe" />
              <TextInput style={styles.input} placeholder="Telephone" />
              <TextInput
                style={styles.input}
                placeholder="Date de naissance"
              />
              <TextInput
                style={styles.input}
                placeholder="Date de bapteme"
              />
            </View>
            <View>
              <Pressable onPress={inscription} style={styles.create}>
                <Text style={styles.PressableCreate}>Inscription</Text>
              </Pressable>
            </View>
          </ScrollView>
        </SafeAreaView>
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
      marginHorizontal: 20,
      marginVertical: 15,
      borderWidth: 1,
      borderColor: '#17144D',
      padding: 15,
      color: '#17144D',
      borderRadius: 20,
      fontSize: 14,
      backgroundColor: '#fff',
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
    containerProfil: {
      width: 100,
      height: 100,
      backgroundColor: '#fff',
      alignSelf: 'center',
      borderRadius: 100,
      padding: 10,
      marginTop: 10,
    },
    profil: {
      height: 80,
      width: 80,
      borderRadius: 100,
    },
    mainPart: {
      backgroundColor: '#ECECEE',
      marginHorizontal: 20,
    },
    body: {
      overflow: 'scroll',
      height: '81%',
    },
    secondPart: {
      marginHorizontal: 20,
    },
  })
  