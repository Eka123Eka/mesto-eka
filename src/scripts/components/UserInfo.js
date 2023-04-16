export default class UserInfo {
  constructor(selectors) {
    this.name = document.querySelector(selectors.name);
    this.career = document.querySelector(selectors.career);
    this.avatar = document.querySelector(selectors.avatar)
  }

  getUserInfo () {
    return {
      name: this.name.textContent,
      career: this.career.textContent,
      avatar: this.avatar.src
    }
  }

  setUserInfo ({ name, about, avatar, _id }) {
    this.name.textContent = name;
    this.career.textContent = about;
    this.avatar.src = avatar;
    this._idUser = _id;
  }

  getUserId() {
    return this._idUser;
  }
}
