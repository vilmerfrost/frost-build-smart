const integrations = [
  { name: 'BankID', logo: '/logos/bankid.svg', height: 'h-12' },
  { name: 'Fortnox', logo: '/logos/fortnox.svg', height: 'h-5' },
  { name: 'Visma', logo: '/logos/visma.png', height: 'h-9' },
  { name: 'Skatteverket', logo: '/logos/skatteverket.png', height: 'h-7' },
  { name: 'Peppol', logo: '/logos/peppol.png', height: 'h-7' },
  { name: 'Freja eID', logo: '/logos/freja.png', height: 'h-6', needsInvert: true },
  { name: 'Stripe', logo: '/logos/stripe.png', height: 'h-7', needsInvert: false },
];

export function IntegrationTicker() {
  const set = integrations.map((item, i) => (
    <div
      key={`${item.name}-${i}`}
      className="flex items-center px-10 shrink-0"
    >
      <img
        src={item.logo}
        alt={item.name}
        className={[
          item.height,
          'w-auto object-contain select-none transition-all duration-300',
          item.needsInvert ? 'invert opacity-40 grayscale hover:opacity-70' : 'opacity-40 grayscale hover:grayscale-0 hover:opacity-90',
        ].join(' ')}
        draggable={false}
      />
    </div>
  ));

  return (
    <section className="py-14 bg-[#fbf9f6] overflow-hidden" aria-label="Integrationer">
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#594138]/50 mb-10">
        Integreras med
      </p>

      <div className="relative group">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#fbf9f6] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#fbf9f6] to-transparent pointer-events-none" />

        <div className="flex animate-ticker group-hover:[animation-play-state:paused] items-center w-max">
          {set}
          {set}
        </div>
      </div>
    </section>
  );
}
