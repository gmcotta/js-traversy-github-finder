const github = new GitHub();
const ui = new UI();

const searchUser = document.getElementById('search-user');
searchUser.addEventListener('keyup', (evt) => {
  evt.preventDefault();

  const userText = evt.target.value;
  if (userText !== '') {
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        ui.showProfile(data.profile);
      }
    });
  } else {
    ui.clearProfile();
  }
});