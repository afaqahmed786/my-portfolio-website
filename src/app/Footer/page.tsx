export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left Side: Contact Information */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h4 className="text-lg font-semibold">Contact Me</h4>
              <p className="mt-2">
                <a href="mailto:afaqahmed@example.com" className="hover:underline">afaqahmed@example.com</a>
              </p>
              <p className="mt-1">
                <a href="tel:+1234567890" className="hover:underline">+123 456 7890</a>
              </p>
            </div>
  
            {/* Center: Social Media Links */}
            <div className="flex space-x-6 mb-6 md:mb-0">
              <a href="https://www.linkedin.com/in/afaqahmed" target="_blank" className="hover:text-indigo-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5 11.25h-3v-5.6c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.71h-3v-10h2.88v1.36h.04c.4-.76 1.37-1.56 2.82-1.56 3.02 0 3.57 1.99 3.57 4.58v5.62z" />
                </svg>
              </a>
              <a href="https://twitter.com/AfaqueAhmed786" target="_blank" className="hover:text-indigo-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.943 4.943 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482c-4.09-.205-7.719-2.165-10.148-5.144a4.822 4.822 0 00-.666 2.475 4.917 4.917 0 002.188 4.096 4.897 4.897 0 01-2.229-.616c-.054 2.281 1.582 4.417 3.951 4.89a4.935 4.935 0 01-2.224.084 4.924 4.924 0 004.6 3.42 9.868 9.868 0 01-7.29 2.033 13.947 13.947 0 007.548 2.209c9.051 0 14.002-7.496 14.002-13.986 0-.213-.004-.425-.013-.636a10.012 10.012 0 002.457-2.548z" />
                </svg>
              </a>
              <a href="https://github.com/afaqahmed" target="_blank" className="hover:text-indigo-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.165c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.758-1.333-1.758-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.774.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.47-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.005-.404 1.022.005 2.048.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.768.84 1.234 1.911 1.234 3.221 0 4.61-2.804 5.625-5.476 5.922.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.824.577 4.765-1.587 8.2-6.084 8.2-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
  
            {/* Right Side: Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm">&copy; {new Date().getFullYear()} Afaq Ahmed. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  