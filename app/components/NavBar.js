export default function NavBar() {
  return (
    <header>
      <nav className="w-full absolute top-0">
        <div className="bg-white flex">
          <div>ATENEA</div>
          <div className="flex">
            <div className="mx-8">Rastrear</div>
            <div className="mx-7">Sucursales</div>
            <div className="mx-7">Nosotros</div>
          </div>
        </div>
      </nav>
    </header>
  );
}
