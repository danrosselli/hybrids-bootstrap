import { define, html, router } from 'hybrids';

export default define({
  tag: "about-view",
  hint: 'Default value for hint', // property default value. Parameter that is passed in the tag or by the router
  render: ({ hint }) => html`
    <div class="container">
      <h1>About</h1>
      <p>${hint}!</p>
    </div>
  `,
});


