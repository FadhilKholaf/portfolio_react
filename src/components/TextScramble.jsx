import React, { useEffect, useRef } from "react";

class TextScrambleClass {
  constructor(el) {
    this.el = el;
    this.chars = "10";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}
const TextScramble = () => {
  const textRef = useRef(null);
  const textScrambleRef = useRef(null);
  useEffect(() => {
    if (!textScrambleRef.current) {
      textScrambleRef.current = new TextScrambleClass(textRef.current);
    }
    const phrases = [
      "Muhammad Fadhil Kholaf",
      "Web Developer"
    ];
    let counter = 0;
    const next = () => {
      textScrambleRef.current.setText(phrases[counter]).then(() => {
        setTimeout(next, 2000);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
    return () => {
      cancelAnimationFrame(textScrambleRef.current.frameRequest);
    };
  }, []);
  return <p ref={textRef} data-aos="fade-up" className="text fs-5 rounded px-2 mb-2 fw-light"></p>;
};

export default TextScramble;
