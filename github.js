class GitHub {
  constructor() {
    this.client_id = 'c87492feae1adbb1f11a';
    this.client_secret = 'cab1395374149085d0a9d44dfca5be90a69de297';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}` + 
      `?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    
    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos` + 
      `?per_page=${this.repos_count}&sort=${this.repos_sort}` + 
      `&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    
    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}