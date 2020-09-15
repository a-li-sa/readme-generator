const token = require('../token.js');

const config = {
  headers: {'Authorization': token}
}
const api = {
  async getUser(username) {
    const axios = require('axios');
    try {
      const { data: { avatar_url, email } } = await axios.get(`https://api.github.com/users/${username}`, config);
      return {
        avatar_url,
        email
      }
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = api;
