import React, { useState, useCallback, useMemo } from "react";
import { useLocation } from "react-router-dom";
// We'll import Monaco after installing dependency. Fallback textarea meanwhile.
let MonacoEditor;
try {
  MonacoEditor = require("@monaco-editor/react").default;
} catch (e) {}

const starterCode = `function twoSum(nums, target) {\n  // nums: number[]\n  // return indices of the two numbers that add up to target\n  // Write your solution below:\n  for (let i = 0; i < nums.length; i++) {\n    for (let j = i + 1; j < nums.length; j++) {\n      if (nums[i] + nums[j] === target) return [i, j];\n    }\n  }\n  return [];\n}\n\nmodule.exports = twoSum;`;

const sampleTests = [
  { id: 1, input: "nums=[2,7,11,15], target=9", expected: "[0,1]" },
  { id: 2, input: "nums=[3,2,4], target=6", expected: "[1,2]" },
  { id: 3, input: "nums=[3,3], target=6", expected: "[0,1]" },
];

export default function TechnicalRoundPage() {
  const location = useLocation();
  const params = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const interviewType = params.get("type") || "dsa";
  const difficulty = params.get("difficulty") || "easy";
  const mode = params.get("mode") || "normal";
  const [code, setCode] = useState(starterCode);
  const [language, setLanguage] = useState("javascript");
  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);
  const [activeTab, setActiveTab] = useState("problem");

  const runCode = useCallback(() => {
    // Simple sandbox using Function (ONLY for local dev placeholder – replace with backend execution service later)
    setRunning(true);
    setTimeout(() => {
      try {
        const fn = new Function("require", `${code}; return module.exports;`)(
          () => {}
        );
        const results = sampleTests.map((t) => {
          // Parse input quickly from string (hacky placeholder)
          const matchNums = t.input.match(/nums=\[(.*)\]/);
          const matchTarget = t.input.match(/target=(\d+)/);
          const nums = matchNums
            ? matchNums[1].split(",").map((n) => parseInt(n.trim()))
            : [];
          const target = matchTarget ? parseInt(matchTarget[1]) : 0;
          const res = JSON.stringify(fn(nums, target));
          const pass = res === t.expected;
          return { ...t, res, pass };
        });
        const summary = results
          .map(
            (r) =>
              `${r.pass ? "✅" : "❌"} Test ${r.id}: expected ${
                r.expected
              }, got ${r.res}`
          )
          .join("\n");
        setOutput(summary);
      } catch (err) {
        setOutput("Error: " + err.message);
      } finally {
        setRunning(false);
      }
    }, 150);
  }, [code]);

  return (
    <div className="min-h-screen text-white px-4 py-6 md:p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold tracking-tight">
            {interviewType === "behavioral"
              ? "Behavioral Round"
              : "Technical Round"}
          </h1>
          <div className="flex gap-2">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="bg-white/10 border border-white/10 rounded px-2 py-1 text-xs"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript" disabled>
                TypeScript (soon)
              </option>
              <option value="python" disabled>
                Python (soon)
              </option>
            </select>
            <button
              onClick={runCode}
              disabled={running}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-md text-sm font-medium"
            >
              {running ? "Running..." : "Run Tests"}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col h-[480px] overflow-hidden">
              <div className="flex gap-4 border-b border-white/10 mb-3 text-xs">
                {["problem", "tests", "output"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-1 px-2 rounded-t-md ${
                      activeTab === tab
                        ? "bg-indigo-600 text-white"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
              <div className="flex-1 overflow-auto text-sm leading-relaxed pr-1">
                {activeTab === "problem" && (
                  <div className="space-y-3">
                    {interviewType === "behavioral" ? (
                      <div className="space-y-3">
                        <h2 className="text-sm font-semibold text-indigo-300">
                          Describe a Challenge
                        </h2>
                        <p className="text-slate-300 text-xs">
                          Explain a difficult problem you faced in a project,
                          how you approached it, and the impact of your
                          solution.
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Use STAR format (Situation, Task, Action, Result).
                          After submission an AI feedback module will (future)
                          evaluate clarity, ownership, and impact.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <h2 className="text-sm font-semibold text-indigo-300">
                          Two Sum ({difficulty})
                        </h2>
                        <p className="text-slate-300 text-xs">
                          Given an array of integers nums and an integer target,
                          return indices of the two numbers such that they add
                          up to target.
                        </p>
                        <pre className="bg-black/30 p-3 rounded text-[11px] text-indigo-200 overflow-auto">
                          Input: nums = [2,7,11,15], target = 9\nOutput: [0,1]
                        </pre>
                        <p className="text-[11px] text-slate-400">
                          Assume exactly one solution and you may not use the
                          same element twice. Mode: {mode}.
                        </p>
                      </div>
                    )}
                  </div>
                )}
                {activeTab === "tests" && (
                  <ul className="text-[11px] space-y-2">
                    {sampleTests.map((t) => (
                      <li key={t.id} className="bg-white/5 rounded p-2">
                        <span className="text-indigo-200">{t.input}</span>
                        <span className="px-1 text-slate-500">⇒</span>
                        <span className="text-emerald-300">{t.expected}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {activeTab === "output" && (
                  <pre className="text-[11px] whitespace-pre-wrap bg-black/30 rounded p-3 min-h-full">
                    {output || "Run tests to see results..."}
                  </pre>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden h-[480px] flex flex-col">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 text-xs text-slate-300">
                <span>Editor</span>
                <span className="italic text-slate-500">{language}</span>
              </div>
              <div className="flex-1 min-h-0">
                {MonacoEditor ? (
                  <MonacoEditor
                    height="100%"
                    theme="vs-dark"
                    language={
                      language === "javascript" ? "javascript" : "javascript"
                    }
                    value={code}
                    onChange={(val) => setCode(val || "")}
                    options={{
                      fontSize: 14,
                      minimap: { enabled: false },
                      scrollBeyondLastLine: false,
                    }}
                  />
                ) : (
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-full bg-black/40 p-3 font-mono text-[12px] text-indigo-100 outline-none"
                  />
                )}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-[11px] text-slate-300">
              <p className="mb-2 font-semibold text-indigo-200">Instructions</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Write your solution in the function provided.</li>
                <li>Click Run Tests to evaluate sample cases.</li>
                <li>Edge cases & performance matter in final evaluation.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
