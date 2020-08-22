import { BAAS } from '../services';

import {
  routes
} from '../router';

class studentDetailPage {
  async getStudents(id) {
    const caset = await BAAS.getStudents(id);
    return `
    <div>
    ziojefzoij
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
