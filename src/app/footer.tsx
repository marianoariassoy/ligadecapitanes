const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col px-4 py-6">
      <div className="text-center flex flex-col text-sm">
        <span className="font-bold">Liga de Capitanes {year}</span>

        <div className="flex items-center flex-wrap justify-center gap-x-1 pb-2">
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
