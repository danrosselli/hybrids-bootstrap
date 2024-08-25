import { define, html, router } from 'hybrids';
import hybridsSvg from '../assets/hybrids.svg';

import About from "./About.js";

export default define({
  tag: "help-view",
  user: '', // property default value. Parameter that is passed in the tag or by the router
  render: ({ user }) => {

    return html`
      <div class="container">
        <div class="py-5 text-center border-bottom">
          <img class="d-block mx-auto mb-4" src="${hybridsSvg}" alt="" width="72" height="57">
          <h2>Router</h2>
          <p class="lead">
          This example serves to show how to navigate between pages using the "router". One route will navigate to another page, while the other will navigate to the same page. The parameters that are passed in the routes are read into the component as properties, which is the same as sending them via the html tag.
          </p>
        </div>
        <div class="py-5 text-center border-bottom">
          <p class="lead">Property received from route as parameter: "${user}"</p>
          <p>Hi ${user}! How can I help you?</p>
          <a href="${router.url(About)}">Take me to the About page</a><br><br>
          <a href="${router.currentUrl({ user: "Joana" })}">This link will route to this page (self-route)</a>
        </div>
      </div> 
    `
  }

});


