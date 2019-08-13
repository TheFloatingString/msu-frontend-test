import React from "react";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from "react-native-linear-gradient"; // Only if no expo
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  KeyboardAvoidingView,
  Linking
} from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";
import {
  Header,
  Card,
  ListItem,
  Button,
  Icon,
  Input,
  Avatar
} from "react-native-elements";

var news_dict = [
  {
    title: "MariMeet is Here!",
    imageuri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Coll%C3%A8ge_Marianopolis.JPG/1920px-Coll%C3%A8ge_Marianopolis.JPG",
    text: "MariMeet is a friendly afternoon to meet new students!"
  },
  {
    title: "MariMeet is Here!",
    imageuri:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Coll%C3%A8ge_Marianopolis.JPG/1920px-Coll%C3%A8ge_Marianopolis.JPG",
    text: "MariMeet is a friendly afternoon to meet new students!"
  }
];

const PostsPlaceholder = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
    <Header
      containerStyle={{ backgroundColor: "#02379E" }}
      centerComponent={{
        text: "Posts",
        style: { color: "#fff", fontSize: 20 }
      }}
    />
    <ScrollView>
      <NewsCard
        title="MariMeet is Here"
        imageuri="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Coll%C3%A8ge_Marianopolis.JPG/1920px-Coll%C3%A8ge_Marianopolis.JPG"
        text="MariMeet is a friendly afternoon to meet new students!"
      />
      <NewsCard
        title="Used Books Sale"
        imageuri="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Coll%C3%A8ge_Marianopolis.JPG/1920px-Coll%C3%A8ge_Marianopolis.JPG"
        text="Get second hand textbooks at a convenient price."
      />
    </ScrollView>
  </View>
);

const FormPlaceholder = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
    <Header
      containerStyle={{ backgroundColor: "#02379E" }}
      centerComponent={{ text: "Form", style: { color: "#fff", fontSize: 20 } }}
    />
    <KeyboardAvoidingView
      style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
      behavior="padding"
      enabled
    >
      <ScrollView>
        <FormCard />
      </ScrollView>
    </KeyboardAvoidingView>
  </View>
);

const CongressPlaceholder = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
    <Header
      containerStyle={{ backgroundColor: "#02379E" }}
      centerComponent={{
        text: "Congress",
        style: { color: "#fff", fontSize: 20 }
      }}
    />
    <ScrollView>
      <MemberCard
        title="Aria Khiabani"
        imageuri="http://msucongress.com/wp-content/uploads/2019/07/Aria-800x1068.jpg"
        text="President"
      />
      <MemberCard
        title="Ying Ge"
        imageuri="http://msucongress.com/wp-content/uploads/2019/07/YG-800x1068.jpg"
        text="Vice President"
      />
      <MemberCard
        title="Amanda Morrone"
        imageuri="http://msucongress.com/wp-content/uploads/2019/07/Amanda-800x1068.jpg"
        text="Vice President of Finance"
      />
      <MemberCard
        title="Ying Chen"
        imageuri="http://msucongress.com/wp-content/uploads/2019/07/YC-800x1068.jpg"
        text="Coordinator of Communications"
      />
      <MemberCard
        title="Michael Chalkhoun"
        imageuri="http://msucongress.com/wp-content/uploads/2019/07/Michael-800x1068.jpg"
        text="Coordinator of Student Advocacy"
      />
      <MemberCard
        title="Darya Jabbari"
        imageuri="http://msucongress.com/wp-content/uploads/2019/07/Darya-800x1068.jpg"
        text="Coordinator of Social Justice"
      />
      <MemberCard
        title="Andrew Petrecca-Berthelet"
        imageuri="http://msucongress.com/wp-content/uploads/2019/07/Andrew-800x1068.jpg"
        text="Coordinator of Social Activities"
      />
    </ScrollView>
  </View>
);

