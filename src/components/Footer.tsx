export default function Footer() {
  return (
    <footer className="bg-[#272b33] text-gray-50 dark:text-gray-100">
      <div className="mx-auto w-full container p-4 sm:p-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
              href="https://github.com/tesfayegirma-116"
              className="flex items-center"
            >
              <img
                src="https://i.pravatar.cc/300"
                className="h-20 w-20 rounded-full"
                alt="FlowBite Logo"
              />
              <span className="self-center text-5xl font-semibold whitespace-nowra ml-9">
                Hope Tesfa ™
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase">
                Resources
              </h2>
              <ul className="text-gray-100 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://nextjs.org/" className="hover:underline">
                    Next.js
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-100 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/tesfayegirma-116"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/S4PfNGQt"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-100 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-100 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-md text-gray-200 sm:text-center dark:text-gray-400">
            © {new Date().getFullYear()}{" "}
            <a href="https://github.com/tesfayegirma-116">Hope Tesfa ™</a>. All
            Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
