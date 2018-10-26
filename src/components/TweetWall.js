import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // todo: componentWillMount()
  componentWillMount(){
    this.setState({tweets: this.props.newTweets})
  }
  // todo: shouldComponentUpdate()
  shouldComponentUpdate(nextProps){
    return nextProps.newTweets.length > 0
  }
  // todo: componentWillReceiveProps()
  componentWillReceiveProps(){
    this.setState({tweets: this.props.newTweets})
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
