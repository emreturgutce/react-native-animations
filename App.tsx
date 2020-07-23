import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { PinchGestureHandler } from "react-native-gesture-handler";

const App = () => {
  const scale = new Animated.Value(1);

  const handleGesture = Animated.event([{ nativeEvent: { scale } }], {
    useNativeDriver: true,
  });

  const _onGestureStateChange = (event: { nativeEvent: { scale: number } }) => {
    scale.setValue(event.nativeEvent.scale);
  };

  const scaleStyle = {
    transform: [
      { perspective: 200 },
      {
        scale,
      },
    ],
  };

  return (
    <View style={[styles.container]}>
      <PinchGestureHandler
        onGestureEvent={handleGesture}
        onHandlerStateChange={_onGestureStateChange}
      >
        <Animated.View style={[styles.circle, scaleStyle]} />
      </PinchGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 250,
  },
  circle: {
    width: 150,
    height: 150,
    alignSelf: "center",
    backgroundColor: "#c00000",
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
  },
  leftItem: {
    flex: 1,
    backgroundColor: "#76a21e",
    justifyContent: "center",
  },
});

export default App;
