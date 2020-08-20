import { BAAS } from '../services';

class NewsDetailPage {
  async getNewsItem (id) {
    const newsItem = await BAAS.getCase(id);
    return `
    
      <div class="case">
        <h1>${newsItem.title}</h1>
        <div>${newsItem.info}</div>
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