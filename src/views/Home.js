import { define, html, router } from 'hybrids';

import hybridsSvg from '../assets/hybrids.svg';
import javascriptSvg from '../assets/javascript.svg';
import viteSvg from '../assets/vite.svg';
import bootstrapSvg from '../assets/bootstrap-logo.svg';

export const Home = define({
  tag: "home-view",
  name: 'my friend', // property default value. Parameter that is passed in the tag or by the router
  render: ({ name }) => {
    return html`
    <!-- Browser elements -->
    <div class="container">
      <div class="px-4 pt-5 my-5 text-center border-bottom">
        <h1 class="display-4 fw-bold text-body-emphasis">Hybrids JavaScript framework</h1>
        <div class="row justify-content-center pt-3 pb-2">
          <div class="col-auto">
            <img class="d-block mx-auto mb-4" src="${hybridsSvg}" alt="" width="72" height="57">
          </div>
          <div class="col-auto">
            <img class="d-block mx-auto mb-4" src="${javascriptSvg}" alt="" width="72" height="57">
          </div>
          <div class="col-auto">
            <img class="d-block mx-auto mb-4" src="${viteSvg}" alt="" width="72" height="57">
          </div>
          <div class="col-auto">
            <img class="d-block mx-auto mb-4" src="${bootstrapSvg}" alt="" width="72" height="57">
          </div>
        </div>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">An extraordinary JavaScript framework for creating client-side web applications, UI components libraries, or single web components with unique mixed declarative and functional architecture</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
          </div>
        </div>
        <div class="overflow-hidden" style="max-height: 30vh;">
          <div class="container px-5">
            <p>Property name: ${name}!</p>
          </div>
        </div>
      </div>
    </div>
  `;
  },
  
});

export default Home;
