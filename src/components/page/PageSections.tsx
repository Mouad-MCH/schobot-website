import ActionLink, { isExternal } from "./PageActions";
import styles from "./page.module.css";

export type PageSection = {
  id?: string;
  title: string;
  text?: string;
  items?: string[];
  /** [term, description, optional href] */
  rows?: string[][];
  /** [question, answer] */
  faq?: string[][];
  /** [label, href] */
  link?: string[];
};

/** "Term: description" items get a bold term when the term is short. */
function splitItem(item: string): [string | null, string] {
  const i = item.indexOf(": ");
  if (i > 0 && i <= 42) return [item.slice(0, i), item.slice(i + 2)];
  return [null, item];
}

function Section({ section, index }: { section: PageSection; index: number }) {
  const headingId = `section-${index}-h`;
  const { id, title, text, items, rows, faq, link } = section;
  return (
    <section id={id} className={styles.section} aria-labelledby={headingId}>
      <h2 id={headingId} className={styles.sectionTitle}>
        {title}
      </h2>
      <div className={styles.sectionBody}>
        {text && <p className={styles.text}>{text}</p>}

        {items && (
          <ul className={styles.list}>
            {items.map((item) => {
              const [term, rest] = splitItem(item);
              return (
                <li key={item}>
                  {term && <strong>{term}: </strong>}
                  {rest}
                </li>
              );
            })}
          </ul>
        )}

        {rows && (
          <dl className={styles.rows}>
            {rows.map(([term, value, href]) => (
              <div key={term} className={styles.row}>
                <dt>{term}</dt>
                <dd>
                  {href ? (
                    <a
                      href={href}
                      dir="ltr"
                      className={styles.inlineLink}
                      {...(isExternal(href) && href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {faq && (
          <div className={styles.faq}>
            {faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        )}

        {link && (
          <p className={styles.sectionLink}>
            <ActionLink href={link[1]} variant="secondary">
              {link[0]}
            </ActionLink>
          </p>
        )}
      </div>
    </section>
  );
}

export default function PageSections({
  sections,
  note,
}: {
  sections: PageSection[];
  note?: { label: string; text: string };
}) {
  return (
    <div className={styles.sections}>
      <div className="wrap">
        {sections.map((s, i) => (
          <Section key={s.id ?? s.title} section={s} index={i} />
        ))}
        {note && (
          <p className={styles.note}>
            <strong>{note.label}: </strong>
            {note.text}
          </p>
        )}
      </div>
    </div>
  );
}
