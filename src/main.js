import { define, html, router } from "hybrids";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./views/Home.js";
import Features from "./views/Features.js";
import Async from "./views/Async.js";
import Form from "./views/Form.js";
import About from "./views/About.js";
import Help from "./views/Help.js";

const styles = {
  '.navbar-toggler:focus' : {
      'box-shadow': 'none',
      'outline': 'none',
    }
};

define({
  tag: "my-app",
  views: router([Home, Features, Async, Form, Help, About]),
  render: ({ views }) => {

    return html`
      
      <div class="container pt-3 pb-3">
      <nav class="navbar navbar-expand-lg navbar-light bg-light" aria-label="Offcanvas navbar large">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">My App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Options</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a href="${router.url(Home, { name: 'Lion'})}" class="nav-link active" aria-current="page">Home</a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a href="${router.url(Features, { name: 'Hybrid has many features!'})}" class="nav-link">Features</a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a href="${router.url(Async, { name: 'Hybrid has many features!'})}" class="nav-link">Async</a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a href="${router.url(Form)}" class="nav-link">Form</a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a href="${router.url(Help, { user: "Daniel" })}" class="nav-link">Help</a>
                </li>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <a href="${router.url(About, { hint: 'Hybrid is nice!'})}" class="nav-link">About</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
      ${views}
    `;

  }
});