const FilesPlaceholder = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}>
    <Header
      containerStyle={{ backgroundColor: "#02379E" }}
      centerComponent={{
        text: "Files",
        style: { color: "#fff", fontSize: 20 }
      }}
    />
    <ScrollView style={{ padding: 20 }}>
      <FileItem
        title="file title"
        subtitle="date"
        chevron={true}
        filename="filename"
      />
      <FileItem
        title="file title"
        subtitle="date"
        chevron={true}
        filename="filename"
      />
      <FileItem
        title="file title"
        subtitle="date"
        chevron={true}
        filename="filename"
      />
      <FileItem
        title="file title"
        subtitle="date"
        chevron={true}
        filename="filename"
      />
    </ScrollView>
  </View>
);

class FileItem extends React.Component {
  render() {
    return (
      <ListItem
        style={{ borderBottomWidth: 1, borderColor: "#d4d4d4" }}
        title={this.props.title}
        subtitle={"Modified: " + this.props.subtitle}
        subtitleStyle={{ color: "grey" }}
        chevron={this.props.chevron}
        filename={this.props.filename}
      />
    );
  }
}

class NewsCard extends React.Component {
  render() {
    return (
      <Card title={this.props.title} image={{ uri: this.props.imageuri }}>
        <Text style={{ marginBottom: 10 }}>{this.props.text}</Text>
        <Button
          icon={<Icon name="fingerprint" color="#ffffff" />}
          backgroundColor="#03A9F4"
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0
          }}
          title="View now"
        />
      </Card>
    );
  }
}

class FormCard extends React.Component {
  render() {
    return (
      <View>
        <Card style={{ marginBottom: 30 }}>
          <Text>Name</Text>
          <Input />
        </Card>

        <Card style={{ marginBottom: 30 }}>
          <Text>Title</Text>
          <Input />
        </Card>

        <Card style={{ marginBottom: 30 }}>
          <Text>Message</Text>
          <Input multiline={true} />
        </Card>

        <Button
          icon={<Icon name="send" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 30,
            marginRight: 30,
            marginBottom: 0,
            marginTop: 10
          }}
          title="Send"
          buttonStyle={{
            backgroundColor: "#02379E"
          }}
        />
      </View>
    );
  }
}

class MemberCard extends React.Component {
  render() {
    return (
      <ListItem
        style={{ margin: 10, borderRadius: 5 }}
        Component={TouchableScale}
        friction={90} //
        tension={100} // These props are passed to the parent component (here TouchableScale)
        activeScale={0.95} //
        linearGradientProps={{
          colors: ["#3890e8", "#02379E"],
          start: [1, 0],
          end: [0.2, 0]
        }}
        leftAvatar={{ rounded: true, source: { uri: this.props.imageuri } }}
        title={this.props.title}
        titleStyle={{ color: "white", fontWeight: "bold" }}
        subtitleStyle={{ color: "white" }}
        subtitle={this.props.text}
        chevronColor="white"
      />
    );
  }
}

const styles = StyleSheet.create({
  label: {
    fontSize: 10
  }
});

const icons = {
  Posts: {
    mod: MaterialIcon,
    name: "chat"
  },
  Files: {
    mod: MaterialIcon,
    name: "info"
  },
  Form: {
    mod: SimpleLineIcon,
    name: "note"
  },
  Congress: {
    mod: MaterialIcon,
    name: "people"
  }
};

const TabNavigator = createMaterialTopTabNavigator(
  {
    Posts: PostsPlaceholder,
    Files: FilesPlaceholder,
    Form: FormPlaceholder,
    Congress: CongressPlaceholder
  },
  {
    initialRouteName: "Posts",
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      showIcon: true,
      labelStyle: styles.label,
      style: {
        backgroundColor: "#02379E"
      }
    },
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { name, mod: Icon } = icons[navigation.state.routeName];
        return <Icon name={name} color={tintColor} size={26} />;
      }
    })
  }
);

export default createAppContainer(TabNavigator);