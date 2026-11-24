export default function Stats() {
  const stats = [
    { number: '100+', label: 'properties' },
    { number: '200k+', label: 'Number of clients' },
    { number: '3000+', label: 'Team Members' },
    { number: '70+', label: 'Locations' },
    { number: '14+', label: 'Years of Exp' },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <p
                className="text-3xl sm:text-4xl md:text-5xl font-bold"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400,
                  color: '#717171',
                }}
              >
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm mt-1 text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}