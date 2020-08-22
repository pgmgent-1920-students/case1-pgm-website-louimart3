import { BAAS } from '../services';
import {
  routes
} from '../router';

class WorkPlacePage {
  async render() {
    return `
      <div class="page page--about">
        <div class="container ">
          <div class="row">
            <h1>werkplekleren</h1>
            <h2>kom onze richting verijken.</h2>
            <div class="form col-12">
              <iframe width=100% height= "480px" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=6oDgtrmteUyTA23Pgm-4VN2fqRCJ6BZOt4Q-FIb1ICFUN1JJRE1SNU9VRjc2NjAzUVVPSFFURVhYSi4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>
            </div>
          </div>
        </div>
      </div>
    
    `;
  }

  async afterRender() {
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

export default WorkPlacePage;