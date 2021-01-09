import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import MyGroupsScreen from "./GroupScreens/MyGroups";
import SearchGroupsScreen from "./GroupScreens/SearchGroups";
import CreateGroupScreen from "./GroupScreens/CreateGroup";
import SingleGroupScreen from "./GroupScreens/SingleGroup";
import PhotoCaptureScreen from "./PhotoCapture";
import ChallengeFeedScreen from "./GroupScreens/ChallengeFeed";

const GroupStack = createStackNavigator();

const Groups = (props) => {
  const { navigation } = props;
  return (
    <GroupStack.Navigator>
      <GroupStack.Screen
        name="MyGroups"
        component={MyGroupsScreen}
        options={{ headerShown: false }}
      />
      <GroupStack.Screen name="SearchGroups" component={SearchGroupsScreen} />
      <GroupStack.Screen name="CreateGroup" component={CreateGroupScreen} />
      <GroupStack.Screen
        name="SingleGroup"
        component={SingleGroupScreen}
        options={{ headerShown: true }}
      />
      <GroupStack.Screen name="PhotoCapture" component={PhotoCaptureScreen} />
      <GroupStack.Screen
        name="ChallengeFeed"
        component={ChallengeFeedScreen}
        options={{ headerShown: false }}
      />
    </GroupStack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default Groups;

{
  /* <View style={styles.container}>
      <Text>Groups</Text>
      <Button/>
      <Button title="Camera" onPress={() => navigation.navigate("Camera")} />
    </View> */
}
