import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {fetchStories} from '../actions';
import {connect} from 'react-redux';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import CardSection from './CardSection';


class Profile extends Component {

componentWillMount() {
    console.log("Fetching stories with curren");
    if (this.props.user) {
      if (this.props.stories.length == 0) {
        // Fetch stories
        console.log("Fetching stories");
        this.props.fetchStories(this.props.user.access_token);
      }
    }
  }

  renderStories() {
    if (!this.props.user) {
      //Goto login
      return <div></div>
    }
    if (this.props.stories.length == 0) {
      return <View></View>
    }
    else {
      // console.log("Here are the current stories\n");
      // console.log(JSON.stringify(this.props.stories,null,2));

    }
    return (
      <View>
        <CardSection>
            <Text>User {this.props.user.username}</Text>
        </CardSection>
        <FlatList
          contentInset={{top:0,left:0,bottom:200,right:0}}
          data={this.props.stories}
          keyExtractor= {(item,i) => {return item._id;}}
          renderItem = {({item}) => {
            // console.log("Here is the current story\n");
            // console.log(JSON.stringify(item.text,null,2));
            return (
              <Card>
                <CardSection>
                  <Text>{item.text}</Text>
                </CardSection>

                <CardSection>
                  <Image
                    style={{width: null,flex:1, height: 300}}
                    source={{uri: `http://192.168.0.103:5000/images/${item._id}.jpg`}}
                  />
                </CardSection>

                <CardSection>
                  <Text>{item.likes.length} likes</Text>

                </CardSection>

                <CardSection>

                  <Text>{item.dislikes.length} dislikes</Text>

                </CardSection>

                <CardSection>
                  <Text>{item.comments.length} comments</Text>
                </CardSection>
              </Card>
            );
          }}
          ></FlatList>
        </View>
      );
    }

    render() {
      return (
        <View style={{flex:1}}>
          {this.renderStories()}
        </View>
      );
    }
  }
  function mapStateToProps(state) {
    return {
      user:state.user,
      stories: state.stories
    }
  }
  export default connect(mapStateToProps, {fetchStories})(Profile);
