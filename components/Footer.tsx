const secoes_rodape = {
  produto: ["Recursos", "Preços", "Segurança", "Roadmap"],
  empresa: ["Sobre", "Blog", "Carreiras", "Contato"],
  legal: ["Privacidade", "Termos", "Cookies", "Compliance"],
} as const;

const links_sociais = ["Twitter", "LinkedIn", "GitHub", "Discord"] as const;

export default function rodape(): JSX.Element {
  return (
    <footer className="w-full bg-black dark:bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                fx
              </div>
              <span className="text-lg font-bold">faexhub</span>
            </div>
            <p className="text-gray-400 text-sm">
              Conecte-se, compartilhe e aprenda com a comunidade.
            </p>
          </div>

          {Object.entries(secoes_rodape).map(([key, items]) => (
            <div key={key}>
              <h4 className="font-bold mb-4 capitalize">
                {key === "legal" ? "Legal" : key === "produto" ? "Produto" : "Empresa"}
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>&copy; 2026 faexHUB. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {links_sociais.map((link) => (
              <a key={link} href="#" className="hover:text-white transition">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
