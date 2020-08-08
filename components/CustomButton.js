import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { CustomText } from "./CustomText";
import COLORS from "../commons/colors";

export const CustomButton = ({ title, style, onPress, ...rest }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress} {...rest}>
      <CustomText weight="semibold" style={styles.text}>{title}</CustomText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width:80,
    backgroundColor: COLORS.lightGray,
    alignItems: "center",
    borderRadius:40,
  },
  text: {
    color: "black",
    fontSize:16,
  },
});
