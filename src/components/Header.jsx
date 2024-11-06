function Header() {
  return (
    <header className="px-4 py-2 shadow-md sticky top-0 bg-slate-50">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center gap-x-2">
        <div>
          <img
            className="w-10 h-10"
            src={"/icon.svg"}
            alt="logo"
          />
        </div>
        <h1 className="text-4xl font-bold">
          CV Builder
        </h1>
      </div>
    </header>
  );
}

export default Header;