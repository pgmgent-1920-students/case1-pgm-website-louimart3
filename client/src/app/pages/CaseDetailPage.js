import { BAAS } from '../services';

import {
  routes
} from '../router';

class CaseDetailPage {
  async getCase (id) {
    const caset = await BAAS.getCase(id);
    return `
    <div class="page page--caseDetail">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-12">
            <h1>${caset.title}</h1>
            <p>${caset.subInfo}</p>
            <a class="" href="#!${routes.CASES}" data-navigo>ga terug</a>
          </div>
          <div class="col-sm-8 col-12">
            <img class="" src="${caset.image}" alt="">
          </div>
          <div class="col-sm-12">
            <p>${caset.info}</p>
          </div>
        </div>
      </div>
    </div>


    `;
  }

  async render (params) {
    return `
      <div class="page page--home">
        ${await this.getCase(params.id)}
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

export default CaseDetailPage;
