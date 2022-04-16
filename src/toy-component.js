import React, { Component } from 'react';
import logo from './tri.png';
import './App.css';

class AppBootstrap extends Component {
    constructor() {
        super()
        this.state = {
            value: '',
            top: 0,
            left: 0,
            face: 0,
            hide: true
        }
    }

   
    handleInput(e) {
        if (e.minLength < 3 && e.maxLength > 100) {
            console.log('done');
        }
    }

    onPlace() {
        const x = prompt("please provide x")
        const y = prompt("please provide y")

        const match = /[0-4]/g
        const r1 = x?.match(match)
        const r2 = y?.match(match)
        if (r1 && r2) {
            this.setState({
                left: (x * 100),
                top: (y * 100),
                hide: false
            })
        }
        else {
            return false;
        }

    }

    onRotate(face) {
        switch (face) {
            case "left":
                this.setState({
                    face: this.state.face - 90
                })
                break;
            case "right":
                this.setState({
                    face: this.state.face + 90
                })
                break;
        }
    }

    onForward(position) {
        switch ((this.state.face + 360) % 360) {
            case 0:
                if (this.state.top <= 0) {
                    return alert('already top')
                }
                else {
                    this.setState({
                        top: this.state.top - 100,
                    })
                }
                break;
            case 90:
                if (this.state.left >= 400) {
                    return alert('already right')
                }
                else {
                    this.setState({
                        left: this.state.left + 100
                    })
                }
                break;
            case 180:
                if (this.state.top >= 400) {
                    return alert('already bottom')
                }
                else {
                    this.setState({
                        top: this.state.top + 100
                    })
                }
                break;
            case 270:
                if (this.state.left <= 0) {
                    return alert('already left');
                }
                else {
                    this.setState({
                        left: this.state.left - 100
                    })
                }
                break;
        }
    }
    onReset() {
        this.setState({
            hide: true
        })
    }

    render() {
        return (
            <div className="shopping-list">
                <div style={{
                    width: 500,
                    display:'flex',
                    justifyContent:'space-between',
                    margin:'25px auto'
                }}>
                    <button className='btn btn-primary ' onClick={() => {
                        this.onPlace();
                    }}>Place</button>
                    <button className='btn btn-primary ' onClick={() => {
                        this.onRotate('left');
                    }}>Left</button>
                    <button className='btn btn-primary ' onClick={() => {
                        this.onRotate('right');
                    }}>Right</button>
                    <button className='btn btn-primary ' onClick={() => {
                        this.onForward('position');
                    }}>Forward</button>
                    <button className='btn btn-primary ' onClick={() => {
                        this.onReset();
                    }}>Reset</button>
                </div>
                <div style={{
                    height: 500,
                    width: 500,
                    background: 'red',
                    position: 'relative',
                    margin:'auto'
                }}>
                    {!this.state.hide && <div className="main" style={{
                        position: 'absolute',
                        top: this.state.top,
                        left: this.state.left,
                        width: 100,
                        height: 100,
                        background: 'blue',
                        position: 'absolute',
                    }}

                    >
                        <img src={logo} className="img" style={{
                            transform: `rotate(${this.state.face}deg)`
                        }} />
                    </div>}
                </div>
            </div>
        );
    }
}
export default AppBootstrap;