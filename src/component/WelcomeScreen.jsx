function WelcomeScreen({ name }) {
  return (
    <div
      className="bg-white shadow-xl h-70 rounded-xl
    justify-center flex flex-col items-center gap-4 p-6"
    >
      <h1 className="text-2xl font-bold">Hello, {name}!</h1>
      <h1 className="text-2xl font-bold">I'm glad to see you here</h1>
      <p className="text-lg">I have one question for you.</p>
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWo5MzdpcjdyemJtcGI1emdhcXBqcjFtanB4N3docnZsNWR2OGdlYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qE86wtoTSWzaSDVYix/giphy.gif"
        alt="Loading GIF"
        class="w-64 h-64 rounded"
      />
      <button
        onClick={() => onConfirm(name)}
        className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-400"
      >
        Yep, I'm ready
      </button>
    </div>
  );
}

export default WelcomeScreen;
