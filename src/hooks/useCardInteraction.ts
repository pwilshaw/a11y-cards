import { useRef, useCallback, useEffect } from 'react';
import { SpringGroup } from './useSpring';
import { clamp, round } from '../lib/math';

export function useCardInteraction() {
  const cardRef = useRef<HTMLDivElement>(null);
  const interactingRef = useRef(false);
  const rafRef = useRef<number>(0);

  const springRotate = useRef(new SpringGroup(['x', 'y'], 0.066, 0.25));
  const springGlare = useRef(new SpringGroup(['x', 'y', 'o'], 0.066, 0.25));
  const springBackground = useRef(new SpringGroup(['x', 'y'], 0.066, 0.25));

  const writeStyles = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;

    const rx = round(springRotate.current.get('x'), 2);
    const ry = round(springRotate.current.get('y'), 2);
    const gx = round(springGlare.current.get('x'), 2);
    const gy = round(springGlare.current.get('y'), 2);
    const go = round(springGlare.current.get('o'), 3);
    const bx = round(springBackground.current.get('x'), 2);
    const by = round(springBackground.current.get('y'), 2);

    const fromCenter = clamp(
      Math.sqrt((gx - 50) ** 2 + (gy - 50) ** 2) / 50,
      0,
      1
    );

    el.style.setProperty('--rotate-x', `${rx}deg`);
    el.style.setProperty('--rotate-y', `${ry}deg`);
    el.style.setProperty('--pointer-x', `${gx}%`);
    el.style.setProperty('--pointer-y', `${gy}%`);
    el.style.setProperty('--pointer-from-center', `${round(fromCenter, 3)}`);
    el.style.setProperty('--pointer-from-left', `${round(gx / 100, 3)}`);
    el.style.setProperty('--pointer-from-top', `${round(gy / 100, 3)}`);
    el.style.setProperty('--card-opacity', `${go}`);
    el.style.setProperty('--background-x', `${bx}%`);
    el.style.setProperty('--background-y', `${by}%`);
  }, []);

  const animate = useCallback(() => {
    const a = springRotate.current.update();
    const b = springGlare.current.update();
    const c = springBackground.current.update();
    writeStyles();

    if (a || b || c || interactingRef.current) {
      rafRef.current = requestAnimationFrame(animate);
    }
  }, [writeStyles]);

  const startAnimation = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(animate);
  }, [animate]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    const el = cardRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const px = clamp((e.clientX - rect.left) / rect.width);
    const py = clamp((e.clientY - rect.top) / rect.height);

    const cx = px - 0.5;
    const cy = py - 0.5;

    springRotate.current.set({
      x: -(cy * 30),
      y: cx * 30,
    });

    springGlare.current.set({
      x: px * 100,
      y: py * 100,
      o: 1,
    });

    springBackground.current.set({
      x: 50 + cx * 20,
      y: 50 + cy * 20,
    });

    if (!interactingRef.current) {
      interactingRef.current = true;
      el.classList.add('interacting');
      startAnimation();
    }
  }, [startAnimation]);

  const handlePointerLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;

    interactingRef.current = false;
    el.classList.remove('interacting');

    springRotate.current.set({ x: 0, y: 0 });
    springGlare.current.set({ x: 50, y: 50, o: 0 });
    springBackground.current.set({ x: 50, y: 50 });

    startAnimation();
  }, [startAnimation]);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return {
    cardRef,
    handlers: {
      onPointerMove: handlePointerMove,
      onPointerLeave: handlePointerLeave,
    },
  };
}
