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
      <h1 className="text-xl text-primary font-bold px-4">{title}</h1>
      <div className="font-medium">{description}</div>
    </header>
  );
};

export default Header;
