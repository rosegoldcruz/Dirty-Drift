'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Matter from 'matter-js';

type NavFlingIconsProps = {
  triggerCount: number;
};

type LoadedIcon = {
  img: HTMLImageElement;
  ratio: number;
};

type IconBody = {
  body: Matter.Body;
  height: number;
  img: HTMLImageElement;
  width: number;
};

const ICONS = [
  '/icons/dw.svg',
  '/icons/dw3.svg',
  '/icons/wave.svg',
  '/icons/surf.svg',
  '/icons/surfboard.svg',
  '/icons/burger.svg',
  '/icons/mug.svg',
  '/icons/mug2.svg',
  '/icons/umbrella.svg',
  '/icons/fire.svg',
  '/icons/wing.svg',
  '/icons/horizon.svg',
  '/icons/neon-sign-icon.svg',
  '/icons/spatula.svg',
  '/icons/booger.svg'
];

const COUNT = 10;

export function NavFlingIcons({ triggerCount }: NavFlingIconsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const rafRef = useRef<number | null>(null);
  const iconsLoadedRef = useRef<LoadedIcon[] | null>(null);
  const bodiesRef = useRef<IconBody[]>([]);
  const isActiveRef = useRef(false);
  const [assetsReadyTick, setAssetsReadyTick] = useState(0);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      ICONS.map(
        (src) =>
          new Promise<LoadedIcon>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              const naturalWidth = img.naturalWidth || 1;
              const naturalHeight = img.naturalHeight || 1;
              resolve({ img, ratio: naturalWidth / naturalHeight });
            };
            img.onerror = () => reject(new Error(`Failed to load ${src}`));
            img.src = src;
          })
      )
    )
      .then((loaded) => {
        if (!cancelled) {
          iconsLoadedRef.current = loaded;
          setAssetsReadyTick((count) => count + 1);
        }
      })
      .catch(() => {
        if (!cancelled) {
          iconsLoadedRef.current = [];
          setAssetsReadyTick((count) => count + 1);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const cleanup = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    if (engineRef.current) {
      Matter.World.clear(engineRef.current.world, false);
      Matter.Engine.clear(engineRef.current);
      engineRef.current = null;
    }

    bodiesRef.current = [];
    isActiveRef.current = false;

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
  }, []);

  useEffect(() => {
    if (triggerCount === 0) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    const loadedIcons = iconsLoadedRef.current;
    if (!context || !loadedIcons || loadedIcons.length === 0) {
      return;
    }

    cleanup();
    isActiveRef.current = true;

    const devicePixelRatio = Math.max(1, window.devicePixelRatio || 1);
    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = Math.floor(width * devicePixelRatio);
    canvas.height = Math.floor(height * devicePixelRatio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

    const engine = Matter.Engine.create();
    engineRef.current = engine;
    engine.world.gravity.y = 1;
    engine.world.gravity.scale = 0.001;

    const wallLeft = Matter.Bodies.rectangle(-50, 0.5 * height, 100, 3 * height, {
      isStatic: true,
      restitution: 0.8
    });
    const wallTop = Matter.Bodies.rectangle(0.5 * width, -50, 3 * width, 100, {
      isStatic: true,
      restitution: 0.8
    });

    Matter.World.add(engine.world, [wallLeft, wallTop]);

    const isMobile = width <= 768;
    const bodies: IconBody[] = [];

    for (let index = 0; index < COUNT; index += 1) {
      const icon = loadedIcons[Math.floor(Math.random() * loadedIcons.length)];
      const startX = width + Math.random() * width * 0.4;
      const startY = 0.8 * height - Math.random() * height * 0.4;
      const iconHeight = isMobile ? Math.round(40 + Math.random() * 40) : Math.round(60 + Math.random() * 60);
      const iconWidth = iconHeight * icon.ratio;
      const angleDegrees = Math.floor(Math.random() * 61 - 30);
      const angleRadians = (angleDegrees * Math.PI) / 180;
      const forceX = -0.01 * (60 * Math.random() + 33);
      const forceY = -0.01 * (30 * Math.random() + 10);

      const body = Matter.Bodies.rectangle(startX, startY, iconWidth, iconHeight, {
        friction: 0.9,
        restitution: 0.8,
        frictionAir: 0
      });

      Matter.Body.setAngle(body, angleRadians);
      Matter.Body.setMass(body, 6);
      Matter.World.add(engine.world, body);
      Matter.Body.applyForce(body, body.position, { x: forceX, y: forceY });

      bodies.push({
        body,
        height: iconHeight,
        img: icon.img,
        width: iconWidth
      });
    }

    bodiesRef.current = bodies;

    const animate = () => {
      if (!isActiveRef.current || !engineRef.current) {
        return;
      }

      Matter.Engine.update(engine, 1000 / 60);

      context.clearRect(0, 0, width, height);

      bodiesRef.current = bodiesRef.current.filter((item) => {
        const { body, height: itemHeight, img, width: itemWidth } = item;

        if (body.position.y > height + 100) {
          Matter.World.remove(engine.world, body);
          return false;
        }

        context.save();
        context.translate(body.position.x, body.position.y);
        context.rotate(body.angle);
        try {
          context.drawImage(img, -itemWidth / 2, -itemHeight / 2, itemWidth, itemHeight);
        } catch {
          context.restore();
          return true;
        }
        context.restore();
        return true;
      });

      if (bodiesRef.current.length === 0) {
        cleanup();
        return;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return cleanup;
  }, [assetsReadyTick, cleanup, triggerCount]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0"
      style={{ zIndex: 45 }}
    />
  );
}
