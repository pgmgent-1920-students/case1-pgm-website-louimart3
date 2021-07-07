import { routes } from '../router';
import deel1 from '../_static/images/planing-deel1.jpg';
import deel2 from'../_static/images/planing-deel2.jpg';
import colage from '../_static/images/colage-trans.png';

class AboutPage {
  constructor () {
  }

  async render () {
    return `
      <div class="page page--about">
        <div class="container ">
          <div class="row">
            <div class="col-12 col-sm-7">
              <h1>About</h1>
              <p> 
                Meow to be let out paw your face to wake you up in the morning so i shall purr myself to sleep. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats i’m so hungry i’m so hungry but ew not for that and have secret plans, if human is on laptop sit on the keyboard stare at ceiling hey! you there, with the hands. When owners are asleep, cry for no apparent reason where is it? i saw that bird i need to bring it home to mommy squirrel! . When owners are asleep, cry for no apparent reason roll on the floor purring your whiskers off. Love me! stare at owner accusingly then wink.
              </p>
            </div>
          </div>
          <div class="row">
            <iframe  width=100% height="650rem" src="https://www.youtube.com/embed/DG1jVe9l1FM?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12">
              <h3>COMPUTER PROGRAMMING</h3>
              <p>
                Bereid je maar voor om een expert te worden in front-end web development. Je wordt expert in JavaScript en leert werken met React, Node.js, TypeScript, PHP en SQL. Om je optimaal klaar te stomen voor een job als programmeur, krijg je diverse gastcolleges van experten uit het werkveld en werk je aan authentieke cases. 
              </p>
              <h3>APPLIED INFORMATION TECHNOLOGY</h3>
              <p>
                Je verdiept je in de geschiedenis en de werking van het internet en ontdekt de logica achter programmeren. Daarnaast duik je in de informatie rond hardware, software en netwerken. Later staan onder meer databases, security en blockchain op het programma.
              </p>
              <h3>UI/UX PROTOTYPING</h3>
              <p>
                In de vakken van deze programmalijn verdiep je je in de codeertalen HTML en CSS. Je leert werken met grafische software en gaat design thinking toepassen. Ook ga je aan de slag met CMS-systemen zoals WordPress.
              </p>
              <h3>BUSINESS & COMMUNICATION</h3>
              <p>
                Je ontdekt hoe bedrijven georganiseerd zijn, je leert handleidingen schrijven en je krijgt een dieper inzicht in marketing en bedrijfscommunicatie. Je leert pitchen voor klanten en samenwerken in team. In het laatste semester geven we je bovendien alle kennis mee die je nodig hebt om als zelfstandige IT’er aan de slag te gaan.
              </p>
              <h3>WORKPLACE LEARNING @WORK</h3>
              <p>
                Om je toekomstige job echt te leren kennen, moet je het werkveld intrekken. Dat doe je in de programmalijn @Work. In het eerste jaar bezoek je een aantal digital agencies en voer je opdrachten voor hen uit. Je presenteert het resultaat vervolgens voor een interne en externe jury. In je tweede jaar ga je 10 weken lang werkplekleren in een digitaal bedrijf. Zo doe je praktische kennis op en ervaar je hoe het voelt om echt in team te werken. Tijdens een individueel afsluitend project dat je op de werkvloer uitvoert, verdiep je je bovendien in een onderwerp naar keuze.
              </p>
            </div>
            <div class="col-12 col-sm-6">
              <img src="${deel1}">
            </div>
            <div class="col-12 col-sm-6">
              <img src="${deel2}">
            </div>
          </div>
        </div>
        <section class="section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-5 col-12">
                <h2 class="section__title"> wie zijn we?</h2>
                <p>
                  Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans adventure always cats go for world domination.
                </p>
                <a class="" href="#!${routes.TEAM}" data-navigo>zie meer</a>
              </div>
              <div class="col-sm-7 col-12">
                <img src="${colage}">
              </div>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  async afterRender () {
    // afterRender all components on the page
    
    // Before the rendering of the page
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

export default AboutPage;
