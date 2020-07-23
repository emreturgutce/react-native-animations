import React from "react";
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listItemWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Settings</Text>
        </View>
        <FlatList
          data={items}
          renderItem={({ item }) => <ListItem {...item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const ListItem = ({ description }: any) => {
  return (
    <Swipeable
      renderLeftActions={() => <LeftItem />}
      renderRightActions={() => <RightItem />}
    >
      <View style={styles.listItem}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Swipeable>
  );
};

const LeftItem = () => {
  return (
    <View style={styles.leftItem}>
      <Text style={styles.leftItemText}>Open</Text>
    </View>
  );
};

const RightItem = () => {
  return (
    <View style={styles.rightItem}>
      <TouchableOpacity style={styles.deleteButtonStyle}>
        <Text style={styles.textButtonStyle}>Delete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.archiveButtonStyle}>
        <Text style={styles.archiveTextButtonStyle}>Archive</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    backgroundColor: "#eee",
  },
  titleWrapper: {
    alignItems: "flex-start",
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginLeft: 20,
    color: "black",
    marginVertical: 20,
  },
  leftItem: {
    flex: 1,
    backgroundColor: "#76a21e",
    justifyContent: "center",
  },
  archiveButtonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#3e64ff",
  },
  archiveTextButtonStyle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  textButtonStyle: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  deleteButtonStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#c00000",
  },
  rightItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "yellow",
    alignItems: "center",
  },
  leftItemText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#fff",
  },
  listItemWrapper: {
    flex: 1,
    flexDirection: "column",
  },
  listItem: {
    paddingHorizontal: 10,
    justifyContent: "center",
    borderTopWidth: 0.6,
    borderBottomWidth: 0.6,
    borderBottomColor: "#ccc",
    borderTopColor: "#ccc",
    flex: 1,
    height: 60,
    backgroundColor: "#fff",
  },
  item2: {
    flex: 4,
    justifyContent: "center",
  },
  item: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "center",
  },
  textBtn: {
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    width: "80%",
    margin: 5,
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    color: "#000",
  },
});

const items = [
  {
    id: 1,
    name: "item1",
    description: " +1 213 323 2343 ",
  },
  {
    id: 2,
    name: "hayani",
    description: " +1 513 323 2646",
  },
  {
    id: 3,
    name: "Oho",
    description: " +1 613 673 2646 ",
  },
  {
    id: 4,
    name: "Name",
    description: " +1 913 323 8846 ",
  },
  {
    id: 5,
    name: "item6",
    description: " +1 343 683 2646",
  },
  {
    id: 14,
    name: "item1",
    description: "+1 613 323 5656",
  },
  {
    id: 25,
    name: "hayani",
    description: "+1 883 000 2646 ",
  },
];

export default App;
