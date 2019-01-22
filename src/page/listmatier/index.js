import React, { Component } from "react";
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import ItmeMatier from "../../component/itmeMatier/index";
import { Header } from "react-native-elements";

export default class ListMatier extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: [
        { name: "Client", id: 1, moyen: 18 },
        { name: "Client", id: 2, moyen: 10 },
        { name: "Client", id: 3, moyen: 15 }
      ],
      fadeAnim: new Animated.Value(1),
      fadeAnim2: new Animated.Value(-3),
      fadeAnim3: new Animated.Value(-3),
      inputRange: [0, 0],
      outputRange: [0, 0],
      inputRange2: [0, -70],
      outputRange2: [-70, 0],
      inputRange3: [0, 0],
      outputRange3: [0, 0],
      afficher: false,
      idSelect: ""
    };
  }

  componentDidMount() {}
  anullerAnnimation() {
    this.setState({
      inputRange: [0, 0],
      outputRange: [0, 0],
      inputRange2: [0, -70],
      outputRange2: [-70, 0],
      inputRange3: [0, 0],
      outputRange3: [0, 0]
    });

    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 500
    }).start();
    Animated.timing(
      this.state.fadeAnim2,
      {
        toValue: -3,
        duration: 300
      },
      {}
    ).start();
    Animated.timing(
      this.state.fadeAnim3,
      {
        toValue: -9,
        duration: 300
      },
      {}
    ).start();
  }
  appliqueAnnimation() {
    this.setState({
      inputRange: [0, 1],
      inputRange2: [0, 1],
      outputRange: [70, 0],
      outputRange2: [20, 0],
      inputRange3: [0, 100],
      outputRange3: [0, 0]
    });
    Animated.timing(this.state.fadeAnim, {
      toValue: 2,
      duration: 600
    }).start();
    Animated.timing(
      this.state.fadeAnim2,
      {
        toValue: 2,
        duration: 600
      },
      {}
    ).start();
    Animated.timing(
      this.state.fadeAnim3,
      {
        toValue: 10,
        duration: 1000
      },
      {}
    ).start();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#2196f3" barStyle="light-content" />

        <ScrollView style={{ flex: 1 }}>
          {this.state.afficher == true ? (
            <Animated.View
              style={{
                opacity: this.state.fadeAnim3, // Binds directly
                transform: [
                  {
                    translateY: this.state.fadeAnim3.interpolate({
                      inputRange: this.state.inputRange3,
                      outputRange: this.state.outputRange3 // 0 : 150, 0.5 : 75, 1 : 0
                    })
                  }
                ]
              }}
            >
              <TouchableOpacity
                activeOpacity={0.1}
                onPress={() => {
                  this.anullerAnnimation();
                  this.setState({
                    afficher: false
                  });
                }}
              >
                <View
                  style={{
                    height: 130,
                    backgroundColor: "#2196f3",
                    flexDirection: "row"
                  }}
                >
                  <Icon
                    name="chevron-left"
                    size={30}
                    color="white"
                    style={{ margin: 20 }}
                  />
                  <Text style={{ margin: 20, color: "white", fontSize: 30 }}>
                    back
                  </Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          ) : (
            <Header
              backgroundColor={"#2196f3"}
              centerComponent={{
                text: "Hello",
                style: { color: "#fff", fontSize: 20 }
              }}
              leftComponent={{
                icon: "menu",
                color: "#fff",
                style: { padding: 20 },
                padding: 30,
                onPress: () => {
                  navigation.toggleDrawer();
                }
              }}
            />
          )}
          {this.state.response.map(y => {
            return (
              <Animated.View
                style={{
                  margin: 1,
                  opacity: this.state.fadeAnim, // Binds directly
                  transform: [
                    {
                      translateY: this.state.fadeAnim.interpolate({
                        inputRange: this.state.inputRange,
                        outputRange: this.state.outputRange // 0 : 150, 0.5 : 75, 1 : 0
                      })
                    }
                  ]
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.appliqueAnnimation();
                    this.setState({
                      afficher: true,
                      idSelect: y.id
                    });
                  }}
                >
                  {this.state.afficher == true &&
                  y.id == this.state.idSelect ? (
                    <ItmeMatier data={y} />
                  ) : null}
                  {this.state.afficher == false ? (
                    <ItmeMatier data={y} />
                  ) : null}
                </TouchableOpacity>
                {(this.state.afficher == true) &
                (y.id == this.state.idSelect) ? (
                  <ScrollView style={{ flex: 1 }}>
                    <View style={{ margin: 5 }}>
                      <View style={{ padding: 30, flexDirection: "row" }}>
                        <View style={{ height: 70 }}>
                          <Text>LastName: </Text>
                        </View>
                        <View style={{ height: 70 }}>
                        <Text> corine </Text>
                        
                        </View>
                      </View>

                      <View
                        style={{
                          padding: 30,
                          flexDirection: "row",
                          alignItems: "center",
                          alignContent: "center"
                        }}
                      >
                        <View style={{ marign: 10, height: 70 }}>
                          <Text>First Name : </Text>
                        </View>
                        <View style={{ marign: 10, height: 70 }}>
                          {/* <Text>14</Text> */}
                          <Text>lonking </Text>
                        </View>
                      </View>
                      <View style={{ padding: 30, flexDirection: "row" }}>
                        <View style={{ marign: 10, height: 70 }}>
                          <Text>Age : </Text>
                        </View>
                        <View style={{ marign: 10, height: 70 }}>
                        <Text>32 </Text>
                        </View>
                      </View>
                    </View>
                  </ScrollView>
                ) : null}
              </Animated.View>
            );
          })}
        </ScrollView>
        {this.state.afficher == true ? (
          <Animated.View
            style={{
              margin: 1,
              opacity: this.state.fadeAnim,
              transform: [
                {
                  translateY: this.state.fadeAnim2.interpolate({
                    inputRange: this.state.inputRange2,
                    outputRange: this.state.outputRange2
                  })
                }
              ]
            }}
          >
            <View
              style={{
                padding: 30,
                flexDirection: "row",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.anullerAnnimation();
                  this.setState({
                    afficher: false
                  });
                }}
              >
                <View
                  style={{
                    width: 60,
                    backgroundColor: "#2196f3",
                    height: 60,
                    borderRadius: 30,
                    margin: 20,
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Icon name="edit" size={30} color="white" />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.anullerAnnimation();
                  this.setState({
                    afficher: false
                  });
                }}
              >
                <View
                  style={{
                    width: 60,
                    backgroundColor: "red",
                    height: 60,
                    borderRadius: 30,
                    margin: 20,
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Icon name="save" size={30} color="white" />
                </View>
              </TouchableOpacity>
            </View>
          </Animated.View>
        ) : null}
      </View>
    );
  }
}
