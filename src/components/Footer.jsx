function Footer() {
  return (
    <footer className="max-w-screen-xl px-4 py-5 mx-auto text-gray-500 bg-white md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img
          src="https://www.floatui.com/logo.svg"
          className="w-32 sm:mx-auto"
        />
      </div>

      <div className="items-center justify-between mt-8 sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2023 Float UI All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export { Footer };
