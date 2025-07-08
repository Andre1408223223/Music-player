// scripts/main.js
const laptop_container = document.getElementById("laptop_container");
const phone_main = document.getElementById("phone_main_container");

function clear_page() {
  // Clear laptop content (keep sidebar)
  Array.from(laptop_container.children).forEach((child) => {
    if (child.id !== "laptop_side_bar") {
      laptop_container.removeChild(child);
    }
  });
  // Clear phone content (keep footer)
  phone_main.innerHTML = "";
}

function create_home_page() {
  // 1) Clear existing content (but preserve sidebar & footer)
  clear_page();

  // 2) Laptop “Recently Played”
  const laptopHTML = `
    <div id="laptop_main_container">
      <!-- LARGE -->
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

      <!-- MEDIUM -->
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

      <!-- SMALL -->
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
  laptop_container.insertAdjacentHTML("beforeend", laptopHTML);

  // 3) Phone “Recently Played”
  const phoneHTML = `
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
  `;
  phone_main.insertAdjacentHTML("beforeend", phoneHTML);
}

function create_search_page() {
  clear_page();

  // Laptop
  const laptopHTML = `
    <div id="laptop_search_container">
      <input class="search_bar" placeholder="Search…"/>
    </div>
  `;
  laptop_container.insertAdjacentHTML("beforeend", laptopHTML);

  // Phone
  const phoneHTML = `
    <div id="phone_search_container">
      <input class="search_bar" placeholder="Search…"/>
    </div>
  `;
  phone_main.insertAdjacentHTML("beforeend", phoneHTML);
}

function create_favroute_page() {
  clear_page();

  laptop_container.insertAdjacentHTML("beforeend", `<h1>Favroutes</h1>`);
  phone_main.insertAdjacentHTML("beforeend", `<h1>Favroutes</h1>`);
}

function create_radio_page() {
  clear_page();

  laptop_container.insertAdjacentHTML("beforeend", `<h1>Radio</h1>`);
  phone_main.insertAdjacentHTML("beforeend", `<h1>Radio</h1>`);
}

document.addEventListener("DOMContentLoaded", () => {
  create_home_page();

  // Laptop nav buttons
  document
    .getElementById("laptop_home_button")
    .addEventListener("click", create_home_page);
  document
    .getElementById("laptop_search_button")
    .addEventListener("click", create_search_page);
  document
    .getElementById("laptop_favroute_button")
    .addEventListener("click", create_favroute_page);
  document
    .getElementById("laptop_radio_button")
    .addEventListener("click", create_radio_page);

  // Phone footer buttons
  document
    .getElementById("phone_home_button")
    .addEventListener("click", create_home_page);
  document
    .getElementById("phone_search_button")
    .addEventListener("click", create_search_page);
  document
    .getElementById("phone_favroute_button")
    .addEventListener("click", create_favroute_page);
  document
    .getElementById("phone_radio_button")
    .addEventListener("click", create_radio_page);
});
