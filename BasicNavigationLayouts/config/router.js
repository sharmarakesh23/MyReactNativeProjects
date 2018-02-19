import { TabNavigator, StackNavigator } from "react-navigation"
import Feed from "../screens/Feed"
import Me from "../screens/Me"
import Profile from "../screens/Profile"

export const feedStack = StackNavigator({
  Feed: {
    screen: Feed
  },
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      title: `${navigation.state.params.name.first}`
    }
  }
})

const Tabs = TabNavigator({
  Feed: {
    screen: feedStack
  },
  Me: {
    screen: Me
  }
})

export default Tabs
