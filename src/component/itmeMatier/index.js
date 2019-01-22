import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { black } from 'ansi-colors';
import { CheckBox,Avatar } from "react-native-elements";

export default class ItemMatier extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          
        }
    }
    componentDidMount() {
        console.log("props",this.props)
        console.log("donner",this.state.donner)
    }
  render() {
    return (        
      <View  donner={this.props.data} style={{padding:5,height:120,borderColor:"#ADADAD",borderRadius:7, borderWidth: 0.9,alignContent:"center",margin:2, flexDirection: "row",backgroundColor:"white",alignItems:"center",marginHorizontal:20}}> 
    <View style={{width:200}}>
        <Text style={{padding:5,color: 'black' ,fontSize: 20,}}> {this.props.data.name }</Text>
        </View>
        <View  style={{width:40}}>
        <Text style={{padding:5}}> {this.props.data.moyen }</Text>
        </View>
        <Avatar
 medium
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
       
        {/* <CheckBox
      
        
checked={true}

      /> */}
     
      </View>
    )
  }
}