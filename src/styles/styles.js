export const pomodoroStyles = {
    container: "flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-4",
    timerContainer: "bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 p-8 max-w-md w-full",
    title: "text-3xl font-bold text-center text-white mb-6",
    timerDisplay: "text-6xl font-mono font-bold text-center text-white mb-8 tracking-wider bg-gray-900/50 py-6 rounded-lg",
    buttonContainer: "flex gap-4 justify-center",
    buttonBase: "px-6 py-3 font-semibold rounded-lg shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-75",
    buttons: {
        start: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-400",
        pause: "bg-yellow-500 hover:bg-yellow-600 text-white focus:ring-yellow-400",
        reset: "bg-red-500 hover:bg-red-600 text-white focus:ring-red-400"
    }
};
