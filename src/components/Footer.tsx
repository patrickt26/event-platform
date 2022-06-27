import LogoRockeatImg from "../assets/logo-rockeat.png";

export function Footer() {
  return (
    <footer className="w-full bg-gray-900">
      <div className="border-t border-t-gray-500 mx-6 py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center flex-col sm:flex-row">
          <img src={LogoRockeatImg} alt="" />
          <span className="text-sm text-gray-300 ml-6 mt-5 mb-6 sm:my-0 sm:text-base">
            Rocketseat - Todos os direitos reservados
          </span>
        </div>

        <p className="text-gray-300 text-sm sm:text-base">
          Políticas de privacidade
        </p>
      </div>
    </footer>
  );
}