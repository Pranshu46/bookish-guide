import React, { Component } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  Image,
  Text,
} from "react-native";
import axios from "axios";
import { RFValue } from "react-native-responsive-fontsize";

export default class RecommendedScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const url =
      "https://6c2d-2405-201-8008-e095-548b-ab69-a0e4-2179.ngrok.io/recommended-articles";
    axios
      .get(url)
      .then(async (response) => {
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItems = ({ item, index }) => {
    console.log(item)
    return (
      <View style={styles.cardContainer}>
        
      </View>
    );
  };

  render() {
    const { data } = this.state;
      return (
        <View style={styles.container}>
          <ImageBackground
            source={require("../assets/bg.png")}
            style={{ flex: 1 }}
          >
            <FlatList
              data={data}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItems}
            />
          </ImageBackground>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardContainer: {
    borderRadius: RFValue(10),
    height: RFValue(200),
    marginHorizontal: RFValue(20),
    marginVertical: RFValue(15),
  },
  posterImage: {
    flex: 1,
    borderRadius: RFValue(10),
  },
  title: {
    fontSize: RFValue(15),
    fontWeight: "bold",
    color: "white",
    fontFamily: "monospace",
    marginVertical: RFValue(2),
  },
  subtitle: {
    fontSize: RFValue(10),
    fontWeight: "bold",
    color: "white",
    fontFamily: "monospace",
    marginVertical: RFValue(2),
  },
  movieTitleContainer: {
    position: "absolute",
    backgroundColor: "#3c8ed9",
    opacity: 0.7,
    padding: RFValue(10),
    bottom: RFValue(10),
    left: RFValue(10),
    borderRadius: RFValue(10),
  },
});
