import { define, html, router } from 'hybrids';
import hybridsSvg from '../assets/hybrids.svg';

export const Features = define({
  tag: "features-view",
  name: 'my friend', // property default value. Parameter that is passed in the tag or by the router
  render: ({ name }) => html`
    <!-- Browser elements -->
    <div class="container">
      <div class="py-5 text-center border-bottom">
        <img class="d-block mx-auto mb-4" src="${hybridsSvg}" alt="" width="72" height="57">
        <h2>Features</h2>
        <p class="lead">
          ${name}!
        </p>
      </div>
    </div>
    <div class="container mt-5">
      <p class="lead">Hybrids é um framework leve para a criação de web components reativos. Aqui estão algumas de suas principais funcionalidades:</p>
      <div class="accordion" id="hybridsAccordion">

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Definição de Componentes
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#hybridsAccordion">
            <div class="accordion-body">
              <p>Hybrids permite a criação de componentes personalizados através da função <code>define</code>. Essa função define o comportamento e as propriedades do componente de forma declarativa.</p>
            </div>
            <div class="form-floating mb-3">
              <textarea class="form-control no-resize" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style="height: 220px; border-radius: 0" disabled>
  import { define, html } from 'hybrids';

  define({
    tag: "hello-world",
    name: '',
    render: ({ name }) => html&grave;<p>Hello &#36;{name}!</p>&grave;,
  });
              </textarea>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Propriedades Reativas
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#hybridsAccordion">
            <div class="accordion-body">
              <p>As propriedades de um componente Hybrids são reativas, ou seja, qualquer mudança em uma propriedade desencadeia uma atualização automática na renderização do componente.</p>
              <div class="form-floating mb-3">
                <textarea class="form-control no-resize" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style="height: 220px; border-radius: 0" disabled>
import { define, html } from 'hybrids';

const MyComponent = {
  name: 'default',
  render: ({ name }) => html&grave;<p>Hello &#36;{name}!</p>&grave;,
};

define('my-component', MyComponent);
                </textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Integração com HTML e CSS
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#hybridsAccordion">
            <div class="accordion-body">
              <p>Hybrids permite a integração direta com HTML e CSS usando <code>lit-html</code> para renderizar templates e estilizar componentes.</p>
              <div class="form-floating mb-3">
                <textarea class="form-control no-resize" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style="height: 220px; border-radius: 0" disabled>
import { define, html } from 'hybrids';

const MyComponent = {
  style: css&grave;:host { display: block; background: #f0f0f0; }&grave;,
  render: () => html&grave;&lt;div&gt;Styled Content&lt;/div&gt;&grave;,
};

define('my-component', MyComponent);
                </textarea>
              </div>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Roteamento
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#hybridsAccordion">
            <div class="accordion-body">
              <p>Hybrids oferece suporte a roteamento através do módulo <code>router</code>, permitindo a criação de single-page applications (SPA) com facilidade.</p>
              <div class="form-floating mb-3">
                <textarea class="form-control no-resize" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style="height: 220px; border-radius: 0" disabled>
import { define, html, router } from 'hybrids';

const MyApp = define({
  tag: 'my-app',
  render: ({ views }) => html&grave;<div>&#36;{views}</div>&grave;,
});

define('my-app', MyApp);
                </textarea>
              </div>
            </div>
          </div>
        </div>

      </div>
      <footer class="mt-5 text-center">
      <p>&copy; 2024 Hybrids Framework</p>
    </footer>
    </div>
    

  `,
});

export default Features;
