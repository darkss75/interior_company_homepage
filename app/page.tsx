export default function Home() {
  return (
    <div className="w-full max-w-[1280px] mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to My Centered App</h1>
      <p className="text-lg mb-4">This content should be properly centered</p>
      <div className="border border-gray-300 p-4 rounded-md mb-4 bg-gray-100 dark:bg-gray-800">
        This is a test container to check centering
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {[1, 2, 3].map((item) => (
          <div key={item} className="border p-4 rounded-md bg-white dark:bg-gray-900">
            Card {item}
          </div>
        ))}
      </div>
    </div>
  );
}
