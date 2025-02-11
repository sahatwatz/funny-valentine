function WelcomeScreen({ name, onNext }) {
  return (
    <div
      className="bg-white shadow-xl h-70 rounded-xl
    justify-center flex flex-col items-center gap-4 p-6"
    >
      <h1 className="text-2xl font-bold text-pink-500">Hello, {name}!</h1>
      <h1 className="text-2xl font-bold text-pink-400">
        I'm glad to see you here
      </h1>
      <p className="text-lg text-pink-400">I have one question for you.</p>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGlwcWRzZzRjYW0wZW4zdDQ2dWRhNHlldTRxOTk1NzdkbGZ0NWhpaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FWAcpJsFT9mvrv0e7a/giphy.gif"
        alt="Loading GIF"
        class="w-64 h-64 rounded"
      />
      <button
        onClick={() => onNext()}
        className="py-2.5 mt-5 px-6 text-xl rounded-full
        bg-gradient-to-r from-green-500 to-green-300 text-white
         cursor-pointer font-semibold text-center
          shadow-xs transition-all duration-500 hover:bg-gradient-to-l"
      >
        no worry
      </button>
      <footer class="text-gray-500 text-xs text-center p-4 mt-4">
        <p>&copy; 2025 built by sahatwatz.</p>
      </footer>
    </div>
  );
}

export default WelcomeScreen;
