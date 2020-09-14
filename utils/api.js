const config = {
  headers: {'Authorization': 'token 8317b8e3cd2282ea23f7796e5a4dbf2cd22ec6d6'}
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
