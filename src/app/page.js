export default function Home() {
  return (
    <div className="min-h-[40vh] max-w-[90vw] w-full mx-auto p-8 bg-gray-100 rounded-lg my-8 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Welcome to NextAuthentication!</h1>
      <p className="text-red-500">
        <b>Important:</b>
        <em>This website is only for tutorial purposes! Do not provide any kind of sensitive data.</em>
      </p>
    </div>
  );
}
