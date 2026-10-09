"use client";

import { useEffect, useState } from "react";

type Props = { target: string; launched: boolean };

// 倒计时（DESIGN.md CountdownTimer）：
// - SSR/首帧渲染占位，防 hydration mismatch
// - 到点翻终止态：无负数、无 00:00:00 假活状态
// - launched 为构建时判定常量，rebuild 后 SSR 直接烘焙终止态
export function CountdownTimer({ target, launched }: Props) {
  const [remaining, setRemaining] = useState<number | null>(null);

  useEffect(() => {
    if (launched) return;
    const targetMs = Date.parse(target);
    const tick = () => {
      const left = targetMs - Date.now();
      setRemaining(left <= 0 ? 0 : left);
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target, launched]);

  if (launched) {
    return <p className="empty-state">Early Access is open — the release date page carries the live status.</p>;
  }
  if (remaining === null) {
    return <p className="empty-state">Countdown loading…</p>;
  }
  if (remaining === 0) {
    return <p className="empty-state">Early Access window reached — see the release date page for live status.</p>;
  }
  const d = Math.floor(remaining / 86_400_000);
  const h = Math.floor((remaining % 86_400_000) / 3_600_000);
  const m = Math.floor((remaining % 3_600_000) / 60_000);
  const s = Math.floor((remaining % 60_000) / 1000);
  return (
    <div className="countdown" role="timer" aria-label="Time until Early Access">
      <div><span>{d}</span><small>days</small></div>
      <div><span>{h}</span><small>hours</small></div>
      <div><span>{m}</span><small>minutes</small></div>
      <div><span>{s}</span><small>seconds</small></div>
    </div>
  );
}
