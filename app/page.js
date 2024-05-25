


export default function Home() {

  return (
    <>
      <title>ASIA TOURS</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link rel="stylesheet" href="style.css" />

      {/* page */}
      <div className="pageContent">
        {/* slideshow */}
        <div className="mySlides w3-display-container w3-center flex justify-center items-center mt-[50px]">
          <img className="rounded-xl" src="assets/img/сity1.jpeg" style={{ width: "80%" }} />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>San Francisco</h3>
            <p>
              <b>We had the best time playing at Beach!</b>
            </p>
          </div>
        </div>

        {/* info section */}
        <div
          className="w3-container w3-content w3-center w3-padding-64"
          style={{ maxWidth: 800 }}
          id="band"
        >
          <h2 className="w3-wide">THE ASIA TOURS</h2>
          <p className="w3-opacity">
            <i>We love travel</i>
          </p>
          <p className="w3-justify">
            Welcome to our travel company! We pay special attention to organizing
            exclusive trips that will bring joy and delight to our clients. Our
            travel company is a leading provider of travel services, including a
            wide ё range of tours and excursions designed keeping in mind the
            interests and preferences of our clients. We strive to create
            personalized journeys that help our students realize their dreams.
          </p>
        </div>
      </div>
      {/* The Tour Section */}
      <div className="w3-black" id="tour">
        <div
          className="w3-container w3-content w3-padding-64"
          style={{ maxWidth: 800 }}
        >
          <h2 className="w3-wide w3-center">TOUR DATES</h2>
          <p className="w3-opacity w3-center">
            <i>Remember to book your tickets!</i>
          </p>
          <br />
          <ul className="w3-ul w3-border w3-white w3-text-grey">
            <li className="w3-padding">
              New York{" "}
              <span className="w3-tag w3-red w3-margin-left">Sold out</span>
            </li>
            <li className="w3-padding">
              Toronto <span className="w3-tag w3-red w3-margin-left">Sold out</span>
            </li>
            <li className="w3-padding">
              Madrid <span className="w3-badge w3-right w3-margin-right">3</span>
            </li>
          </ul>
          <div
            className="w3-row-padding w3-padding-32"
            style={{ margin: "0 -16px" }}
          >
            <div className="w3-third w3-margin-bottom">
              <img
                src="assets/img/new-york.jpeg"
                alt="New York"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>New York</b>
                </p>
                <p className="w3-opacity">Fri 27 Nov 2024</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
                  dolorum!
                </p>
                <button
                  className="w3-button w3-black w3-margin-bottom"
                  onclick="document.getElementById('ticketModal').style.display='block'"
                >
                  Buy Tickets
                </button>
              </div>
            </div>
            <div className="w3-third w3-margin-bottom">
              <img
                src="assets/img/toronto.jpeg"
                alt="Paris"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>Toronto</b>
                </p>
                <p className="w3-opacity">Sat 28 Nov 2024</p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
                  nemo?
                </p>
                <button
                  className="w3-button w3-black w3-margin-bottom"
                  onclick="document.getElementById('ticketModal').style.display='block'"
                >
                  Buy Tickets
                </button>
              </div>
            </div>
            <div className="w3-third w3-margin-bottom">
              <img
                src="assets/img/madrid.jpeg"
                alt="San Francisco"
                style={{ width: "100%" }}
                className="w3-hover-opacity"
              />
              <div className="w3-container w3-white">
                <p>
                  <b>Madrid</b>
                </p>
                <p className="w3-opacity">Sun 29 Nov 2024</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde,
                  necessitatibus.
                </p>
                <button
                  className="w3-button w3-black w3-margin-bottom"
                  onclick="document.getElementById('ticketModal').style.display='block'"
                >
                  Buy Tickets
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Ticket Modal */}
      <div id="ticketModal" className="w3-modal">
        <div className="w3-modal-content w3-animate-top w3-card-4">
          <header className="w3-container w3-teal w3-center w3-padding-32">
            <span
              onclick="document.getElementById('ticketModal').style.display='none'"
              className="w3-button w3-teal w3-xlarge w3-display-topright"
            >
              ×
            </span>
            <h2 className="w3-wide">
              <i className="fa fa-suitcase w3-margin-right" />
              Tickets
            </h2>
          </header>
          <div className="w3-container">
            <p>
              <label>
                <i className="fa fa-shopping-cart" /> Tickets, $15 per person
              </label>
            </p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="How many?"
            />
            <p>
              <label>
                <i className="fa fa-user" /> Send To
              </label>
            </p>
            <input
              className="w3-input w3-border"
              type="text"
              placeholder="Enter email"
            />
            <button className="w3-button w3-block w3-teal w3-padding-16 w3-section w3-right">
              PAY <i className="fa fa-check" />
            </button>
            <button
              className="w3-button w3-red w3-section"
              onclick="document.getElementById('ticketModal').style.display='none'"
            >
              Close <i className="fa fa-remove" />
            </button>
            <p className="w3-right">
              Need{" "}
              <a href="#" className="w3-text-blue">
                help?
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* The Contact Section */}
      <div
        className="w3-container w3-content w3-padding-64"
        style={{ maxWidth: 800 }}
        id="contact"
      >
        <h2 className="w3-wide w3-center">CONTACT</h2>
        <p className="w3-opacity w3-center">
          <i>Interesting? Drop a note!</i>
        </p>
        <div className="w3-row w3-padding-32">
          <div className="w3-col m6 w3-large w3-margin-bottom">
            <i className="fa fa-map-marker" style={{ width: 30 }} /> Rostov-on-Don,
            Ru
            <br />
            <i className="fa fa-phone" style={{ width: 30 }} /> Phone: +7 999000
            <br />
            <i className="fa fa-envelope" style={{ width: 30 }}>
              {" "}
            </i>{" "}
            Email: trav@mail.com
            <br />
          </div>
          <div className="w3-col m6">
            <form action="/action_page.php" target="_blank">
              <div className="w3-row-padding">
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Name"
                    required=""
                    name="Name"
                  />
                </div>
                <div className="w3-half">
                  <input
                    className="w3-input w3-border"
                    type="text"
                    placeholder="Email"
                    required=""
                    name="Email"
                  />
                </div>
              </div>
              <input
                className="w3-input w3-border"
                type="text"
                placeholder="Message"
                required=""
                name="Message"
              />
              <button
                className="w3-button w3-black w3-section w3-right"
                type="submit"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* End Page Content */}
      {/* Image of location/map */}
      <img
        src="/w3images/map.jpg"
        className="w3-image w3-greyscale-min"
        style={{ width: "100%" }}
      />
      {/* Footer */}
      <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey w3-xlarge">
        <i className="fa fa-facebook-official w3-hover-opacity" />
        <i className="fa fa-instagram w3-hover-opacity" />
        <i className="fa fa-snapchat w3-hover-opacity" />
        <i className="fa fa-pinterest-p w3-hover-opacity" />
        <i className="fa fa-twitter w3-hover-opacity" />
        <i className="fa fa-linkedin w3-hover-opacity" />
        <p className="w3-medium">
          Powered by{" "}
          <a href="#" target="_blank">
            AAA
          </a>
        </p>
      </footer>
      <script src="script.js"></script>
    </>

  );
}
