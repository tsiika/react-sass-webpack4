import React from 'react';
import 'bootstrap';
import { render } from 'react-dom';


import './scss/main.scss';
//import './scss/foundation.scss'



const App = () => {
    return(
        <div>
            <h3 className="subheader">React SASS Webpack4</h3>
            <p>Hurraa se toimii kai. Now with Foundation!</p>


<div class="grid-x">
  <div class="cell small-6">6 cells</div>
  <div class="cell small-6">6 cells</div>
</div>


        </div>
    );
}

render(<App/>, document.getElementById('app'));