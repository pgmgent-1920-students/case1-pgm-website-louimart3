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
      <div class="filter container">
      <p>Docenten</p>
      <p>Team</p>
    </div>
        <div class="container allInfo">

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
    const info = document.querySelector('.allInfo');
    const filter = document.querySelectorAll('.filter p');
    const dataDocenten = await BAAS.getDocenten();
    const dataStudenten = await BAAS.getStudenten();

    filter[0].addEventListener('click', () => {
      info.innerHTML = ' ';
    
    return dataDocenten.map(docent => info.innerHTML += `
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
    });

    filter[1].addEventListener('click', () => {
      info.innerHTML = ' ';

      return dataStudenten.records.map(student => info.innerHTML += `
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
    });

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