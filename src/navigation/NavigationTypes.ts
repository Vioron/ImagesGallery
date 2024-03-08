import {StackNavigationProp} from "@react-navigation/stack";

type StackParamList = {
  ContentBlock:  undefined 
  BigPhoto: { uri: string }

}

type NavigationProps = StackNavigationProp<StackParamList>;

export default NavigationProps;
