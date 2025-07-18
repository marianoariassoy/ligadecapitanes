import { WhatsApp } from "@/lib/icons";

const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col px-4 py-6">
      <div className="text-center flex flex-col text-sm">
        <span className="font-bold">Liga de Capitanes 2025</span>

        <div className="flex items-center flex-wrap justify-center gap-x-1 pb-2">
          <a
            href="https://wa.me/5491130171475"
            className="hover:text-primary flex items-center gap-x-1"
          >
            <WhatsApp />
            11 3017 1475
          </a>
          <span>&bull;</span>
          <span>
            <a
              href="mailto:hola@ligadecapitanes.com.ar"
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              hola@ligadecapitanes.com.ar
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
