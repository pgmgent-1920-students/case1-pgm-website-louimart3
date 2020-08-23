class NotFoundPage {
  async render () {
    return `
      <div class="page page--404">
        <h1>404</h1>
        <a href="home" data-navigo>Home</a>
        <div class="container">
        <img src="https://media2.giphy.com/media/lgcUUCXgC8mEo/giphy.gif?cid=ecf05e47wkzvo7al1x1c6o30iat8lsglxrgksb1ifi6r96er&rid=giphy.gif">
        </div>

      </div>
    `;
  }
}

export default NotFoundPage;
