const laptop_container = document.getElementById("laptop_container");
const phone_container = document.getElementById("phone_container");

function clear_page() {
  Array.from(laptop_container.children).forEach((child) => {
    if (child.id !== "laptop_side_bar") {
      laptop_container.removeChild(child);
    }
  });

  document.getElementById("phone_main_container").innerHTML = "";
}

function create_home_page() {
  clear_page();

  laptopHTML = `
    <div id="laptop_main_container">
      <div class="song_feed_laptop large">
        <div id="song_feed_header">
          <h1 class="song_feed_title">Recently Played</h1>
          <div class="arrow-button">
            <img src="images/icons/arrow-small-right.svg" alt="See more" />
          </div>
        </div>
        <div class="song-list">
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
        </div>
      </div>

      <div class="song_feed_laptop medium">
        <div id="song_feed_header">
          <h1 class="song_feed_title">Recently Played</h1>
          <div class="arrow-button">
            <img src="images/icons/arrow-small-right.svg" alt="See more" />
          </div>
        </div>
        <div class="song-list">
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
        </div>
      </div>

      <div class="song_feed_laptop small">
        <div id="song_feed_header">
          <h1 class="song_feed_title">Recently Played</h1>
          <div class="arrow-button">
            <img src="images/icons/arrow-small-right.svg" alt="See more" />
          </div>
        </div>
        <div class="song-list">
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
        </div>
      </div>
    </div>
  `;

  phoneHTML = `
    <div id="phone_container">
      <div id="phone_header_container">
        <div></div>
        <div id="settings_button_phone">
          <img src="images/icons/settings.svg" />
        </div>
      </div>

      <div id="phone_song_feed_large" class="song-feed">
        <div class="song_feed_header">
          <h1 class="song_feed_title">Recently Played</h1>
          <div class="arrow-button">
            <img src="images/icons/arrow-small-right.svg" alt="See more" />
          </div>
        </div>
        <div class="song-list">
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
        </div>
      </div>

      <div id="phone_song_feed_medium" class="song-feed">
        <div class="song_feed_header">
          <h1 class="song_feed_title">Recently Played</h1>
          <div class="arrow-button">
            <img src="images/icons/arrow-small-right.svg" alt="See more" />
          </div>
        </div>
        <div class="song-list">
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
        </div>
      </div>

      <div id="phone_song_feed_small" class="song-feed">
        <div class="song_feed_header">
          <h1 class="song_feed_title">Recently Played</h1>
          <div class="arrow-button">
            <img src="images/icons/arrow-small-right.svg" alt="See more" />
          </div>
        </div>
        <div class="song-list">
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
          <div class="song_item"></div>
        </div>
      </div>
    </div>
  `;

  // Append instead of replace
  laptop_container.insertAdjacentHTML("beforeend", laptopHTML);
  phone_container.insertAdjacentHTML("beforeend", phoneHTML);
}

function create_search_page() {
  clear_page();

  // 2) Now inject your search‐page markup
  const searchHTML = `
    <div class="search_bar">
      <input>
    </div>
  `;
  laptop_container.insertAdjacentHTML("beforeend", searchHTML);
}

function create_favroute_page() {
  clear_page();

  const favrouteHTML = `
    <h1>Favroute page</h1>
  `;
  laptop_container.insertAdjacentHTML("beforeend", favrouteHTML);
}

function create_radio_page() {
  clear_page();

  const radioHTML = `
    <h1>Radio page</h1>
  `;
  laptop_container.insertAdjacentHTML("beforeend", radioHTML);
}

document.addEventListener("DOMContentLoaded", () => {
  create_home_page();

  document
    .getElementById("laptop_home_button")
    .addEventListener("click", () => {
      create_home_page();
    });

  document
    .getElementById("laptop_radio_button")
    .addEventListener("click", () => {
      create_radio_page();
    });

  document
    .getElementById("laptop_favroute_button")
    .addEventListener("click", () => {
      create_favroute_page();
    });

  document
    .getElementById("laptop_search_button")
    .addEventListener("click", () => {
      create_search_page();
    });
});
