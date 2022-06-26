import LogoRockeatImg from "../assets/logo-rockeat.png";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900">
      <div className="border-t border-t-gray-500 mx-6 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src={LogoRockeatImg} alt="" />
          <span className="text-gray-300 ml-6">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>

        <p className="text-gray-300">
          Políticas de privacidade
        </p>
      </div>
    </footer>
  );
}