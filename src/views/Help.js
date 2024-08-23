import { define, html, router } from 'hybrids';

import About from "./About.js";

export default define({
  tag: "help-view",
  user: '', // property default value. Parameter that is passed in the tag or by the router
  render: ({ user }) => {

    return html`
      <div class="container">
        <h1>Help</h1>
        <p>Hi ${user}! How can I help you?</p>
        <a href="${router.url(About)}">Take me to the About view</a><br>
        <a href="${router.currentUrl({ user: "Joana" })}">Self link</a>
      </div> 
    `
  }

});


