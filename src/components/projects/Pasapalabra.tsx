const Pasapalabra = () => {
  return (
    <>
<main className="flex flex-col items-center justify-center bg-gray-100 p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800">Pasapalabra Nucleo Founders</h1>
          <p className="mt-2 text-gray-600 max-w-md">
            An app to add an overlay in OBS for the metings of Nucleo Founders developed in node.js. A twist of the famous Pasapalabra TV show.
          </p>
        </div>

        <video
          controls
          className="w-[300px] rounded-lg shadow-lg"
        >
          <source src="/videos/pasapalabra.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </main>
    </>
  );
};

export default Pasapalabra;
