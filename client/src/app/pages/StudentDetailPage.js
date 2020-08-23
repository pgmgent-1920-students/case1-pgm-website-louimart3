import { BAAS } from '../services';

import {
  routes
} from '../router';

class studentDetailPage {
  async getStudents(id) {
    const student = await BAAS.getStudents(id);
    return `
    <div class="page page--studentDetail">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-12">
          <h1>${student.fields.name_first} ${student.fields.name_last}</h1>
          <p> ${student.fields.about}</p>
          <a class="" href="#!${routes.TEAM}" data-navigo>ga terug</a>
        </div>
        <div class="student_url col-sm-6 col-12">
          <img class="" src="${student.fields.url}" alt="">
        </div>
      </div>
    </div>
  </div>
    `;
  }

  async render (params) {
    return `
      <div class="page page--home">
        ${await this.getStudents(params.id)}
      </div>
    `;
  }

  async afterRender () {
    // Connect the listeners
    return this;
  }

  async mount () {
    // Before the rendering of the page
    return this;
  }

  async unmount () {
    // After leaving the page
    return this;
  }
}

export default studentDetailPage;
