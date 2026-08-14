const SinsOfTheForgotten = () => {
  return (
    <>
<main className="flex flex-col items-center justify-center bg-gray-100 p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Sins Of The Forgotten</h1>
          <p className="mt-2 text-gray-600 max-w-md">
            A psychological terror game developed in Unreal Engine 5. Everything that Resident Evil could have been.
          </p>
        </div>

        <video controls className="w-full max-w-3xl rounded-lg shadow-lg">
          <source src="/videos/Trailer_SOTF_PARAWEB_mini.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
};

export default SinsOfTheForgotten;