import React from "react";

/**
 * Footer - default exported function component
 * Tailwind CSS is used for styling.
 */
const Footer = ()  =>{
  const TwitterIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 5.8c-.6.3-1.2.5-1.9.6.7-.5 1.2-1.3 1.4-2.3-.7.4-1.5.7-2.4.9C18.7 4 17.6 3.5 16.4 3.5c-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9-3.3-.2-6.3-1.7-8.3-4.1-.4.7-.6 1.6-.6 2.5 0 1.6.8 3 2 3.8-.6 0-1.2-.2-1.7-.5v.1c0 2.4 1.7 4.4 3.9 4.9-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3-1.7 1.3-3.8 2.1-6.1 2.1H4c2.2 1.4 4.8 2.2 7.6 2.2 9.1 0 14.1-7.5 14.1-14.1v-.6c1-.7 1.8-1.6 2.4-2.6-.9.4-1.9.7-3 .8z"/>
    </svg>
  );

  const LinkedinIcon = ({ className = "w-4 h-4" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1c1.38 0 2.48 1.12 2.48 2.5zM0 8h5v14H0zM8 8h4.8v1.9h.1c.7-1.3 2.4-2.6 4.9-2.6C22.7 7.3 24 9.2 24 13.2V22h-5v-7.1c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.7 1.8-2.7 3.7V22H8z"/>
    </svg>
  );

  return (
    <footer className="bg-[#05283a] text-[#9fc1d2]">
      <div className="max-w-[1100px] mx-auto px-6 py-10">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-white text-lg font-semibold">EduPlatform</h3>
            <p className="text-sm leading-relaxed max-w-[320px]">
              Empowering learners worldwide with quality education and innovative learning experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#cfeaf6] font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a className="text-sm hover:text-white" href="/">Home</a></li>
              <li><a className="text-sm hover:text-white" href="/features">Features</a></li>
              <li><a className="text-sm hover:text-white" href="/about">About</a></li>
              <li><a className="text-sm hover:text-white" href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#cfeaf6] font-semibold mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a className="text-sm hover:text-white" href="/privacy">Privacy Policy</a></li>
              <li><a className="text-sm hover:text-white" href="/terms">Terms of Service</a></li>
              <li><a className="text-sm hover:text-white" href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[#cfeaf6] font-semibold mb-3">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                aria-label="Twitter"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/3 text-[#9fc1d2] hover:bg-white/6 transition"
              >
                <TwitterIcon />
              </a>

              <a
                aria-label="Twitter 2"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/3 text-[#9fc1d2] hover:bg-white/6 transition"
              >
                <TwitterIcon />
              </a>

              <a
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-md bg-white/3 text-[#9fc1d2] hover:bg-white/6 transition"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Rule */}
        <div className="mt-6">
          <div className="h-px bg-white/6" />
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center text-sm text-[#9fc1d2]">
          © 2025 EduPlatform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;