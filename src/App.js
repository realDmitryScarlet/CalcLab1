import React, { Component } from 'react';
import Manual from './Manual';
import Auto from './Auto.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form1Hidden: true,
      form2Hidden: true
    }
  }

  handleOnCalculator1 = () => {
    this.setState({ form1Hidden: false, form2Hidden: true });

  }

  handleOnCalculator2 = () => {
    this.setState({ form2Hidden: false, form1Hidden: true });
  }

  render() {

    return <div>
      <div className="pd-top-bottom logo">Калькулятор</div>
      <div className="area area_border">
      <form>
        <div className="container">
          <div className="row">
            <div className="col">
              <input type="radio" id="manual" name="area" value="" onClick={this.handleOnCalculator1} />
              <label htmlFor="manual" className="label">Расчитать площадь</label>
            </div>
            <div className="col">
              <input type="radio" id="auto" name="area" value="" onClick={this.handleOnCalculator2} />
              <label htmlFor="auto" className="label">Указать площадь</label>
            </div>
          </div>
        </div>
      </form>
      <div hidden={this.state.form1Hidden}><Manual /></div>
      <div hidden={this.state.form2Hidden}><Auto /></div>
      </div>
    </div>
  }
}

export default App