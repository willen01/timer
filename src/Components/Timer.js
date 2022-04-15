import React from "react";

export default class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.comecar = this.comecar.bind(this)
        this.iniciar = this.iniciar.bind(this);
        this.pausar = this.pausar.bind(this);
        this.parar = this.parar.bind(this);
        this.state = {
            pseg: 0,
            sseg: 0,
            pmin: 0,
            smin: 0,
            phor: 0,
            shor: 0
        }
    }

    intervalo = 1000;
    tempo;

    comecar() {
        this.tempo = setInterval(this.iniciar, this.intervalo);
    }

    iniciar() {
        this.setState(state => { return { pseg: state.pseg + 1 } }, () => {
            if (this.state.pseg > 9) {
                this.setState(() => { return { pseg: 0 } }, this.mudarDezenaSegundo())
            }
        })
    }

    mudarDezenaSegundo() {
        this.setState(state => { return { sseg: state.sseg + 1 } }, () => {
            if (this.state.sseg > 5) {
                this.setState(() => { return { sseg: 0 } }, this.mudarUnidadeMinuto())
            }
        })
    }

    mudarUnidadeMinuto() {
        this.setState(state => { return { pmin: state.pmin + 1 } }, () => {
            if (this.state.pmin > 9) {
                this.setState(() => { return { pmin: 0 } }, this.mudaDezenaMinuto())
            }
        })
    }

    mudaDezenaMinuto() {
        this.setState(state => { return { smin: state.smin + 1 } }, () => {
            if (this.state.smin > 5) {
                this.setState(() => { return { smin: 0 } }, this.mudarUnidadeHora())
            }
        })
    }

    mudarUnidadeHora() {
        this.setState(state => { return { phor: state.phor + 1 } }, () => {
            if (this.state.phor > 9) {
                this.setState(() => { return { phor: 0 } }, this.mudarDezenaHora())
            }
        })
    }

    mudarDezenaHora() {
        this.setState(state => { return { shor: state.shor + 1 } })
    }

    pausar() {
        clearInterval(this.tempo);
    }

    parar() {
        this.setState(() => {
            return {
                pseg: 0,
                sseg: 0,
                pmin: 0,
                smin: 0,
                phor: 0,
                shor: 0
            }
        })
    }

    render() {
        return (
            <div className="molde">
                <h1 className="relogio">{this.state.shor}{this.state.phor}:{this.state.smin}{this.state.pmin}:{this.state.sseg}{this.state.pseg}</h1>
                <div className="botoes">
                    <button onClick={this.comecar}>Iniciar</button>
                    <button onClick={this.pausar}>Pausar</button>
                    <button onClick={this.parar}>Parar</button>
                </div>
            </div>
        )
    }
} 