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
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/ThemeContext";



export default function CodingAssessment() {
   const { theme } = useTheme();
const navigate = useNavigate();
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
<div
  className={`
    min-h-screen
    p-6
    ${theme.bg}
    transition-colors
    duration-300
  `}
>
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-48px)]">

    {/* Code Editor */}
    <div
      className={`
        lg:col-span-3
        flex
        flex-col
        rounded-2xl
        overflow-hidden
        border
        transition-colors
        duration-300
        ${theme.cardBg}
        ${theme.border}
        ${theme.shadowMd}
      `}
    >
  {/* Header */}
<div
  className={`
    flex
    items-center
    justify-between
    px-5
    py-4
    border-b
    ${theme.cardBg}
    ${theme.border}
  `}
>
  {/* Left Section */}
  <div className="flex items-center gap-4">

    <select
      className={`
        px-3
        py-2
        text-sm
        font-medium
        rounded-md
        border
        outline-none
        ${theme.cardBg}
        ${theme.border}
        ${theme.textPrimary}
        ${theme.shadow}
        ${theme.focus}
      `}
    >
      <option>JavaScript (Node.js)</option>
      <option>Python</option>
      <option>Java</option>
    </select>

    <div
      className={`
        flex
        items-center
        gap-2
        px-3
        py-1.5
        rounded-full
        text-xs
        font-medium
        ${theme.successBg}
        ${theme.successText}
      `}
    >
      <CheckCircle size={14} />
      Auto Saved
    </div>
  </div>

  {/* Right Section */}
  <div className="flex items-center gap-3">

    <button
      className={`
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-lg
        border
        text-sm
        font-medium
        transition
        ${theme.cardBg}
        ${theme.border}
        ${theme.textPrimary}
        ${theme.hover}
      `}
    >
      <RotateCcw size={16} />
      Reset
    </button>

    <button
      className={`
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-lg
        text-sm
        font-medium
        text-white
        ${theme.info}
      `}
    >
      <Play size={16} />
      Run Code
    </button>

    <button
      className={`
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-lg
        text-sm
        font-medium
        text-white
        ${theme.success}
      `}
    >
      <Send size={16} />
      Submit
    </button>

    <button
      onClick={() => navigate("/interview")}
      className={`
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-xl
        border
        transition-all
        ${theme.cardBg}
        ${theme.border}
        ${theme.textPrimary}
        ${theme.hover}
      `}
    >
      <ArrowLeft size={18} />
      <span>Back to Interview</span>
    </button>

  </div>
</div>

  {/* Editor + Terminal */}
  <div className="grid lg:grid-cols-3 h-[600px]">
    
    {/* Code Editor */}
<div
  className={`
    lg:col-span-2
    flex
    flex-col
    h-full
    border-r
    ${theme.cardBg}
    ${theme.border}
  `}
