export function Video() {
  return (
    <div className="flex justify-center px-10 lg:p-24 mb-10">
      <div
        role="status"
        className="flex items-center justify-center w-full lg:w-1/2 rounded-lg h-96 z-20"
      >
        <iframe
          // width="420"
          // height="315"
          src="https://www.youtube.com/embed/do8WEABeh2k?autoplay=0&mute=1"
          className="w-full h-full rounded-xl z-20"
        ></iframe>
      </div>
    </div>
  );
}
