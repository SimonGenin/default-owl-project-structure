import { Component, tags, useState } from "@odoo/owl";

const { xml, css } = tags;

const TEMPLATE = xml/* xml */`
    <div t-on-click="update">Hello <t t-esc="state.text"/></div>
`

const STYLE = css/* css */`
    /* Add CSS here */
`

export class App extends Component {

  static template = TEMPLATE;
  static style = STYLE;

  state = useState({
       text: "Owl",
    });
  
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }

}