
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

  submit_post({ commit }, user) {
    const account = user.user.username;
    //get title
    const title = user.post.title;
    //get body
    const body = user.post.body;
    //get tags and convert to array list
    const tags = user.post.tags;
    console.log("tags: ", tags);
    const taglist = tags.split(' ');
    console.log("tags split: ", taglist);
    //make simple json metadata including only tags
    const json_metadata = JSON.stringify({ tags: taglist });
    //generate random permanent link for post
    const permlink = Math.random()
      .toString(36)
      .substring(2);
    const parent_author = '';
    const parent_permlink = taglist[0];
    console.log("json", json_metadata);
    user.api.comment(parent_author, parent_permlink, account, permlink, title, body, json_metadata, function (err, res) {
      console.log(err, res)
    });
  },

  vote_post({ commit }, user) {
    const voter = user.user.username;
    const author = user.post.author;
    const permlink = user.post.permlink;
    const weight = 50;
    const api = user.api;

    api.vote(voter, author, permlink, weight, function (err, res) {
      console.log(err, res)
    });
  },

  async get_author_info({ commit }, user) {
    const accSearch = user.username;
    const max = 1;
    const autor = await user.client.database.call('lookup_accounts', [accSearch, max]);
    console.log(autor);
    commit("SET_AUTHOR_INFO", autor);
  },

}