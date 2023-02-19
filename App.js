import { StyleSheet, Text, View, SafeAreaView, Platform, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.textColor}>Jai Ganesh</Text> */}
      <View style={styles.firstContainer}>
        <Text style={styles.findYourText}>Find Your</Text>
        <Text style={styles.sideKickText}>SideKick</Text>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 30 }}>
          <TextInput
            style={styles.searchInput}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Search area..." // keyboardType="numeric" 
          />
          <TouchableOpacity style={styles.searchBtn}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 25 : 0
    // justifyContent: 'center',
  },
  firstContainer: {
    display: 'flex',
    width: '95%',
    height: 200,
    backgroundColor: '#FFFACC',
    borderRadius: 11,
    padding: 30
    // marginTop: 20
  },
  findYourText: {
    // fontWeight: 400,
    fontSize: 16
  },
  sideKickText: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  searchBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 34,
    backgroundColor: 'white',
    borderRadius: 16
  },
  searchInput: {
    width: 195,
    height: 34,
    borderRadius: 15,
    backgroundColor: 'white',
    paddingStart: 10,
    marginEnd: 20
  }

});
