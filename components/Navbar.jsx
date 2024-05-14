import LanguageSwitcher from "./LanguageSwitcher";

export const Navbar = () => {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <Logo /> */}
        <p className="text-3xl font-bold text-center text-gray-800 py-4 border-b-4 border-purple-600">
          SnapSpot
        </p>

        <LanguageSwitcher />
      </div>
    </nav>
  );
};
