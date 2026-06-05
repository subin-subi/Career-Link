import {
  Play,
  Send,
  RotateCcw,
  ChevronRight,
  CheckCircle,
  XCircle,
  Pause
} from "lucide-react";
import { useState, useEffect } from "react";
import { Clock3, Timer } from "lucide-react";





export default function CodingAssessment() {

const [inputValue, setInputValue] = useState("");
const [timeUnit, setTimeUnit] = useState("minutes");
const [duration, setDuration] = useState(0);
const [isRunning, setIsRunning] = useState(false);


const [code, setCode] = useState(`function twoSum(nums, target) {
  // Write your code here
}`);

const handleSetTimer = () => {
  if (!inputValue || Number(inputValue) <= 0) return;

  let milliseconds = 0;

  switch (timeUnit) {
    case "hours":
      milliseconds = Number(inputValue) * 60 * 60 * 1000;
      break;

    case "minutes":
      milliseconds = Number(inputValue) * 60 * 1000;
      break;

    case "seconds":
      milliseconds = Number(inputValue) * 1000;
      break;

    default:
      milliseconds = 0;
  }

  setDuration(milliseconds);
  setIsRunning(false); // Wait for Start button
};


useEffect(() => {
  let interval;

  if (isRunning && duration > 0) {
    interval = setInterval(() => {
      setDuration((prev) => Math.max(prev - 1000, 0));
    }, 1000);
  }

  return () => clearInterval(interval);
}, [isRunning, duration]);
const handleStart = () => {
  if (duration > 0) {
    setIsRunning(true);
  }
};

const handlePause = () => {
  setIsRunning(false);
};

const handleReset = () => {
  setDuration(0);
  setInputValue("");
  setTimeUnit("minutes");
  setIsRunning(false);
};
const hours = Math.floor(duration / (1000 * 60 * 60));

const minutes = Math.floor(
  (duration % (1000 * 60 * 60)) / (1000 * 60)
);

const seconds = Math.floor(
  (duration % (1000 * 60)) / 1000
);
return (
  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">

  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-48px)]">

    {/* Code Editor */}
    <div className="lg:col-span-3 flex flex-col bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">

  {/* Header */}
<div className="flex items-center justify-between px-5 py-4 border-b bg-gray-50">
  
  {/* Left Section */}
  <div className="flex items-center gap-4">
  <select className="px-3 py-2 text-sm font-medium bg-white border border-gray-200 rounded-md text-gray-700 shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300">
  <option>JavaScript (Node.js)</option>
  <option>Python</option>
  <option>Java</option>
</select>
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
      <CheckCircle size={14} />
      Auto Saved
    </div>
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-3">

    <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition text-sm font-medium">
      <RotateCcw size={16} />
      Reset
    </button>

    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white transition text-sm font-medium shadow-sm">
      <Play size={16} />
      Run Code
    </button>

    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white transition text-sm font-medium shadow-sm">
      <Send size={16} />
      Submit
    </button>

  </div>
</div>

  {/* Editor + Terminal */}
  <div className="grid lg:grid-cols-3 h-[600px]">
    
    {/* Code Editor */}
<div className="lg:col-span-2 border-r bg-white flex flex-col h-full">

  {/* Top Label */}
  <div className="px-4 py-2 border-b bg-gray-50 text-sm font-medium">
    Code Editor
  </div>

  {/* Editor Container */}
  <div className="flex-1 overflow-hidden p-4">
    
    <div className="h-full rounded-xl border border-gray-200 bg-[#0f172a] shadow-lg overflow-hidden flex flex-col">

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#111827] border-b border-gray-700">
        
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <div className="text-xs text-gray-300 font-medium">
          JavaScript
        </div>

      </div>

      {/* Code Block */}
  <div className="flex-1 p-5 bg-[#0f172a] overflow-auto">
  <textarea
    className="w-full h-full bg-transparent text-gray-100 font-mono text-sm leading-relaxed outline-none resize-none"
    value={code}
    onChange={(e) => setCode(e.target.value)}
    spellCheck={false}
  />
</div>

    </div>
  </div>
