"use client";
import { useState, useEffect, useRef } from "react";

const MODES = { pomodoro: 1500, short: 300, long: 900 };
type Mode = keyof typeof MODES;

export function PomodoroTool() {
  const [mode, setMode] = useState<Mode>("pomodoro");
  const [seconds, setSeconds] = useState(MODES.pomodoro);
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            setRunning(false);
            if (mode === "pomodoro") setCount((c) => c + 1);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [running, mode]);

  function switchMode(m: Mode) {
    setMode(m);
    setSeconds(MODES[m]);
    setRunning(false);
  }

  function reset() {
    setSeconds(MODES[mode]);
    setRunning(false);
  }

  const total = MODES[mode];
  const progress = seconds / total;
  const circumference = 2 * Math.PI * 70;
  const offset = circumference * (1 - progress);

  const mm = Math.floor(seconds / 60).toString().padStart(2, "0");
  const ss = (seconds % 60).toString().padStart(2, "0");

  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center gap-1.5 flex-wrap">
        {(Object.keys(MODES) as Mode[]).map((m) => (
          <button key={m} onClick={() => switchMode(m)}
            className="rounded-full border px-3.5 py-1 text-[12px] font-medium capitalize transition-all"
            style={{
              borderColor: mode === m ? "#7c6af7" : "#2a2a3d",
              background: mode === m ? "#1a1730" : "transparent",
              color: mode === m ? "#9d8ff9" : "#6b6b85",
            }}>
            {m === "pomodoro" ? "Focus 25m" : m === "short" ? "Break 5m" : "Long Break 15m"}
          </button>
        ))}
      </div>
      <div className="relative inline-block mb-4">
        <svg width="160" height="160" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="80" cy="80" r="70" fill="none" stroke="#2e2e42" strokeWidth="8" />
          <circle cx="80" cy="80" r="70" fill="none"
            stroke={mode === "pomodoro" ? "#7c6af7" : mode === "short" ? "#22c55e" : "#f59e0b"}
            strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circumference} strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.5s ease" }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="font-display text-4xl font-extrabold tracking-[-3px] text-text">{mm}:{ss}</div>
          <div className="text-[11px] text-text-3 mt-0.5 capitalize">{mode}</div>
        </div>
      </div>
      <div className="mb-4 flex justify-center gap-2">
        <button onClick={() => setRunning(!running)}
          className="rounded-xl bg-accent px-6 py-2.5 text-[13px] font-semibold text-white transition-all hover:bg-accent-2">
          {running ? "⏸ Pause" : seconds === MODES[mode] ? "▶ Start" : "▶ Resume"}
        </button>
        <button onClick={reset} className="rounded-xl border border-border-2 bg-surface-2 px-5 py-2.5 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3">
          ↺ Reset
        </button>
      </div>
      {count > 0 && (
        <div className="text-[13px] text-text-3">
          {"🍅".repeat(Math.min(count, 8))} {count} pomodoro{count !== 1 ? "s" : ""} completed today
        </div>
      )}
      <div className="mt-2 text-[12px] text-text-3">
        {running ? (mode === "pomodoro" ? "Focus mode — stay on task! 💪" : "Break time — relax! ☕")
          : seconds === 0 ? "Session complete! 🎉" : "Ready to start?"}
      </div>
    </div>
  );
}
