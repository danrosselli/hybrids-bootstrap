import { define, html, router } from 'hybrids';

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
    console.log(character);
    return html`
    <!-- Browser elements -->
    <div class="container">
      <h1>Async</h1>
      <p>This is an example of how to make asynchronous calls to an API and have it rendered after it finishes. Its simple and efficient approach shows that Hybrids is a framework with a bright future!</p>
      <p>Whenever an asynchronous call is used, html.resolve must be used to wait for the operation to finish and display the result.</p>
      <div>
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
