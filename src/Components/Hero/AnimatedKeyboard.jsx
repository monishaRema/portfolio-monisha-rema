import React, { useState, useEffect } from "react";

const AnimatedKeyboard = () => {
  const [activeKey, setActiveKey] = useState(0);

  // Animate random key pulse every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKey(Math.floor(Math.random() * 30));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block p-5 rounded-2xl bg-gradient-to-br from-[#222a3b] to-[#1c2333] shadow-2xl border border-[#263044]/50">
      <div className="flex items-center justify-center gap-10">
        {/* Keyboard */}
        <div
          className="p-5 rounded-xl bg-gradient-to-br from-[#232b41] to-[#25325a] outline-none focus:ring-4 focus:ring-cyan-400 shadow-lg"
          role="group"
          tabIndex={0}
          aria-label="Keyboard illustration"
        >
          <div className="grid grid-cols-10 gap-2">
            {Array.from({ length: 30 }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-sm bg-gradient-to-tr from-[#344055] to-[#48608b]
                  ${activeKey === i ? "ring-2 ring-cyan-400 shadow-cyan-400 shadow-lg animate-pulse" : ""}
                  transition-all duration-200`}
                tabIndex={-1}
                role="presentation"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        {/* Mouse */}
        <div
          className="w-14 h-20 rounded-full bg-gradient-to-b from-[#344055] to-[#232b41] flex flex-col justify-start items-center shadow-lg outline-none focus:ring-4 focus:ring-blue-400 border-2 border-[#223]"
          tabIndex={0}
          aria-label="Mouse illustration"
        >
          {/* Scroll wheel */}
          <div className="w-2 h-8 rounded-full mt-4 bg-gradient-to-b from-blue-500 to-green-800 animate-bounce-slow" />
        </div>
      </div>
    </div>
  );
};


export default AnimatedKeyboard;
