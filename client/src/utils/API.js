import request from "request";

export default {
  search: function(searchterm) {
    return request.get({
        url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
        qs: {
          'api-key': "30372883e9d3418786ccec672e21332b",
          'q': searchterm,
          'sort': "newest"
        }
      }, function(err, response, body) {
        body = JSON.parse(body);
        console.log(body);
      })
  }
};