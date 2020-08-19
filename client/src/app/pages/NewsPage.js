class NewsPage {
    async render () {
      return `
        <div class="page page--news">
          <div class="container">
            <h1>News</h1>
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