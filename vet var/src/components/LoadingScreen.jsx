export default function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 via-white to-orange-100">
      {/* Mascot */}
      <div className="relative">
        <img
          src="puppy.png"
          alt="Petlinc Mascot"
          className="w-28 h-28 animate-bounce"
        />
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-10 h-2 bg-orange-300/40 rounded-full blur-md animate-pulse" />
      </div>

      {/* Text */}
      <h1 className="mt-8 text-2xl font-bold text-gray-800">
        Fetching tail wags... 🐶🐱
      </h1>
      <p className="text-sm text-gray-500 mt-2">
        Just a moment — your pets deserve the best.
      </p>

      {/* Progress Bar */}
      <div className="w-48 h-2 bg-orange-100 rounded-full overflow-hidden mt-6">
        <div className="h-2 bg-orange-500 animate-[progress_1.5s_ease-in-out_infinite]" />
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes progress {
            0% { width: 0%; }
            50% { width: 80%; }
            100% { width: 0%; }
          }
        `}
      </style>
    </div>
  );
}
