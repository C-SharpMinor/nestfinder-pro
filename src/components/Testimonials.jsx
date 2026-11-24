import { testimonials } from '../data/properties';

export default function Testimonials() {
  return (
    <section className="bg-light py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">TESTIMONIALS</p>
          <h2 className="text-3xl sm:text-4xl font-bold">What Our Satisfied Clients Says</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="text-sm text-text-muted mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
