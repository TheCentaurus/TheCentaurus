export function Video() {
  return (
    <div className="flex justify-center px-10 mb-10 lg:p-24">
      <div
        role="status"
        className="z-20 flex items-center justify-center w-full rounded-lg lg:w-1/2 h-96"
      >
        <iframe
          src="https://www.youtube.com/embed/do8WEABeh2k?autoplay=0&mute=1"
          className="z-20 w-full h-full rounded-xl"
        ></iframe>
      </div>
    </div>
  );
}
