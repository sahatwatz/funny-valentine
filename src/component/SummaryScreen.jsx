export default function SummaryScreen() {
  return (
    <div className="bg-white shadow-xl rounded-xl flex flex-col items-center gap-4 p-6">
      <h1 className="text-2xl font-bold">Woo Hoo!</h1>
      <img
        src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzFtNzNxc2U5dmRzMWtiYjYxOXcwbWk0NjV2OTB3MW9kMm8wZHViaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tsJHwLo3kwOx3rRBP0/giphy.gif"
        alt="Loading GIF"
        class="w-128 h-128 rounded"
      />
      <p className="text-lg">
        {String.fromCodePoint(0x1f496, 0x1f497, 0x1f498)}
      </p>
    </div>
  );
}
