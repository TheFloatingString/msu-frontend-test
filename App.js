import React, { Component } from 'react';
import { AppRegistry, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


URL = 'url for backend access'

class NewsCard {
  render() {
    return (
      <Card
        title={this.props.title}
        image={uri: this.props.imageuri}>
        <Text style={{marginBottom: 10}}>
          {this.props.text}
        </Text>
        <Button
          icon={<Icon name='touch_app' color='#ffffff' />}
          backgroundColor='#0000cc'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}} />
      </Card>
    )
  }
}

export default class LotsOfGreetings extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      results = [],
    }

  }

  get_data() {
    fetch(URL)
      .then(response => response.json())
      .then(data => this.setState({results: data.results}))
  }
 
  const items = this.state.results.map((result) => <NewsCard title=result.title, imageuri=result.imageuri, text=result.text />)

  render() {

    // for (i=0, i < this.results.length, i++){
    //   items.push(<NewsCard title=this.>)
    // }

    return (
      <View style={{alignItems: 'center', margin: 10}}>
        {items}
      </View>
    );
  }
}


// skip this line if using Create React Native App

AppRegistry.registerComponent('AwesomeProject', () => LotsOfGreetings);
