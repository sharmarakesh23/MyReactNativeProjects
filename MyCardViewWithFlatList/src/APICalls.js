import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
//import InboxCard from './InboxCard';
import axios from 'axios';


export default class AppCall extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      error: "",
    };
  }


  
  componentDidMount() {
    this.makeSignInRequest();
  }

  makeSignInRequest = () => {

    const loginUrl = `http://www.shaadi.com/native-apps2/user/login?email=saanika@rishik.in&password=098f6bcd4621d373cade4e832627b4f6&stop_overview=1&appver=5.3.7&os=native-iphone&deviceid=9B2D0A6D-0F10-4077-98AD-D449A9BBB52D&regmode=native-app`

    fetch(loginUrl)
      .then(res => res.json())
      .then(res => {

        const url = decodeURIComponent(
          `http://www.shaadi.com/native-apps2/notification/list?sid=${res.data.sid}&ml=${res.data.memberlogin}&abc=${res.data.abc}&appver=5.3.7&os=native-iphone&deviceid=9B2D0A6D-0F10-4077-98AD-D449A9BBB52D&auth=dcb4fed39cee27604d3c05583c885754&evt_ref=aW5ib3gtbm90aWZpY2F0aW9ucw==&entpt=ZGlyZWN0`
          //`http://ww4.shaadi.com/api/profiles/${this.state.memberlogin}/requests?action=pending&type=connect&limit_per_page=20&profile_options=%7B%22fieldset%22:%5B%22mini_profile%22,%22account%22,%22profession%22,%22education%22,%22origin%22%5D%7D&photo_options=%7B%22fieldset%22:%5B%22photos%22%5D,%22blur%22:true,%22file_extension%22:%22webp%22,%22profile_photo%22:true,%22size%22:%5B%22small%22,%22medium%22,%22semilarge%22,%22large%22,%22120X120%22,%22450X600%22,%22750X1004%22%5D%7D&derived_options=%7B%22fieldset%22:%5B%22relationship_actions%22,%22profile_fields%22,%22chat_details%22%5D%7D&derived_text=%7B%22fieldset%22:%5B%22matching_data%22,%22income%22%5D,%22match_count%22:3%7D&premium=false&access_token=${this.state.abc}`
          //`http://www.shaadi.com/native-apps2/notification/list?sid=B50FCB9C5AF3FF01729F3150B1BF46F31518428393&ml=KSH14203910&abc=2D0266AC0678D25C67402EFCB9065EC81518436152%7CKSH14203910%7C&appver=5.3.7&os=native-iphone&deviceid=9B2D0A6D-0F10-4077-98AD-D449A9BBB52D&auth=dcb4fed39cee27604d3c05583c885754&evt_ref=aW5ib3gtbm90aWZpY2F0aW9ucw==&entpt=ZGlyZWN0`
        );
       // const url = `https://randomuser.me/api/?seed=1&page=1&results=20`;
        this.fetchProfiles(searchUrl);
      })
      .catch(error => {
        console.log(error)
      });
  };


  async fetchProfiles(url) {
    const users = await axios.get(url)
    this.setState({
      profiles: users.data.profileData,
      abc: `Got Profiles >>>`,
    });
      // .then(res => {

      //   console.log(res.data.profileData);

      //   this.setState({
      //     profiles: res.data.profileData,
      //     abc: `Got Profiles >>>`,
      //   });
      // })
      // .catch(error => {
      //   console.log(error);
      // //this.setState({ profiles: [], error: JSON.stringify(error), abc: JSON.stringify(error) });
      // });
  }




  render() {

    return (

      // <View style={styles.container}>
      //   <Text syle={styles.abcText}>{this.state.abc}</Text>
      // </View>
      <ScrollView style = {styles.container}>
        {this.state.profiles.map((profile,index) => {
          return (
            <Text key={index}> ${profile.display_name}</Text>

            // <InboxCard
            //   desc={profile.display_name}
            //   location={profile.notification}
            //   avatar={{ uri: profile.medium_image_path }}
            //   buttonTitle={profile.cell}
            //   onPress={profile.onPress}
            // />
          )
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  abcText: {
    color: "blue",

  },
});
