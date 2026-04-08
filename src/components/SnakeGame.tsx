"use client";
import { useEffect, useRef } from "react";
import { useLanguage } from '../context/LanguageContext';
import styles from "./SnakeGame.module.css";

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mateSvgDataUrl =
      "data:image/svg+xml;charset=utf-8," +
      encodeURIComponent(`
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="10" y="9" width="81" height="81" fill="url(#pattern0_2301_126)"/>
            <defs>
            <pattern id="pattern0_2301_126" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlink:href="#image0_2301_126" transform="scale(0.00520833)"/>
            </pattern>
            <image id="image0_2301_126" width="192" height="192" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
            </defs>
            </svg>         
    `);
    const foodImg = new Image();
    foodImg.src = mateSvgDataUrl;

    const gridSize = 20;
    const tileCountX = canvas.width / gridSize;
    const tileCountY = canvas.height / gridSize;

    let snake = [
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 },
    ];
    let dx = 1;
    let dy = 0;

    let food = {
      x: Math.floor(Math.random() * tileCountX),
      y: Math.floor(Math.random() * tileCountY),
    };

    let speed = 10;
    let lastTime = 0;

    function gameLoop(timestamp: number) {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;

      if (deltaTime > 1000 / speed) {
        update();
        draw();
        lastTime = timestamp;
      }

      requestAnimationFrame(gameLoop);
    }

    function update() {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      if (head.x < 0) head.x = tileCountX - 1;
      if (head.x >= tileCountX) head.x = 0;
      if (head.y < 0) head.y = tileCountY - 1;
      if (head.y >= tileCountY) head.y = 0;

      const hitIndex = snake.findIndex(
        (segment) => segment.x === head.x && segment.y === head.y,
      );
      if (hitIndex !== -1) {
        snake = snake.slice(0, hitIndex);
      }

      snake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        food = {
          x: Math.floor(Math.random() * tileCountX),
          y: Math.floor(Math.random() * tileCountY),
        };
        if (speed < 20) speed += 0.2;
      } else {
        snake.pop();
      }
    }

    function draw() {
      const cvs = canvasRef.current;
      if (!cvs) return;

      ctx!.fillStyle = "#000000";
      ctx!.fillRect(0, 0, cvs.width, cvs.height);

      ctx!.fillStyle = "#ffffff";
      snake.forEach((segment, index) => {
        ctx!.fillRect(
          segment.x * gridSize,
          segment.y * gridSize,
          gridSize - 1,
          gridSize - 1,
        );
      });

      if (foodImg.complete) {
        ctx!.drawImage(
          foodImg,
          food.x * gridSize,
          food.y * gridSize,
          gridSize,
          gridSize,
        );
      } else {
        ctx!.fillStyle = "#ffffff";
        ctx!.fillRect(
          food.x * gridSize,
          food.y * gridSize,
          gridSize - 1,
          gridSize - 1,
        );
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].indexOf(
          e.code,
        ) > -1
      ) {
        e.preventDefault();
      }

      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          if (dy === 1) break;
          dx = 0;
          dy = -1;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          if (dy === -1) break;
          dx = 0;
          dy = 1;
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          if (dx === 1) break;
          dx = -1;
          dy = 0;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          if (dx === -1) break;
          dx = 1;
          dy = 0;
          break;
      }
    }

    const currentCanvas = canvasRef.current;
    if (currentCanvas) {
      currentCanvas.addEventListener("keydown", handleKeyDown);
    }

    requestAnimationFrame(gameLoop);

    return () => {
      if (currentCanvas) {
        currentCanvas.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  return (
    <section
      className="section"
      style={{ padding: "4rem 0", backgroundColor: "#000" }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            color: "#fff",
            marginBottom: "1.5rem",
            fontWeight: 600,
          }}
        >
          {t.game.title}
        </h3>
        <p
          style={{
            color: "var(--muted)",
            marginBottom: "2rem",
            fontSize: "0.9rem",
          }}
        >
          {t.game.desc}
        </p>
        <div className={styles.gameWrapper}>
          <canvas
            ref={canvasRef}
            width={600}
            height={400}
            className={styles.canvas}
            tabIndex={0}
          />
        </div>
      </div>
    </section>
  );
}
