import { Router, routes } from './router';
import {
  HomePage, AboutPage, NotFoundPage, PostDetailPage, TeamPage, ContactPage, BlogPage, ThreePage
} from './pages';
import { Footer, Header } from './components';

class App {
  constructor (container) {
    // Root container
    this.container = container;

    // Pages
    this.pageHome = new HomePage();
    this.pageAbout = new AboutPage();
    this.pageBlog = new BlogPage();
    this.pageContact = new ContactPage();
    this.pageNotFound = new NotFoundPage();
    this.pagePostDetail = new PostDetailPage();    
    this.pageTeam = new TeamPage();
    this.pageThree = new ThreePage();

    // Components
    this.compHeader = new Header();
    this.compFooter = new Footer();    
  }

  async render () {
    return `
    ${await this.compHeader.render()}
    <main class="main">
      <div id="children"></div>
    </div> 
    ${await this.compFooter.render()}   
    `;
  }

  async afterRender () {
    this.childrenContainer = document.getElementById('children');
    
    // Router
    this.router = new Router(this.childrenContainer);
    this.router.addRoute(routes.LANDING, this.pageHome);
    this.router.addRoute(routes.HOME, this.pageHome);
    this.router.addRoute(routes.ABOUT, this.pageAbout);
    this.router.addRoute(routes.BLOG, this.pageBlog);
    this.router.addRoute(routes.POST_DETAIL, this.pagePostDetail);   
    this.router.addRoute(routes.TEAM, this.pageTeam);
    this.router.addRoute(routes.CONTACT, this.pageContact);
    this.router.addRoute(routes.THREE, this.pageThree);
    this.router.setNotFoundPage(this.pageNotFound); 
    this.router.resolve();

    // Register components afterRender methods
    await this.compHeader.afterRender();
    await this.compFooter.afterRender();

    // Listen to changes in history
    window.onpopstate = (event) => {
      this.setActiveLink();
    }
    // Set active link
    this.setActiveLink();
  }

  setActiveLink () {
    this.compHeader.updateActiveLink(document.location.hash);
    this.compFooter.updateActiveLink(document.location.hash);
  }
}

export default App;
