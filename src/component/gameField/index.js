import React from 'react'

const GameField = () => {
    const [place, setPlace] = useState({
        value: '',
        top: 0,
        left: 0,
        face: 0,
        hide: true
    })
    const handleInput = (e) => {
        if (e.minLength < 3 && e.maxLength > 100) {
            console.log('done');
        }
    }

    const onPlace = () => {
        const x = prompt("please provide x")
        const y = prompt("please provide y")

        const match = /[0-4]/g
        const r1 = x?.match(match)
        const r2 = y?.match(match)
        if (r1 && r2) {
            setPlace((prev) => ({
                ...prev,
                left: (x * 100),
                top: (y * 100),
                hide: false
            }))
        }
        else {
            return false;
        }

    }

    const onRotate = (face) => {
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
            default: return null;
        }
    }

    const onForward = (position) => {
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

            default: return null;
        }
    }
    const onReset = () => {
        this.setState({
            hide: true
        })
    }

    return (<div className="shopping-list">
        <div className='button_container'>
            <button className='btn btn-primary ' onClick={() => { onPlace() }}>Place</button>
            <button className='btn btn-primary ' onClick={() => { onRotate('left') }}>Left</button>
            <button className='btn btn-primary ' onClick={() => { onRotate('right') }}>Right</button>
            <button className='btn btn-primary ' onClick={() => { onForward('position') }}>Forward</button>
            <button className='btn btn-primary ' onClick={() => { onReset() }}>Reset</button>
        </div>
        <div className='fieldBackground'>
            {!this.state.hide && <div className="main" style={{
                top: this.state.top,
                left: this.state.left,
            }}

            >
                {/* <img src={logo} className="img" style={{
                    transform: `rotate(${this.state.face}deg)`
                }} alt='image_container' /> */}
            </div>}
        </div>
    </div>
    )
}

export default GameField