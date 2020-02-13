class GitHub {
  constructor() {
    this.client_id = 'c87492feae1adbb1f11a';
    this.client_secret = 'cab1395374149085d0a9d44dfca5be90a69de297';
  }

  async getUser(user) {
    const profileResponse = await fetch(`
      https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}
      `);
    const profile = await profileResponse.json();

    return {
      profile
    }
  }
}