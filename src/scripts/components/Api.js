class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, { headers: this._headers })
      .then(res => this._checkResponse(res))
      .catch(err => console.log(`getUserInfo - ${err}`));
  }
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, { headers: this._headers })
      .then(res => this._checkResponse(res))
      .catch(err => console.log(`getInitialCards - ${err}`));
  }
  sendUserInfo( { name, career } ) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ name: name, about: career })})
      .then(res => this._checkResponse(res))
      .catch(err => console.log(`PATCH ${name}, ${career} - ${err}`));
  }
  addNewCard( { name, link } ) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name: name, link: link})})
      .then(res => this._checkResponse(res))
      .catch(err => console.log(`POST ${link} - ${err}`));
  }
  deleteCard(idCard) {
    return fetch(`${this._baseUrl}/cards/${idCard}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then(res => this._checkResponse(res))
      .catch(err => console.log(`DELETE ${idCard} - ${err}`));
  }
  toogleLike(idCard, isLike) {
    return fetch(`${this._baseUrl}/cards/${idCard}/likes`, {
      headers: this._headers,
      method: isLike ? 'DELETE' : 'PUT'
    })
      .then(res => this._checkResponse(res))
      .catch(err => console.log(`TOGGLE like ${idCard} isLike = ${isLike} - ${err}`));
  }
  sendAvatar({ urlAvatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ avatar: urlAvatar })})
      .then(res => this._checkResponse(res))
      .catch(err => console.log(`PATCH Avatar ${urlAvatar} - ${err}`));
  }
  _checkResponse(res) {
    if (res.ok) {
      return res.json()
    } else {
      return Promise.reject(`Ошибка: ${res.status} - ${res.statusText}`)
    }
  }
}

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: '78fa951e-0cae-4fbe-aca5-f0de42ec035a',
    'Content-Type': 'application/json'
  }
});
