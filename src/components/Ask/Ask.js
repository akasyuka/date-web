import React, { Component } from 'react';
import p5 from 'p5';

class Ask extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    this.myP5 = new p5(this.AskSketch, this.myRef.current);
  }

  AskSketch = (p) => {
    let needle;
    let pts3;

    p.preload = () => {
      needle = p.loadFont("/fonts/Arial.ttf");
    };

    p.setup = () => {
      p.createCanvas(350, 70);
      p.textAlign(p.CENTER, p.CENTER);
      p.strokeWeight(1);
      pts3 = needle.textToPoints("СВИДАНИЕ?", 0, 0, 50, {
        sampleFactor: 0.2,
      });
    };

    p.draw = () => {
      p.background(255);
      const d = p.sin(p.frameCount / 50) * 1;
      const angle = p.frameCount / 100;
      p.push();
      p.stroke(25, 117, 209);
      p.translate(30, p.height - 10);
      for (let i = 0; i < pts3.length; i++) {
        p.push();
        p.translate(pts3[i].x, pts3[i].y);
        p.rotate(angle);
        p.line(-d, -d, +d, +d);
        p.line(+d, -d, -d, +d);
        p.pop();
      }
      p.pop();
    };

    p.ns = (x, y, z, scale_, min_, max_) => {
      return p.map(p.noise(x * scale_, y * scale_, z * scale_), 0, 1, min_, max_);
    };
  };

  render() {
    return <div ref={this.myRef}></div>;
  }
}

export default Ask;