import { Facebook, Instagram, MessageCircle, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/50 backdrop-blur-lg">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center text-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <a
              href="mailto:contact@mroppy.com"
              className="text-gray-400 hover:text-purple-500 transition-colors block"
            >
              contact@mroppy.com
            </a>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Social Media</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://discord.com"
                className="text-gray-400 hover:text-purple-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Discord</span>
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Hire Me</h3>
            <a
              href="https://freelancer.com/u/mroppy"
              className="text-gray-400 hover:text-purple-500 transition-colors inline-flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Briefcase className="h-5 w-5" />
              <span>Freelancer Profile</span>
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-center text-sm text-gray-400">
            Designed by MR. OPPY &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}