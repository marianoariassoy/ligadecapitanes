interface HeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  emoji?: string;
}

const Header = ({ title, subtitle, description, emoji }: HeaderProps) => {
  return (
    <header className="flex flex-col text-center">
      {emoji && <div className="text-2xl">{emoji}</div>}
      <h1 className="text-lg text-primary font-bold px-12 leading-6">
        {title}
      </h1>
      <div className="font-medium">{description}</div>
    </header>
  );
};

export default Header;
