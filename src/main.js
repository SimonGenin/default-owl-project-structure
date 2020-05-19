import { utils } from "@odoo/owl";
import { App } from "./components/App";

function setup() {
  const app = new App();
  app.mount(document.body);
}

utils.whenReady(setup);