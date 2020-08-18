import { BAAS } from '../services';

import { routes } from '../router';


class PersonsList {
  constructor(n = null) {
    this.n = n;
  }

  async getPersons() {
    let persons = await BAAS.getPerson();
    if(this.n !== null) {
      persons = persons.slice(0, this.n);
    }

    return persons.map(person => `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="https://i.pinimg.com/originals/fb/1f/8a/fb1f8af3676977124d8844c0614b5afe.jpg" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${person.name_first}</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    `);
  }

  
}

export default PersonsList;