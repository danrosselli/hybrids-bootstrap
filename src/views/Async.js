import { define, html, router } from 'hybrids';
import bootstrapSvg from '../assets/bootstrap-logo.svg';

// Function to make an asynchronous request and return the data
async function getStarWarsPeople() {
  try {
    const response = await fetch('https://swapi.dev/api/people/1/');
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Erro:', error);
  }
}

export const Async = define({
  tag: "async-view",
  character: () => getStarWarsPeople(),
  render: ({ character }) => {
    
    return html`
    <!-- Browser elements -->
    <div class="container">
      <div class="py-5 text-center">
        <img class="d-block mx-auto mb-4" src="${bootstrapSvg}" alt="" width="72" height="57">
        <h2>Async</h2>
        <p class="lead">This is an example of how to make asynchronous calls to an API and have it rendered after it finishes. Its simple and efficient approach shows that Hybrids is a framework with a bright future!
        Whenever an asynchronous call is used, html.resolve must be used to wait for the operation to finish and display the result.
        </p>
      </div>
      <div class="py-5 text-center">
        ${html.resolve(
          character
            .then(
              (obj) => html`Name received from API: ${obj.name} `
            )
            .catch(() => html` Not found `),
          html` Loading data... `
        )}
      </div>
    </div>
  `;
  },
  
});

export default Async;
