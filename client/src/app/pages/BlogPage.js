import { BAAS } from '../services';

class BlogPage {
  async getDataCases() {
    const data = await BAAS.getCases();
    return data.map(cases => `
      <div class="col-12 col-sm-6">
        <div class="box">
          <div class="box-img">
            <img class="" src="${cases.image}" alt="">
          </div>
          <div class="box-text">
            <div class="case-title">
              <h3>${cases.title}</h3>
            </div>
            <div class="case-info">
              <button>meer lezen</button>
            </div> 
          </div>
        </div>
      </div>
    `).join('');
  };

  async render () {
    return `
      <div class="page page--blog">
        <div class="container">
          <h1>Cases</h1>
          <div class="row ">
            ${await this.getDataCases()}
          </div>
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

export default BlogPage;
