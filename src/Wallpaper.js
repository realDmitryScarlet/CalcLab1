import React, { Component } from 'react';

class Wallpaper extends Component {


    constructor(props) {
        super(props);
        this.state = {
            cost: null,
            length: null,
            width: null
        }
    }   

    getCost = (event) => {
        const cost = event.target.value;
        this.setState({ cost: cost });
    }

    getWidth = (event) => {
        const width = event.target.value;
        this.setState({ width: width });
    }

    getLength = (event) => {
        const length = event.target.value;
        this.setState({ length: length });
    }

    render() {
        let area = this.props.area;
        let aWall = Math.ceil(Number(area) / (Number(this.state.width) * Number(this.state.length)));
        return <div>            
            <form>
                <div className="pd-top-bottom">
                <input type="number" value={this.state.cost} name="cost" className="input_bordered" placeholder="Цена за 1 рулон" onChange={this.getCost}></input>
                <input type="number" value={this.state.width} name="width" className="input_bordered" placeholder="Ширина 1 рулона (м)"  onChange={this.getWidth}></input>
                <input type="number" value={this.state.length} name="length" className="input_bordered" placeholder="Длина 1 рулона (м)"  onChange={this.getLength}></input>
                </div>
                <div className="pd-top-bottom">
                <div className="text_centered">Вам понадобится: <div className="digit"> {aWall} </div> рулонов.</div>
                <div className="text_centered">Вы заплатите: <div className="digit"> {aWall * this.state.cost} </div> миллионов долларов.</div>
                </div>
            </form>


        </div>
    }
}

export default Wallpaper