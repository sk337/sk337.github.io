import startSparkle from "./sparkle";
import Analytics from "analytics";
import googleTagManager from "@analytics/google-tag-manager";

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
