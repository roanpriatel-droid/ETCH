import {useState} from 'react';

export type AccordionItem = {q: string; a: string};

export function Accordion({
  items,
  idPrefix = 'acc',
}: {
  items: AccordionItem[];
  /** Used to namespace IDs when the same question text might repeat across groups */
  idPrefix?: string;
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="accordion">
      {items.map((it, i) => {
        const isOpen = openIdx === i;
        const panelId = `${idPrefix}-panel-${i}`;
        const btnId = `${idPrefix}-trigger-${i}`;
        return (
          <div
            className={`acc-item${isOpen ? ' is-open' : ''}`}
            key={it.q}
          >
            <button
              type="button"
              id={btnId}
              className="acc-trigger reset"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIdx(isOpen ? null : i)}
            >
              <span className="acc-q">{it.q}</span>
              <span className="acc-toggle" aria-hidden="true">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            {isOpen ? (
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className="acc-panel"
              >
                <p className="acc-a">{it.a}</p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
