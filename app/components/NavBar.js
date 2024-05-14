export default function NavBar() {
  return (
    <header>
      <nav className="w-full absolute top-0">
        <div className="bg-white flex">
          <div>logo de la empresa</div>
          <div className="flex">
            <div className="mx-2">inicio</div>
            <div className="mx-2">login</div>
            <div className="mx-2">contactenos</div>
          </div>
        </div>
      </nav>
    </header>
  );
}
