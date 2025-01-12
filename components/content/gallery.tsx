export const Gallery: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 px-20 md:grid-cols-1 md:px-4">
        <div className="flex flex-col items-center justify-center h-full gap-4">
          <img src="/display/tfc.png" className="w-full rounded-3xl" />
          <img src="/display/pcb.png" className="w-full rounded-3xl" />
        </div>
        <img src="/display/card.png" className="w-full rounded-3xl" />
      </div>
      <div className="px-20 pb-12 md:px-4">
        <img src="/display/swag.jpeg" className="w-full mt-4 rounded-3xl" />
      </div>
    </>
  );
};
