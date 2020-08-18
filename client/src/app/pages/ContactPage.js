class ContactPage {
  async render () {
    return `
      <div class="page page--contact">
        <div class="container">
          <h1>Contact<h1>
          <div class="row">
            <div class="col-sm-6">
              <h3>Vragen over een opleiding?</h3>
              <p>
                Bij elke opleiding wordt een contactpersoon vermeld waarbij je terecht kan voor al jouw specifieke vragen.
              </p>
              <p>
                Arteveldehogeschool VZW <br>
                Hoogpoort 15 <br>
                9000 Gent
              </p>
              <p>
                <b>Algemeen telefoonnummer :</b><br>
                <i class="fas fa-phone-alt"></i> T 09 234 90 00
              </p>
              <p>
                Ondernemingsnummer: 0474.120.360<br>
                BTW-nummer: BTW BE 0474.120.360
              </p>
            </div>
            <div class="col-sm-6">
              <h2 class="contact_value">naam :</h2>
              <input>
              <h2 class="contact_value">Achternaam :</h2>
              <input>
              <h2 class="contact_value">e-mail adres :</h2>
              <input>
              <h2 class="contact_value">uw vraag :</h2>
              <textarea></textarea>
              <button>vertuur</button>
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

export default ContactPage;
