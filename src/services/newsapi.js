import axios from "axios";
import _ from "lodash";

const get_sources = () => {
  return axios
    .get(
      "https://newsapi.org/v2/sources?language=en&apiKey=8d617e138c08436d96e34609ae62939e" +
        process.env.REACT_APP_NEWS_API_KEY
    )
    .then(res => {
      return _.sampleSize(res.data.sources, 3);
    })
    .catch(err => {
      console.log(err.message);
      alert(err.message);
    });
};

const get_articles = source => {
  return axios
    .get(
      "https://newsapi.org/v2/top-headlines?sources=" +
        source +
        "&apiKey=8d617e138c08436d96e34609ae62939e"
    )
    .then(res => {
      return _.sampleSize(res.data.articles, 5);
    });
};

export { get_sources, get_articles };
