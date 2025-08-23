import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Left Section */}
        <div>
          <div className="font-bold text-xl mb-4 text-primary">LOGO</div>
          <p className="text-sm text-background/80">
            Ten11 Hospitality is committed to excellence in real estate and
            hospitality ventures.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="font-semibold mb-3 text-secondary">Quick Links</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary cursor-pointer">About</li>
            <li className="hover:text-primary cursor-pointer">Projects</li>
            <li className="hover:text-primary cursor-pointer">Careers</li>
            <li className="hover:text-primary cursor-pointer">Press</li>
            <li className="hover:text-primary cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold mb-3 text-secondary">Connect</h3>
          <div className="flex gap-4 mb-4">
            {/* Social Icons with circular bg */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary transition cursor-pointer">
              <Icon icon="mdi:globe" className="text-background text-xl" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary transition cursor-pointer">
              <Icon icon="mdi:twitter" className="text-background text-xl" />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-primary transition cursor-pointer">
              <Icon icon="mdi:facebook" className="text-background text-xl" />
            </div>
          </div>

          <p className="text-sm text-background/80">
            123 Corporate Street, City, Country
          </p>
          <p className="text-xs mt-4 text-muted cursor-pointer hover:text-primary">
            Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
