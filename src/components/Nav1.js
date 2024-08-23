import { define, html, router } from "hybrids";

define({
  tag: "nav1-element",
  views: router([Home, Features, Help, About]),
  render: ({ views }) => {

    return html`
      <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
            <span class="fs-4">Hybrid App</span>
          </a>
          <ul class="nav nav-pills">
            <li class="nav-item"><a href="${router.url(Home, { name: 'Lion'})}" class="nav-link active" aria-current="page">Home</a></li>
            <li class="nav-item"><a href="${router.url(Features, { name: 'Hybrid has many features!'})}" class="nav-link">Features</a></li>
            <li class="nav-item"><a href="${router.url(Help, { user: "Daniel" })}" class="nav-link">Help</a></li>
            <li class="nav-item"><a href="${router.url(About, { hint: 'Hybrid is nice!'})}" class="nav-link">About</a></li>
          </ul>
        </header>
      </div>
      ${views}
    
    `;

  }
});
