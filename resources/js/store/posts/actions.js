
export default {
  tagged({commit}, tag) {
      commit("set_tag", tag)
  },
  filtered({commit}, filter) {
      commit("set_filter", filter)
  },
  get_posts({commit}, {tag, filter, num, client}) {
      const query = {
          tag:tag,
          limit:num,
      };  //hace query

      return new Promise((resolve, reject) => {
        client.database.getDiscussions(filter, query)
          .then((response) => {
              response.forEach(post => {
                  const json = JSON.parse(post.json_metadata); // body content
                  post.image = json.image ? json.image[0] : "";
              })
            commit("set_posts", response)
            resolve(response);
          })
          .catch(({ response }) => {
            reject(response)
          })
      });
  },


  get_client({commit},client){
    commit("set_client",{client})
  },
}