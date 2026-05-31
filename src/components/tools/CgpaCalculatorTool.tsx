"use client";
import { useState } from "react";
import { gradePoints, getAcademicStanding } from "@/lib/utils";

interface Course { grade: string; credits: string }

export function CgpaCalculatorTool() {
  const [courses, setCourses] = useState<Course[]>([{ grade: "", credits: "" }]);
  const [result, setResult] = useState<{ cgpa: number; credits: number; points: number } | null>(null);

  function addRow() { setCourses([...courses, { grade: "", credits: "" }]); }
  function removeRow(i: number) { setCourses(courses.filter((_, idx) => idx !== i)); }
  function updateCourse(i: number, field: keyof Course, val: string) {
    setCourses(courses.map((c, idx) => idx === i ? { ...c, [field]: val } : c));
  }

  function calculate() {
    let totalPoints = 0, totalCredits = 0;
    for (const c of courses) {
      if (!c.grade || !c.credits) continue;
      const cr = parseFloat(c.credits) || 0;
      totalPoints += (gradePoints[c.grade] ?? 0) * cr;
      totalCredits += cr;
    }
    if (!totalCredits) return;
    setResult({ cgpa: totalPoints / totalCredits, credits: totalCredits, points: totalPoints });
  }

  return (
    <div>
      <div className="mb-3 space-y-2">
        {courses.map((c, i) => (
          <div key={i} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-center">
            <select value={c.grade} onChange={(e) => updateCourse(i, "grade", e.target.value)}
              className="rounded-lg border border-border bg-bg-3 px-3 py-2 text-sm text-text outline-none focus:border-accent">
              <option value="">Grade</option>
              {Object.keys(gradePoints).map((g) => (
                <option key={g} value={g}>{g} ({gradePoints[g].toFixed(1)})</option>
              ))}
            </select>
            <input type="number" min="1" max="6" placeholder="Credits" value={c.credits}
              onChange={(e) => updateCourse(i, "credits", e.target.value)}
              className="rounded-lg border border-border bg-bg-3 px-3 py-2 text-sm text-text outline-none focus:border-accent" />
            <button onClick={() => removeRow(i)} disabled={courses.length === 1}
              className="rounded-lg border border-rose/20 bg-rose/10 px-3 py-2 text-[13px] text-rose transition-all hover:bg-rose/20 disabled:opacity-30">✕</button>
          </div>
        ))}
      </div>
      <div className="mb-4 flex gap-2">
        <button onClick={addRow} className="rounded-lg border border-border-2 bg-surface-2 px-4 py-2 text-[13px] font-semibold text-text-2 transition-all hover:bg-surface-3">
          + Add Course
        </button>
        <button onClick={calculate} className="rounded-lg bg-accent px-4 py-2 text-[13px] font-semibold text-white transition-all hover:bg-accent-2">
          Calculate CGPA
        </button>
        <button onClick={() => { setCourses([{ grade: "", credits: "" }]); setResult(null); }}
          className="rounded-lg border border-rose/20 bg-rose/10 px-4 py-2 text-[13px] font-semibold text-rose transition-all hover:bg-rose/20">
          Reset
        </button>
      </div>
      {result && (
        <div className="rounded-xl border border-border bg-bg-3 p-4">
          <div className="grid grid-cols-3 gap-3 mb-3">
            {[
              { num: result.cgpa.toFixed(2), label: "CGPA", color: "#9d8ff9" },
              { num: result.credits, label: "Total Credits", color: "#f0f0f8" },
              { num: result.points.toFixed(1), label: "Grade Points", color: "#f0f0f8" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-border bg-surface p-3 text-center">
                <div className="font-display text-2xl font-extrabold" style={{ color: s.color }}>{s.num}</div>
                <div className="mt-0.5 text-[11px] text-text-3">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-amber/20 bg-amber/10 px-4 py-2.5 text-center text-[14px] font-semibold text-amber">
            {getAcademicStanding(result.cgpa)}
          </div>
        </div>
      )}
    </div>
  );
}
