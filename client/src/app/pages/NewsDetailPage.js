import { BAAS } from '../services';

import {
  routes
} from '../router';

class NewsDetailPage {
  async getNewsItem (id) {
    const newsItem = await BAAS.getNewsItem(id);
    return `
    <div class="page page--newsDetail">
      <div class="container">
        <div class="row">
          <div class="col-sm-4 col-12">
            <h1>${newsItem.title}</h1>
            <p>${newsItem.synopsis}</p>
            <a class="" href="#!${routes.NEWS}" data-navigo>ga terug</a>
          </div>
          <div class="col-sm-8 col-12">
            <img class="" src="${newsItem.thumbnailUrl}" alt="">
          </div>
          <div class="col-sm-12">
            <p>${newsItem.body}</p>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  async render (params) {
    return `
      <div class="page page--home">
        ${await this.getNewsItem(params.id)}
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

export default NewsDetailPage;