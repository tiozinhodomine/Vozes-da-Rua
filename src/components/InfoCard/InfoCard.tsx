interface InfoCardProps {
    numero: string;
    titulo: string;
    descricao: string;
  }
  
  export default function InfoCard({
    numero,
    titulo,
    descricao,
  }: InfoCardProps) {
    return (
      <div
        className="
          bg-white
          rounded-2xl
          shadow-md
          p-8
          flex
          flex-col
          items-center
          text-center
          hover:shadow-xl
          hover:-translate-y-2
          transition-all
          duration-300
        "
      >
        {}
        <div
          className="
            w-16
            h-16
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            text-2xl
            font-bold
          "
        >
          {numero}
        </div>
  
        {}
        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {titulo}
        </h3>
  
        {}
        <p className="mt-4 text-slate-600 leading-7">
          {descricao}
        </p>
      </div>
    );
  }