const ImpactSection = () => {
  return (
    <section className="py-16 px-6 bg-green-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Our Impact</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-4xl font-bold text-green-800">30,000+</p>
            <p className="text-sm">Lives Reached</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">80+</p>
            <p className="text-sm">Communities Impacted</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">$25,000+</p>
            <p className="text-sm">Funds Raised</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-800">60,000+</p>
            <p className="text-sm">Global Reach</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;