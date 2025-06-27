import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Match } from "../screens/adopter/Match";
import { Saved } from "../screens/adopter/Saved";
import { Profile } from "../screens/Profile";
import { Requests } from "../screens/Requests";
import { UserIcon, BookmarkSimpleIcon, ChatCircleIcon, PawPrintIcon } from "phosphor-react-native";

const Tab = createBottomTabNavigator();

export function BottomTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Match"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: true,
                tabBarIcon: ({ color, size }) => {
                    if (route.name === "Profile") {
                        return <UserIcon size={32} color={color} weight="fill" />
                    } else if (route.name === "Match") {
                        return <PawPrintIcon size={32} color={color} weight="fill" />
                    } else if (route.name === "Saved") {
                        return <BookmarkSimpleIcon size={32} color={color} weight="fill" />
                    } else if (route.name === "Requests") {
                        return <ChatCircleIcon size={32} color={color} weight="fill" />
                    }
                },
                tabBarStyle: {
                    height: 80,
                    paddingTop: 10
                },

            })}
        >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Match" component={Match} />
            <Tab.Screen name="Saved" component={Saved} />
            <Tab.Screen name="Requests" component={Requests} />
        </Tab.Navigator>
    );
}