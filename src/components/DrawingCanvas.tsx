import React, { useState } from "react";
import { PanResponder, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const DrawingCanvas = () => {
  //* holds current drawing path as string
  const [currentPath, setCurrentPath] = useState("");
  //* holds all completed paths as array of strings
  const [paths, setPaths] = useState<string[]>([]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: (evt, gestureState) => {
      // start new path
      const { x0, y0 } = gestureState;
      const newPath = `M${x0},${y0}`;
      setCurrentPath(newPath);
    },
    onPanResponderMove: (evt, gestureState) => {
      // update current path
      const { moveX, moveY } = gestureState;
      const newPath = `${currentPath} L${moveX},${moveY}`;
      setCurrentPath(newPath);
    },
    onPanResponderRelease: () => {
      // finalize current path, reset for new path
      setPaths([...paths, currentPath]);
      setCurrentPath("");
    },
  });

  return (
    <View
      style={{ flex: 1 }}
      {...panResponder.panHandlers}
    >
      <Svg style={{ flex: 1 }}>
        {paths.map((path, index) => (
          <Path
            key={index}
            d={path}
            stroke='black'
            strokeWidth={4}
          />
        ))}
        <Path
          d={currentPath}
          stroke='black'
          strokeWidth={4}
        />
      </Svg>
    </View>
  );
};

export default DrawingCanvas;
