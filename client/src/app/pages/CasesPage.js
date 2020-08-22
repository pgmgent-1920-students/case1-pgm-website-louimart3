import { BAAS } from '../services';
import { routes } from '../router';

class CasesPage {
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
              <a class="" href="#!${routes.CASE_DETAIL.replace(":id",cases.id)}" data-navigo>meer lezen</a>
            </div> 
          </div>
        </div>
      </div>
    `).join('');
  };

  async render () {
    return `
      <div class="page page--cases">
        <div class="container">
          <h1>Cases</h1>

      <div class="filterCase">
        <p>All</p>
        <p>@work-1</p>
        <p>Web-design</p>
        <p>webprog-2</p>
        <p>UX-UI2</p>
      </div>

          <div class="row test">
            ${await this.getDataCases()}
          </div>
        </div>
      </div>
    </div>
    `;
  }

  async afterRender () {
    const cases = await BAAS.getCases();
     const filter = document.querySelectorAll('.filterCase p');
     let test = document.querySelector('.test');



    filter.forEach(element => {
      element.addEventListener('click', () => {
        test.innerHTML = ' ';
        console.log(element.innerHTML);
        cases.forEach(e => {
          console.log(e.vak);

    
          if (e.vak == element.innerHTML) {
            console.log(e);
              test.innerHTML += `
              <div class="col-12 col-sm-6">
              <div class="box">
                <div class="box-img">
                  <img class="" src="${e.image}" alt="">
                </div>
                <div class="box-text">
                  <div class="case-title">
                    <h3>${e.title}</h3>
                  </div>
                  <div class="case-info">
                    <a class="" href="#!${routes.CASE_DETAIL.replace(":id",e.id)}" data-navigo>meer lezen</a>
                  </div> 
                </div>
              </div>
            </div>
              `;
          } else if (element.innerHTML == 'All') {
            test.innerHTML += `
            <div class="col-12 col-sm-6">
            <div class="box">
              <div class="box-img">
                <img class="" src="${e.image}" alt="">
              </div>
              <div class="box-text">
                <div class="case-title">
                  <h3>${e.title}</h3>
                </div>
                <div class="case-info">
                  <a class="" href="#!${routes.CASE_DETAIL.replace(":id",e.id)}" data-navigo>meer lezen</a>
                </div> 
              </div>
            </div>
          </div>
            `;
          }
          else {
            console.log('nee'); 
          }
      

        })
      })
    })
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

export default CasesPage;
