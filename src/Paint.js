import React, { Component } from 'react';

class Paint extends Component {


    constructor(props) {
        super(props);
        this.state = {
            consumption: null,
            cost: null
        }
    }


    getConsumption = (event) => {
        const consumption = event.target.value;
        this.setState({ consumption: consumption });

    }

    getCost = (event) => {
        const cost = event.target.value;
        this.setState({ cost: cost });
    }


    render() {
        let area = this.props.area;
        let aCons = Math.ceil(Number(area) / Number(this.state.consumption));
        return <div>
            <form>
                <div className="pd-top-bottom">
                    <input type="number" value={this.state.consumption} name="consumption" className="input_bordered" placeholder="Расход 1 л. на 1 кв. м." onChange={this.getConsumption}></input>
                    <input type="number" value={this.state.cost} name="cost" className="input_bordered" placeholder="Цена 1 л." onChange={this.getCost}></input>
                </div>
                <div className="pd-top-bottom">
                    <div className="text_centered">Вам понадобится: <div className="digit"> {aCons} </div> литров краски.</div>
                    <div className="text_centered">Вы заплатите: <div className="digit"> {aCons * this.state.cost} </div> миллионов долларов.</div>
                </div>
            </form>


        </div>
    }
}

export default Paint