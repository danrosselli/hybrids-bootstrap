import { define, html, router } from 'hybrids';
import hybridsSvg from '../assets/hybrids.svg';

export default define({
  tag: "about-view",
  hint: 'Default value for hint', // property default value. Parameter that is passed in the tag or by the router
  render: ({ hint }) => html`
    <div class="container">
      <div class="py-5 text-center border-bottom">
        <img class="d-block mx-auto mb-4" src="${hybridsSvg}" alt="" width="72" height="57">
        <h2>About</h2>
        <p class="lead">
          Hybrid Boilerplate created by Daniel Rosselli
        </p>
      </div>
      <div class="py-5 text-center">
        <p>${hint}!</p>
      </div>
    </div>
  `,
});


