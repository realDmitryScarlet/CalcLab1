import React, { Component } from 'react';
import Wallpaper from './Wallpaper';
import Paint from './Paint';

class Manual extends Component {

    constructor(props) {
        super(props);
        this.state = {
            height: null,
            length: null,
            width: null,
            form1Hidden: true,
            form2Hidden: true
        }
    }

    getHeight = (event) => {
        const height = event.target.value;
        this.setState({ height: height });
    }

    getWidth = (event) => {
        const width = event.target.value;
        this.setState({ width: width });
    }

    getLength = (event) => {
        const length = event.target.value;
        this.setState({ length: length });
    }
    handleOnCalculator1 = () => {
        this.setState({ form1Hidden: false, form2Hidden: true });
    }

    handleOnCalculator2 = () => {
        this.setState({ form2Hidden: false, form1Hidden: true });
    }


    render() {

        let manualArea = Number(this.state.height) * (2 * (Number(this.state.length) + Number(this.state.width)));

        return <div className="area">

            <form>
            <div className="pd-top-bottom text_centered">Укажите измерения помещения:</div>
            <div className="pd-top-bottom">
                <input type="number" value={this.state.height} name="height" id="height" className="input_bordered" placeholder="Высота (м)" onChange={this.getHeight}></input>
                <input type="number" value={this.state.width} name="width" className="input_bordered" placeholder="Ширина (м)" onChange={this.getWidth}></input>
                <input type="number" value={this.state.length} name="length" className="input_bordered" placeholder="Длина (м)" onChange={this.getLength}></input>
            </div>    
            <div className="pd-top-bottom text_centered">Площадь: <div className="digit"> {manualArea} </div> кв. м.</div>
                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="radio" id="paints_m" name="type" value="" onClick={this.handleOnCalculator1} />
                                <label htmlFor="paints_m" className="label">Краска</label>
                            </div>
                            <div className="col">
                                <input type="radio" id="walls_m" name="type" value="" onClick={this.handleOnCalculator2} />
                                <label htmlFor="walls_m" className="label">Обои</label>
                            </div>
                        </div>
                    </div>
                </form>
                <div hidden={this.state.form1Hidden}><Paint area={manualArea} /></div>
                <div hidden={this.state.form2Hidden}><Wallpaper area={manualArea} /></div>
            </form>

        </div>
    }
}
export default Manual