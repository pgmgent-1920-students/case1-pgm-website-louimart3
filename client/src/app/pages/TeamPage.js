import { BAAS } from '../services';

class TeamPage {
  async getDataDocenten() {
    const data = await BAAS.getDocenten();
    return data.map(docent => `
      <div class="col-6 col-sm-4">
        <div class="box">
          <img class="" src="${docent.img}" alt="">
          <div class="box-text">
            <p>${docent.firstName} ${docent.lastName}</p>
            <p>${docent.mainFunction}</p>
          </div>
        </div>
      </div>
    `).join('');
  };
  

  async render() {
    return `
      <div class="page page--team">
        <div class="container">
          <h1>Team</h1>
          <h3>Meet the team!</h3>
          <div class="row ">
            ${await this.getDataDocenten()}
          </div>
        </div>
      </div>
    `;
  }

  async afterRender() {
    // Connect the listeners
    return this;
  }

  async mount() {
    // Before the rendering of the page
    return this;
  }

  async unmount() {
    // After leaving the page
    return this;
  }
}

export default TeamPage;