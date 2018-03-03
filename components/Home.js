import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {fetchStories, createStory, likeStory, dislikeStory } from '../actions';
import {connect} from 'react-redux';
import Card from './Card';
import Input from './Input';
import Button from './Button';
import CardSection from './CardSection';
import {Actions} from 'react-native-router-flux';


class Home extends Component {
  state={story:''}

  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => {Actions.profile({});}}
        color="#fff"
        > Profile Page</Button>
      ),
    };

    componentWillMount() {
      console.log("Fetching stories with curren");
      if (this.props.stories.length == 0) {
        // Fetch stories
        console.log("Fetching stories");
        this.props.fetchStories(this.props.user.access_token);
      }
    }

    onSubmitPress(event) {
      this.props.createStory(this.state.story,this.props.user.access_token);
    }

    renderStories() {

      if (!this.props.user) {
        //Goto login
        return <div></div>
      }
      const accessToken = this.props.user.accessToken;
      if (this.props.stories.length == 0) {
        return <View></View>
      }
      else {
        // console.log("Here are the current stories\n");
        // console.log(JSON.stringify(this.props.stories,null,2));
      }
      return (
        <View>
          {/* <CardSection> */}
          <Input label="Story" value={this.state.story} onChangeText={text => {this.setState({'story':text})}} />
          {/* </CardSection> */}
          <CardSection>
            <Button onPress={this.onSubmitPress.bind(this)}> Submit </Button>
          </CardSection>
          <FlatList
            contentInset={{top:0,left:0,bottom:200,right:0}}
            data={this.props.stories}
            keyExtractor= {(item,i) => {return item._id;}}
            extraData= {this.props.user}
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
                    <Button onPress={() => {this.props.likeStory(item._id, this.props.user.access_token)}}>{item.likes.length} likes</Button>

                  </CardSection>

                  <CardSection>

                    <Button onPress={() => {this.props.dislikeStory(item._id, this.props.user.access_token)}}>{item.dislikes.length} dislikes</Button>

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
    export default connect(mapStateToProps, {fetchStories, createStory, likeStory, dislikeStory})(Home);
