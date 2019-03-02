
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

}