import { BAAS } from '../services';

import {
  routes
} from '../router';

class NewsPage {
  async getDataNews() {
    const data = await BAAS.getNews();
    return data.map(news => `
      <div class="col-12 col-sm-6">
        <div class="box">
          <div class="box-img">
            <img class="" src="${news.thumbnailUrl}" alt="">
          </div>
          <div class="box-text">
            <div class="case-title">
              <h3>${news.title}</h3>
            </div>
            <div class="case-info">
              <a class="" href="#!${routes.NEWS_DETAIL.replace(":id",news.id)}" data-navigo>meer lezen</a>
            </div> 
          </div>
        </div>
      </div>
    `).join('');
  };

    async render () {
      return `
        <div class="page page--news">
          <div class="container">
            <h1>News</h1>
            <div class="row ">
              ${await this.getDataNews()}
            </div>
          </div>
        </div>
      `;
    }
  
    async afterRender () {
      // afterRender all components on the page
      
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
  
  export default NewsPage;