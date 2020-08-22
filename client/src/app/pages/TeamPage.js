import { BAAS } from '../services';
import {
  routes
} from '../router';

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

  async getDataStudenten() {
    const data = await BAAS.getStudenten();
    return data.records.map(student => `
      <div class="col-6 col-sm-4">
        <div class="box">
          <img class="" src="${student.fields.url}" alt="">
          <div class="box-text">
            <p>${student.fields.name_first} ${student.fields.name_last}</p>
            <p>${student.fields.quote_alt}</p>
            <a href="#!${routes.TEAM_DETAIL.replace(":id", student.id)}" data-navigo>meer</a>
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
          <h3>Meet the students!</h3>
          <div class="row ">
         
            ${await this.getDataStudenten()}
        
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