import startSparkle from "./sparkle";
import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";

import {library, dom} from "@fortawesome/fontawesome-svg-core";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fas} from "@fortawesome/free-solid-svg-icons";

library.add(fab, far, fas);

dom.i2svg();

startSparkle();

const analytics = Analytics({
  app: "GHPages",
  plugins: [
    googleTagManager({
      containerId: "G-EWV71796EL",
    }),
  ],
});

/* Track a page view */
analytics.page();