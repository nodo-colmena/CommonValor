
export default {

  tagged({ commit }, tag) {
    commit("set_tag", tag)
  },

  filtered({ commit }, filter) {
    commit("set_filter", filter)
  },

  async get_posts({ commit }, { tag, filter, num, client }) {
    const query = {
      tag: tag,
      limit: num,
    };  //hace quer

    client.database.getDiscussions(filter, query)
      .then(result => {
        console.log('Response received:', result);
        if (result) {
          result.forEach(post => {
            const json = JSON.parse(post.json_metadata); // body content
            post.image = json.image ? json.image[0] : "";
          })
          commit("set_posts", result)
        } else {
          console.log('error');
        }
      })

      .catch(err => {
        console.log(err);
      });
  },


  reset_counter({ commit }, number) {
    commit("set_contador", number)
  },

  get_selected_post({ commit }, post) {
    commit("set_details_post", post)
  },

  get_comments({ commit }, { author, permlink, client }) {
    /* console.log('perm'+permlink)
    console.log(author)
    console.log(client) */
    return new Promise((resolve, reject) => {
      client.database.call('get_content_replies', [author, permlink])
        .then((response) => {
          commit("set_comments_selected_post", response)
          resolve(response);
        })
        .catch(({ response }) => {
          reject(response)
        })
    });
  },



  submit_post({commit}, user) {
    console.log("Action printing:");
    console.log(user.user.access_token);

    //const posting_key = user.user.access_token;
    const posting_key = user.user.access_token;
    const account = user.user.username;
    const body = user.post.body;
    const title = user.post.title;
    const tags = user.post.tags;
    const taglist = user.post.tags.split(' ');
    const json_metadata = JSON.stringify({ tags: taglist });
    //generate random permanent link for post
    const permlink = Math.random()
        .toString(36)
        .substring(2);

    const payload = {
        author: account,
        body: body,
        json_metadata: json_metadata,
        parent_author: '',
        parent_permlink: taglist[0],
        permlink: permlink,
        title: title,
    }; 

    console.log('user.client.broadcast.comment:', payload);
    user.api.comment(payload.parent_author, 
      payload.parent_permlink, payload.author, payload.permlink, 
      payload.title, payload.body, payload.json_metadata, function (err, res) {
      console.log(err, res)
    });
/*      return new Promise((resolve, reject) => {
      user.client.broadcast.comment(payload, posting_key)
        .then((response) => {
          //commit("set_comments_selected_post", response)
          console.log('response:', response);
          resolve(response);
        })
        .catch((response ) => {
          console.log('reject:', response);
          reject(response)
          
        })
    });  */ 
  },

}