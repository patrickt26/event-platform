import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

import CodeMockupImg from "../assets/code-mockup.png";
import ReactIconBgImg from "../assets/react-icon-bg.svg";
import { Footer } from "../components/Footer";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    });

    navigate('/event');
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <img src={ReactIconBgImg} className="mt-2" alt="" />

      <div className="absolute w-full max-w-[1200px] flex flex-col items-center mt-20 mx-auto sm:flex-row sm:justify-between">
        <div className="max-w-[624px] flex flex-col items-center sm:block">
          <Logo />

          <h1 className="mt-8 text-[1.875rem] leading-tight text-center sm:text-left sm:text-[2.5rem]">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 mx-8 text-sm text-gray-200 text-center sm:leading-relaxed sm:text-base sm:mx-0 sm:text-left">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="mt-8 p-8 bg-gray-700 border border-gray-500 rounded w-full sm:mt-0 sm:max-w-sm">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={event => setName(event.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={CodeMockupImg} className="mt-[21rem] sm:-mt-48" alt="" />

      <Footer />
    </div>
  );
}