import {Link} from 'react-router';
import type {ReactNode} from 'react';

type Cta = {label: string; to: string; variant?: 'primary' | 'ghost'};

export function PageHero({
  eyebrow,
  headline,
  serif,
  trail,
  lede,
  ctas,
  align = 'left',
  children,
}: {
  eyebrow: string;
  /** Words before the italic accent */
  headline: string;
  /** The italic Fraunces accent word(s) */
  serif: string;
  /** Optional trailing words after the serif accent (e.g. punctuation, " — covered.") */
  trail?: string;
  lede?: string;
  ctas?: Cta[];
  align?: 'left' | 'center';
  children?: ReactNode;
}) {
  return (
    <header className={`page-hero${align === 'center' ? ' center' : ''}`}>
      <div className="wrap" data-reveal>
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {headline} <span className="serif">{serif}</span>
          {trail ?? '.'}
        </h1>
        {lede ? <p className="lede">{lede}</p> : null}
        {ctas && ctas.length ? (
          <div className="cta-row">
            {ctas.map((c) => (
              <Link
                key={c.to + c.label}
                className={c.variant === 'ghost' ? 'btn-ghost' : 'btn'}
                to={c.to}
              >
                {c.label}
              </Link>
            ))}
          </div>
        ) : null}
        {children}
      </div>
    </header>
  );
}
