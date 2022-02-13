import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,TextInput,ScrollView,Alert,Modal,Pressable,ImageBackground,ActivityIndicator} from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Mainscreen(){
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleLoading = () => {
    setIsLoading(!isLoading);
  };
  return(
    <ImageBackground
    source={require('C:/androidclub/banking/src/Images/Background.png')}
    style={{width:'100%',height:'95%'}}>
      <View
      style={styles.design}>
        <Icon name='menu'size={30} color="white" style={{width:20}}></Icon>
        <Icon name="account-circle-outline" size={30} color="white" style={{marginLeft:280}}></Icon>
      </View>
      <View style={{paddingHorizontal:40,marginTop:25,marginBottom:25}}>
        <Text style={styles.txtdesign}>
          Hello, Gauthama
        </Text>
      </View>
      <View style={styles.search}>
       <Image source={require('C:/androidclub/banking/src/Images/search1.jpg')} style={{width:25,height:35}}></Image>
        <TextInput placeholder='Search your contacts to send money' style={{paddingHorizontal:20,fontSize:14,color:"white"}}></TextInput>
      </View>
      <Text style={{marginTop:75,fontSize:17,marginLeft:20,color:"midnightblue"}}>
        Businesses & Bills
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} 
      style={{marginRight:-10,marginTop:-60}}>
        <View style={{...styles.scrollspace,backgroundColor:"lightseagreen"}}>
          <Icon name="amazon" color="white" size={32}></Icon>
        </View>
        <View style={{...styles.scrollspace,backgroundColor:"orangered"}}>
          <Icon name="movie" color="white" size={32}></Icon>
        </View>
        <View style={{...styles.scrollspace,backgroundColor:"red"}}>
          <Icon name="netflix" color="black" size={32}></Icon>
        </View>
        <View style={{...styles.scrollspace,backgroundColor:"steelblue"}}>
          <Icon name="bank" color="white" size={32}></Icon>
        </View>
        <View style={{...styles.scrollspace,backgroundColor:"darkseagreen"}}>
        <Icon name="bus" color="white" size={32}></Icon>
        </View>
        <View style={{...styles.scrollspace,backgroundColor:"cornflowerblue"}}>
          <Icon name="food" color="white" size={32}></Icon>
        </View>
        <View style={{...styles.scrollspace,backgroundColor:"crimson"}}>
          <Icon name="airplane-takeoff" color="white" size={32}></Icon>
        </View>
        <View style={{...styles.scrollspace,backgroundColor:"lightpink"}}>
          <Icon name="ticket" color="white" size={32}></Icon>
        </View>
        <View style={{...styles.scrollspace,backgroundColor:"black"}}>
          <Icon name="dots-horizontal" color="white" size={32}></Icon>
        </View>
     </ScrollView>
     <Text style={{marginBottom:10,marginLeft:20,fontSize:17,color:"midnightblue",marginVertical:50,justifyContent:"space-between"}}>
       Features
     </Text>
     <View style={{justifyContent:"space-between",alignItems:"center",marginBottom:150,flexDirection:"column",flex:2}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <View style={styles.modalView}>
            <Text>Feature not yet enabled</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.modalbutton}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Make payments</Text>
      </Pressable>
      </View>

      <View style={styles.modalbutton}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>View account balance</Text>
      </Pressable>
      </View>

      <View style={styles.modalbutton}>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={toggleLoading}
      >
        <Text style={{...styles.textStyle,justifyContent:"center",textAlignVertical:"top"}}>{isLoading? "close history":"Transactions"}</Text>
      </Pressable>
      </View>
      <View
        style={{...styles.modalbutton,backgroundColor: isLoading ? "midnightblue" : "midnightblue"}}
        >
          {isLoading && <ActivityIndicator size="large" color="paleturquoise"/>}
        </View>
    </View>
      <View style={{flex:1,flexDirection:"row",alignItems:"center",marginTop:10,paddingHorizontal:10}}>
        <Icon name="plus-circle-outline" size={30} color="tomato" style={{width:30,marginLeft:20}} ></Icon>
        <Icon name="home" size={30} color="tomato" style={{width:30,marginLeft:130}} ></Icon>
        <Icon name="sync-circle" size={30} color="tomato" style={{width:30,marginLeft:130}} ></Icon>
    </View>
    </ImageBackground>

  )
  }

const styles=StyleSheet.create({
  design:{
    flexDirection:"row",
    marginTop:40,
    alignItems:'center',
    paddingHorizontal:40
  },
  txtdesign:{
    fontSize:20,
    color:"white"
  },
  search:{
    flexDirection:"row",
    backgroundColor:"white",
    borderRadius:40,
    alignContent:"center",
    paddingVertical:15,
    paddingHorizontal:20,

    marginTop:100
  },
  scrollspace:{
    alignItems:"center",
    justifyContent:"center",
    height:66,
    width:66,
    borderRadius:50,
    marginLeft:22,
    marginRight:22,
    marginTop:75,

  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17
  },
  modalbutton:{
    marginTop:-15,
    justifyContent:"center",
    marginVertical:30,
    margin:30,
    marginHorizontal:15
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 1
  },
  buttonOpen: {
    backgroundColor: "mediumslateblue",
  },
  buttonClose: {
    backgroundColor: "midnightblue",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalBackground: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  design1:{
    width:150,
    height:55,
    margin:20,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:75,
    backgroundColor:'coral'
  }
});