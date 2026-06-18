import type {PdpModule} from '~/lib/etch-pdp';

export function PdpModules({modules}: {modules: PdpModule[]}) {
  return (
    <section className="etch-section ivory">
      <div className="wrap">
        <div className="sec-head" data-reveal>
          <p className="eyebrow">What's inside</p>
          <h2>
            Eight modules. <span className="serif">One</span> protocol.
          </h2>
          <p className="lede">
            Short, load-bearing chapters — read in a single sitting, run across
            eight weeks. Every page is decision-ready.
          </p>
        </div>
        <div className="modules-grid">
          {modules.map((m, i) => (
            <div
              className="module-cell"
              key={m.n}
              data-reveal
              style={{['--reveal-delay' as string]: `${i * 50}ms`}}
            >
              <div className="n">{m.n}</div>
              <h4>{m.title}</h4>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
