import React, { Component } from 'react';
import Wallpaper from './Wallpaper';
import Paint from './Paint';

class Auto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            area: null,
            form1Hidden: true,
            form2Hidden: true
        }
    }

    getArea = (event) => {
        const area = event.target.value;
        this.setState({ area: area })
    }
    handleOnCalculator1 = () => {
        this.setState({ form1Hidden: false, form2Hidden: true });
    }

    handleOnCalculator2 = () => {
        this.setState({ form2Hidden: false, form1Hidden: true });
    }


    render() {
        return <div className="area">
            <form>                
            <div className="pd-top-bottom text_centered">Укажите площадь помещения:</div>
                <div className="pd-top-bottom">
                <input type="number" name="area" className="input_bordered" placeholder="Площадь (кв. м.)" onChange={this.getArea}></input>
                </div>
                <form>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="radio" id="paints" name="type" value="" onClick={this.handleOnCalculator1} />
                                <label htmlFor="paints" className="label">Краска</label>
                            </div>
                            <div className="col">
                                <input type="radio" id="walls" name="type" value="" onClick={this.handleOnCalculator2} />
                                <label htmlFor="walls" className="label">Обои</label>
                            </div>
                        </div>
                    </div>
                </form>
                <div hidden={this.state.form1Hidden}><Paint area={this.state.area} /></div>
                <div hidden={this.state.form2Hidden}><Wallpaper area={this.state.area} /></div>
            </form>
        </div>
    }
}
export default Auto