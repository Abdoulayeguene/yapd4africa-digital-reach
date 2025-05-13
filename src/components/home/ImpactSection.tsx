
const ImpactSection = () => {
  return (
    <section className="py-16 px-6 bg-green-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Notre Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-4xl font-bold text-green-800">30,000+</p>
            <p className="text-sm">Vies Touchées</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">80+</p>
            <p className="text-sm">Communautés Impactées</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">$25,000+</p>
            <p className="text-sm">Fonds Collectés</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">60,000+</p>
            <p className="text-sm">Portée Mondiale</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
