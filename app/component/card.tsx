
const CardTempelate = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
      <div className=" m-4 h-full p-[20px] ">
        <h2 className="text-xs font-bold">{title}</h2>
        {children}
      </div>
  );
};

export default CardTempelate;
