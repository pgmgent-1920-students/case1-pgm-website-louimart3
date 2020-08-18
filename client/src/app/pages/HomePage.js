import {
  routes
} from '../router';

import {
  PostsList
} from '../components';

class HomePage {
  constructor() {
    this.compPostsList = new PostsList(3);
  }

  async render() {
    return `
      <div class="page page--home">
        <section class="section section--orange ">
          <div class="container">
            <header class="section__header">
              <div class="row">
                <div class="col-sm-6 ">
                  <h3>Arteveldehogeschool</h3>
                  <h1 class="section__title">
                    Graduaat Front-End Web Development
                  </h1>
                </div>
                <div class="col-12 col-sm-6">
                  <img src="https://miro.medium.com/max/1000/0*kBHpKva09AsGj7RQ"/>
                </div>
                <div class="col-12">
                  <p class="section__intro"">
                    De volgende infodag op 25 April 2020 van de opleiding <strong>Grafische en Digitale Media</strong> gaat er net iets anders uitzien. Om het coronavirus in te dijken, zetten wij maximaal in op <strong>afstandsonderwijs en thuiswerk</strong>. Tijdens deze infodag is het dan ook niet mogelijk om een infodag op onze campussen te organiseren. We laten je daarom graag kennismaken met onze opleiding en afstudeerrichtingen door middel van onze infodag@home..
                  </p>
                </div>
              </div>
            </header>
          </div> 
        </section>  



        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-6 col-12">
              <img src="https://www.creativeencode.com/wp-content/uploads/2019/09/Top-Front-End-Development-Tools-creative-Encode-Blog.jpg">
            </div>
            <div class="col-sm-6 col-12">
              <h3>Wat zal je leren?</h3>
              <p class="learn-item">
              <i class="fab fa-html5"></i> Html
              </p>
              <p class="learn-item">
                <i class="fab fa-css3-alt"></i> css
              </p>
              <p class="learn-item">
                <i class="fab fa-js-square"></i> js
              </p>
            </div>
          </div>
        </div> 
        <div class="container">
          <div class="row align-items-center">
            <div class="col-sm-6 col-12">
              <p class="learn-item">
                <i class="fab fa-react"></i> React
              </p>
              <p class="learn-item">
                <i class="fab fa-python"></i> Python
              </p>
              <p class="learn-item">
                <i class="fab fa-bootstrap"></i> Bootstrap
              </p>
            </div>
            <div class="col-sm-6 col-12">
              <img src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/05/O-Que-e-React-JavaScript-E-Como-Funciona.png">
            </div>
          </div>
        </div>
        
        <div class="container ">
          <div class="row">
            <div class="col-sm-6 col-12">
              <div class="single-content">
                <img class="" src="https://i.pinimg.com/originals/fb/1f/8a/fb1f8af3676977124d8844c0614b5afe.jpg" >
                <div class="text-content">
                  <p>tekst hier</p>
                  <p>meer tekst hieer</p>
                </div> 
              </div>
            </div>

            <div class="col-sm-6 col-12">
              <h3>Wij zitten niet stil!</h3>
              <p>
                Chase ball of string. Ignore the human until she needs to get up, then climb on her lap and sprawl check cat door for ambush 10 times before coming in do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life ask for petting trip owner up in kitchen i want food run around the house at 4 in the morning so crash against wall but walk away like nothing happened. Find something else more interesting cat fur is the new black i like big cats and i can not lie.
              </p>
              <button>Zie meer</button>
            </div>

            <div class="col-sm-6 col-12">
              <div class="single-content">
                <img class="" src="https://i.pinimg.com/originals/fb/1f/8a/fb1f8af3676977124d8844c0614b5afe.jpg" >
                <div class="text-content">
                  <p>tekst hier</p>
                  <p>meer tekst hieer</p>
                </div> 
              </div>
            </div>

            <div class="col-sm-6 col-12">
            <div class="single-content">
              <img class="" src="https://i.pinimg.com/originals/fb/1f/8a/fb1f8af3676977124d8844c0614b5afe.jpg" >
              <div class="text-content">
                <p>tekst hier</p>
                <p>meer tekst hieer</p>
              </div> 
            </div>
          </div>
          </div>
        </div>

      </div>
    `;
  }

  async afterRender() {
    // afterRender all components on the page
    this.compPostsList.afterRender();

    // Connect the listeners
    return this;
  }

  async mount() {
    // Before the rendering of the page
    return this;
  }

  async unmount() {
    // After leaving the page
    return this;
  }
}

export default HomePage;