>
  {/* Top Label */}
  <div
    className={`
      px-5
      py-3
      border-b
      flex
      items-center
      justify-between
      ${theme.border}
      ${theme.cardBg}
    `}
  >
    <div>
      <h3
        className={`
          text-sm
          font-semibold
          ${theme.textPrimary}
        `}
      >
        Code Editor
      </h3>

      <p
        className={`
          text-xs
          mt-1
          ${theme.textMuted}
        `}
      >
        Write and test your solution
      </p>
    </div>

    <div
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        ${theme.infoBg}
        ${theme.infoText}
      `}
    >
      JavaScript
    </div>
  </div>

  {/* Editor Container */}
  <div className="flex-1 p-5 overflow-hidden">

    <div className="h-full rounded-2xl overflow-hidden shadow-2xl border border-gray-700 flex flex-col bg-[#0f172a]">

      {/* Editor Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#111827] border-b border-gray-700">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>

        <div className="flex items-center gap-3">

          <span className="text-xs text-gray-400">
            main.js
          </span>

          <div className="px-3 py-1 rounded-lg bg-slate-800 text-blue-300 text-xs font-medium">
            JavaScript
          </div>
        </div>
      </div>

      {/* Code Area */}
      <div className="flex-1 bg-[#0f172a] overflow-auto">

        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          spellCheck={false}
          className="
            w-full
            h-full
            p-6
            bg-transparent
            text-gray-100
            font-mono
            text-sm
            leading-7
            outline-none
            resize-none
            placeholder:text-gray-500
          "
          placeholder={`function solution(nums) {

  // Write your code here

}`}
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

<div
  className={`
    rounded-2xl
    p-6
    border
    transition-all
    duration-300
    ${theme.cardBg}
    ${theme.border}
    ${theme.shadowMd}
  `}
>
  {/* Header */}
  <div className="flex items-center gap-3 mb-5">
    <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
      <Clock3 className="w-5 h-5 text-indigo-600" />
    </div>

   <div className="space-y-1">
  <h3
    className={`
      text-base
      font-semibold
      tracking-tight
      ${theme.textPrimary}
    `}
  >
    Assessment Duration
  </h3>

  <p
    className={`
      text-sm
      ${theme.textSecondary}
    `}
  >
    Configure the coding test time limit
  </p>
</div>
  </div>

<div className="space-y-4">

  {/* Label */}
  <label
    className={`
      block
      text-sm
      font-medium
      ${theme.textPrimary}
    `}
  >
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
      className={`
        col-span-2
        px-4
        py-3
        rounded-xl
        border
        outline-none
        transition
        ${theme.cardBg}
        ${theme.border}
        ${theme.textPrimary}
        ${theme.focus}
      `}
    />

    <select
      value={timeUnit}
      onChange={(e) => setTimeUnit(e.target.value)}
      className={`
        px-4
        py-3
        rounded-xl
        border
        outline-none
        transition
        ${theme.cardBg}
        ${theme.border}
        ${theme.textPrimary}
        ${theme.focus}
      `}
    >
      <option value="hours">Hr</option>
      <option value="minutes">Min</option>
      <option value="seconds">Sec</option>
    </select>

  </div>

  {/* Set Timer */}
  <button
    onClick={handleSetTimer}
    className={`
      w-full
      py-3
      rounded-xl
      text-white
      font-medium
      transition
      ${theme.primary}
      ${theme.primaryHover}
      ${theme.shadow}
    `}
  >
    Set Timer
  </button>

  {/* Controls */}
  <div className="grid grid-cols-3 gap-3">

    {/* Start */}
    <button
      onClick={handleStart}
      disabled={duration <= 0 || isRunning}
      className={`
        flex
        items-center
        justify-center
        gap-2
        py-3
        rounded-xl
        font-medium
        text-white
        transition
        ${
          duration <= 0 || isRunning
            ? "bg-green-300 cursor-not-allowed"
            : theme.success
        }
      `}
    >
      <Play size={16} />
      Start
    </button>

    {/* Pause */}
    <button
      onClick={handlePause}
      disabled={!isRunning}
      className={`
        flex
        items-center
        justify-center
        gap-2
        py-3
        rounded-xl
        font-medium
        text-white
        transition
        ${
          !isRunning
            ? "bg-yellow-300 cursor-not-allowed"
            : theme.warning
        }
      `}
    >
      <Pause size={16} />
      Pause
    </button>

    {/* Reset */}
    <button
      onClick={handleReset}
      className={`
        flex
        items-center
        justify-center
        py-3
        rounded-xl
        border
        transition
        ${theme.cardBg}
        ${theme.border}
        ${theme.textPrimary}
        ${theme.hover}
      `}
    >
      <RotateCcw size={18} />
    </button>

  </div>

</div>
  {/* Display */}
<div
  className={`
    mt-5
    rounded-2xl
    p-5
    ${theme.primary}
    ${theme.shadowMd}
  `}
>
  {/* Header */}
  <div
    className={`
      flex items-center gap-2 mb-4
      ${theme.secondaryText}
    `}
  >
    <Timer size={18} />
    <span className="text-sm opacity-90">
      Selected Duration
    </span>
  </div>

  {/* Timer Display */}
  <div className="flex justify-center items-center gap-4">

    <div className="text-center">
      <div
        className={`
          text-3xl font-bold
          ${theme.secondaryText}
        `}
      >
        {String(hours).padStart(2, "0")}
      </div>

      <div
        className={`
          text-xs uppercase tracking-wider opacity-80
          ${theme.secondaryText}
        `}
      >
        Hours
      </div>
    </div>

    <span
      className={`
        text-3xl font-bold opacity-70
        ${theme.secondaryText}
      `}
    >
      :
    </span>

    <div className="text-center">
      <div
        className={`
          text-3xl font-bold
          ${theme.secondaryText}
        `}
      >
        {String(minutes).padStart(2, "0")}
      </div>

      <div
        className={`
          text-xs uppercase tracking-wider opacity-80
          ${theme.secondaryText}
        `}
      >
        Min
      </div>
    </div>

    <span
      className={`
        text-3xl font-bold opacity-70
        ${theme.secondaryText}
      `}
    >
      :
    </span>

    <div className="text-center">
      <div
        className={`
          text-3xl font-bold
          ${theme.secondaryText}
        `}
      >
        {String(seconds).padStart(2, "0")}
      </div>

      <div
        className={`
          text-xs uppercase tracking-wider opacity-80
          ${theme.secondaryText}
        `}
      >
        Sec
      </div>
    </div>

  </div>

  {/* Footer */}
  <div
    className={`
      mt-5
      text-center
      text-sm
      opacity-90
      ${theme.secondaryText}
    `}
  >
    Total Duration Configured
  </div>
</div>
</div>



       

         
        </div>
      </div>
    </div>
  );
}