import logo from "../assets/logo-text.png";

const linkGroups = [
  { title: "Product", links: ["Home", "Technologies", "Projects"] },
  { title: "Company", links: ["About", "Contact", "Careers"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service"] },
];

const socials = ["GitHub", "Twitter", "LinkedIn"];

function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* brand block */}
        <div>
          <img src={logo} alt="Dev Stack logo" className="h-8 w-auto" />
          <p className="mt-4 text-sm text-gray-500 max-w-xs">Curated tools, technologies, and resources for developers building modern software.</p>
          <div className="mt-4 flex gap-4 text-sm font-medium">
            {socials.map((name) => (
              <a key={name} href="#" className="hover:text-pink-600">{name}</a>
            ))}
          </div>
        </div>

        {/* three link groups */}
        {linkGroups.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-bold uppercase tracking-wide">{group.title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-500">
              {group.links.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-pink-600">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom bar */}
      <div className="max-w-6xl mx-auto px-4 py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between gap-2 text-sm text-gray-400">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-pink-600">Privacy</a>
          <a href="#" className="hover:text-pink-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;