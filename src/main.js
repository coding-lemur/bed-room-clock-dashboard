import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.min.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* add icons to the library */
import {
  faCodeBranch,
  faBarcode,
  faClock,
  faWifi,
  faHourglass,
  faTemperatureHalf,
  faDroplet,
} from "@fortawesome/free-solid-svg-icons";

library.add([
  faCodeBranch,
  faBarcode,
  faClock,
  faWifi,
  faHourglass,
  faTemperatureHalf,
  faDroplet,
]);

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
