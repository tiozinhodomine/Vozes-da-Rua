interface OrganizationCardProps {
    nome: string;
    cidade: string;
    descricao: string;
    necessidades: string[];
  }
  
  export default function OrganizationCard({
    nome,
    cidade,
    descricao,
    necessidades,
  }: OrganizationCardProps) {
    return (
      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          hover:shadow-xl
          transition-all
          duration-300
          overflow-hidden
        "
      >
        {/* Imagem provisória */}
        <div className="h-48 bg-slate-200 flex items-center justify-center">
          <span className="text-slate-500">
            Imagem da ONG
          </span>
        </div>
  
        <div className="p-6">
  
          <h3 className="text-2xl font-bold text-slate-900">
            {nome}
          </h3>
  
          <p className="text-blue-600 mt-1">
            📍 {cidade}
          </p>
  
          <p className="mt-4 text-slate-600">
            {descricao}
          </p>
  
          <div className="flex flex-wrap gap-2 mt-5">
  
            {necessidades.map((item) => (
  
              <span
                key={item}
                className="
                  bg-blue-100
                  text-blue-700
                  px-3
                  py-1
                  rounded-full
                  text-sm
                "
              >
                {item}
              </span>
  
            ))}
  
          </div>
  
          <button
            className="
              w-full
              mt-6
              bg-blue-600
              text-white
              py-3
              rounded-xl
              hover:bg-blue-700
              transition
            "
          >
            Ver Perfil
          </button>
  
        </div>
  
      </div>
    );
  }