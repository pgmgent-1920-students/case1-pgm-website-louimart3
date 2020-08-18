import {
  BAAS
} from '../services';

import {
  routes
} from '../router';

class CaseList {
  constructor(n = null) {
    this.n = n;
  }

  async getCases() {
    let cases = await BAAS.getCases();
    if (this.n !== null) {
      cases = cases.slice(0, this.n);
    }
    
    return cases.map(casea => `
      <div class="col-12">
        <div class="case-card">
          <img src="${casea.image}"/>
          <h1>${casea.title}</h1>
        </div>
      </div>`).join('');
  }

  async render () {
    return `
      <div class="row posts-list">
        ${await this.getCases(color)}     
      </div>
    `;
  }
}

export default CaseList;