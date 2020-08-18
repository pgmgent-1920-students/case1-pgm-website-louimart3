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
        <section class="section">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-sm-5 col-12">
                <h2 class="section__title"> wie zijn we?</h2>
                <p>
                  Jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans adventure always cats go for world domination.
                </p>
                <button> druk mij</button>
              </div>
              <div class="col-sm-7 col-12">
                <img src="../../app/_static/images/colage-trans.png">
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
