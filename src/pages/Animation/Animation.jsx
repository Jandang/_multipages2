/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import './Animation.css';

const fieldWidth = 600;
const fieldHeight = 400;
const ballDiameter = 100;
const maxRight = fieldWidth - ballDiameter - 2;
const maxTop = fieldHeight - ballDiameter - 2;
const vx = 6;
const vy = 6;

const App = () => {
    const [x, setX] = useState((fieldWidth - ballDiameter) / 2);
    const [y, setY] = useState((fieldHeight - ballDiameter) / 2);
    const [goRight, setGoRight] = useState(true);
    const [goDown, setGoDown] = useState(true);
    const [running, setRunning] = useState(true); // บอลเริ่มวิ่ง
    const [rotation, setRotation] = useState(0);
    const [rotateDirection, setRotateDirection] = useState(1);
    const [rotateSpeed, setRotateSpeed] = useState(5);
    const [ballType, setBallType] = useState(''); // เก็บ ballType

    const runClick = () => {
        setRunning(!running);
    };

    const randomRotate = () => {
        setRotateSpeed(Math.floor(Math.random() * 10) + 1);
    };

    const rotate = () => {
        setRotation((prev) => prev + rotateDirection * rotateSpeed);
    };

    const calculatePosition = () => {
        if (goRight) {
            setX((prevX) => {
                if (prevX >= maxRight) {
                    setGoRight(false);
                    setRotateDirection(-rotateDirection);
                    randomRotate();
                    return maxRight;
                }
                return prevX + vx;
            });
        } else {
            setX((prevX) => {
                if (prevX <= 0) {
                    setGoRight(true);
                    setRotateDirection(-rotateDirection);
                    randomRotate();
                    return 0;
                }
                return prevX - vx;
            });
        }

        if (goDown) {
            setY((prevY) => {
                if (prevY >= maxTop) {
                    setGoDown(false);
                    setRotateDirection(-rotateDirection);
                    randomRotate();
                    return maxTop;
                }
                return prevY + vy;
            });
        } else {
            setY((prevY) => {
                if (prevY <= 0) {
                    setGoDown(true);
                    setRotateDirection(-rotateDirection);
                    randomRotate();
                    return 0;
                }
                return prevY - vy;
            });
        }

        rotate();
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (running) {
                calculatePosition();
            }
        }, 25);

        return () => clearInterval(interval);
    }, [running, goRight, goDown]);

    return (
        <div id="container">
            <div id="field" style={{ width: fieldWidth, height: fieldHeight }}>
                <div
                    id="ball"
                    className={ballType}
                    style={{
                        width: ballDiameter,
                        height: ballDiameter,
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                ></div>
            </div>
            <div id="control">
                <button id="run" onClick={runClick} className={`btn btn-sm ${running ? 'btn-warning' : 'btn-success'}`}>
                    {running ? 'Pause' : 'Run'}
                </button>
                <span className="position-right">
                    <button
                        onClick={() => setBallType('none')}
                        style={{ marginRight: '5px' }}
                        className={`btn btn-outline-primary btn-sm ${ballType === 'none' ? 'active' : ''}`}
                    >
                        None
                    </button>
                    <button
                        onClick={() => setBallType('basketball')}
                        style={{ marginRight: '5px' }}
                        className={`btn btn-outline-primary btn-sm ${ballType === 'basketball' ? 'active' : ''}`}
                    >
                        Basketball
                    </button>
                    <button
                        onClick={() => setBallType('football')}
                        style={{ marginRight: '5px' }}
                        className={`btn btn-outline-primary btn-sm ${ballType === 'football' ? 'active' : ''}`}
                    >
                        Football
                    </button>
                    <button
                        onClick={() => setBallType('volleyball')}
                        style={{ marginRight: '5px' }}
                        className={`btn btn-outline-primary btn-sm ${ballType === 'volleyball' ? 'active' : ''}`}
                    >
                        Volleyball
                    </button>
                    <button
                        onClick={() => setBallType('human')}
                        style={{ marginRight: '5px' }}
                        className={`btn btn-outline-primary btn-sm ${ballType === 'human' ? 'active' : ''}`}
                    >
                        Human
                    </button>
                    <button
                        onClick={() => setBallType('cartoon')}
                        style={{ marginRight: '5px' }}
                        className={`btn btn-outline-primary btn-sm ${ballType === 'cartoon' ? 'active' : ''}`}
                    >
                        Cartoon
                    </button>
                    <button
                        onClick={() => setBallType('logo')}
                        className={`btn btn-outline-primary btn-sm ${ballType === 'logo' ? 'active' : ''}`}
                    >
                        Logo
                    </button>
                </span>
            </div>
        </div>
    );
};

export default App;