</div>

    {/* Terminal */}
    <div className="bg-[#0d1117] text-green-400 flex flex-col">
      <div className="px-4 py-2 border-b border-gray-700 flex items-center justify-between">
        <span className="text-sm font-medium text-white">
          Console Output
        </span>

        <button className="text-xs text-gray-400 hover:text-white">
          Clear
        </button>
      </div>

      <div className="flex-1 p-4 font-mono text-sm overflow-auto">
        <p>{">"} Running test cases...</p>
        <p className="text-green-300">
          ✓ Test Case 1 Passed
        </p>
        <p className="text-green-300">
          ✓ Test Case 2 Passed
        </p>
        <p className="text-red-400">
          ✗ Test Case 3 Failed
        </p>

        <br />

        <p className="text-blue-300">
          Output:
        </p>

        <p>[0, 1]</p>
      </div>
    </div>
  </div>

  {/* Footer */}
 
</div>

        {/* Right Sidebar */}
        <div className="space-y-4">
          
          {/* Progress =========>>>>*/}

<div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
  {/* Header */}
  <div className="flex items-center gap-3 mb-5">
    <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
      <Clock3 className="w-5 h-5 text-indigo-600" />
    </div>

    <div>
      <h3 className="font-semibold text-gray-900">
        Assessment Duration
      </h3>
      <p className="text-xs text-gray-500">
        Configure the coding test time limit
      </p>
    </div>
  </div>

<div className="space-y-4">
  <label className="block text-sm font-medium text-gray-700">
    Assessment Duration
  </label>

  {/* Duration + Unit */}
  <div className="grid grid-cols-3 gap-3">
    <input
      type="number"
      min="1"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Duration"
      className="col-span-2 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
    />

    <select
      value={timeUnit}
      onChange={(e) => setTimeUnit(e.target.value)}
      className="px-4 py-3 rounded-xl border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-500 outline-none"
    >
      <option value="hours">Hr</option>
      <option value="minutes">Min</option>
      <option value="seconds">Sec</option>
    </select>
  </div>

  {/* Set Timer */}
  <button
    onClick={handleSetTimer}
    className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition"
  >
    Set Timer
  </button>

  {/* Controls */}
 

<div className="grid grid-cols-3 gap-3">
  {/* Start */}
  <button
    onClick={handleStart}
    disabled={duration <= 0 || isRunning}
    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-white transition
      ${
        duration <= 0 || isRunning
          ? "bg-green-300 cursor-not-allowed"
          : "bg-green-600 hover:bg-green-700"
      }`}
  >
    <Play size={16} />
    Start
  </button>

  {/* Pause */}
  <button
    onClick={handlePause}
    disabled={!isRunning}
    className={`flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-white transition
      ${
        !isRunning
          ? "bg-amber-300 cursor-not-allowed"
          : "bg-amber-500 hover:bg-amber-600"
      }`}
  >
    <Pause size={16} />
    Pause
  </button>

  {/* Reset */}
  <button
    onClick={handleReset}
    className="flex items-center justify-center py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
  >
    <RotateCcw size={18} />
  </button>
</div>




</div>
  {/* Display */}
 <div className="mt-5 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-600 p-5 text-white">
  <div className="flex items-center gap-2 mb-4">
    <Timer size={18} />
    <span className="text-sm opacity-90">
      Selected Duration
    </span>
  </div>

 <div className="flex justify-center items-center gap-3">
  <div className="text-center">
    <div className="text-2xl font-bold">
      {String(hours).padStart(2, "0")}
    </div>
    <div className="text-[10px] uppercase tracking-wide">
      Hours
    </div>
  </div>

  <span className="text-2xl font-bold opacity-70">:</span>

  <div className="text-center">
    <div className="text-2xl font-bold">
      {String(minutes).padStart(2, "0")}
    </div>
    <div className="text-[10px] uppercase tracking-wide">
      Min
    </div>
  </div>

  <span className="text-2xl font-bold opacity-70">:</span>

  <div className="text-center">
    <div className="text-2xl font-bold">
      {String(seconds).padStart(2, "0")}
    </div>
    <div className="text-[10px] uppercase tracking-wide">
      Sec
    </div>
  </div>
</div>

  <div className="mt-4 text-center text-sm opacity-90">
    Total Duration Configured
  </div>
</div>
</div>



       

         
        </div>
      </div>
    </div>
  );
}