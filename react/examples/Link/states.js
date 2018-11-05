
            import React from 'react';

            export default class CoreExample extends React.Component {

              render() {

              /* eslint-disable */
              // Disabled to ignore Dangerously Setting Inner HTML

                return <div dangerouslySetInnerHTML={{__html: `  <div class="docs-example docs-example--spacing">
    <h3>Blue <code class="small">.cui-link--blue</code></h3>
    <a class="cui-link cui-link--blue">Link</a>
    <a class="cui-link cui-link--blue hover-state">Hover</a>
    <a class="cui-link cui-link--blue active-state hover-state">Pressed/Active</a>
    <a class="cui-link cui-link--blue focus-state">Focus</a>
    <a class="cui-link cui-link--blue disabled">Disabled</a>
  </div>
  <div class="docs-example docs-example--spacing">
    <h3>Green <code class="small">.cui-link--green</code></h3>
    <a class="cui-link cui-link--green">Link</a>
    <a class="cui-link cui-link--green hover-state">Hover</a>
    <a class="cui-link cui-link--green active-state hover-state">Pressed/Active</a>
    <a class="cui-link cui-link--green focus-state">Focus</a>
    <a class="cui-link cui-link--green disabled">Disabled</a>
  </div>
  <div class="docs-example docs-example--spacing">
    <h3>Red <code class="small">.cui-link--red</code></h3>
    <a class="cui-link cui-link--red">Link</a>
    <a class="cui-link cui-link--red hover-state">Hover</a>
    <a class="cui-link cui-link--red active-state hover-state">Pressed/Active</a>
    <a class="cui-link cui-link--red focus-state">Focus</a>
    <a class="cui-link cui-link--red disabled">Disabled</a>
  </div>
  <div class="docs-example docs-example--spacing">
    <h3>Orange <code class="small">.cui-link--orange</code></h3>
    <a class="cui-link cui-link--orange">Link</a>
    <a class="cui-link cui-link--orange hover-state">Hover</a>
    <a class="cui-link cui-link--orange active-state hover-state">Pressed/Active</a>
    <a class="cui-link cui-link--orange focus-state">Focus</a>
    <a class="cui-link cui-link--orange disabled">Disabled</a>
  </div>
  <div class="docs-example docs-example--spacing">
    <h3>Yellow <code class="small">.cui-link--yellow</code></h3>
    <a class="cui-link cui-link--yellow">Link</a>
    <a class="cui-link cui-link--yellow hover-state">Hover</a>
    <a class="cui-link cui-link--yellow active-state hover-state">Pressed/Active</a>
    <a class="cui-link cui-link--yellow focus-state">Focus</a>
    <a class="cui-link cui-link--yellow disabled">Disabled</a>
  </div>`}} />

              /* eslint-enable */
              }
            }
          