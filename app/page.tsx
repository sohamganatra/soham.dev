import styles from './page.module.css';

// Types for better type safety
interface ListItemProps {
  icon: string;
  text: string;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

// Reusable components
const ListItem: React.FC<ListItemProps> = ({ icon, text }) => (
  <li className={styles.listItem}>
    <span className={styles.icon}>{icon}</span>
    <span>{text}</span>
  </li>
);

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>{title}</h2>
    {children}
  </section>
);

const StyledLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className={styles.link}>
    {children}
  </a>
);

// Data for better maintainability
const aboutMeItems: ListItemProps[] = [
  { icon: '🎓', text: 'IIT Bombay CS (2013-2017)' },
  { icon: '🚀', text: 'Founder @ Composio' },
  { icon: '📍', text: 'San Francisco' },
  { icon: '🤖', text: 'Into: BCI, robotics, space tech' },
  { icon: '📺', text: 'Anime enthusiast (Lelouch vi Britannia 🤘)' },
  { icon: '☕', text: 'Always down for coffee' }
];

const beliefsItems: ListItemProps[] = [
  { icon: '👽', text: 'Aliens exist (future UFO research funder)' },
  { icon: '🧬', text: 'Most <30yo will not die (Select spouse carefully) - it might really be forever ' },
  { icon: '🤖', text: 'Human-AI merger in 50 years' },
  { icon: '⏰', text: 'I will build a TARDIS by 2040' }
];

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.mainTitle}>
          Soham Ganatra
        </h1>
        
        <p className={styles.subtitle}>
          Building{' '}
          <StyledLink href="https://composio.dev">
            Composio.dev
          </StyledLink>
          {' '}- Missing link to AGI
        </p>
      </header>

      <Section title="Some things about me:">
        <ul className={styles.list}>
          {aboutMeItems.map((item, index) => (
            <ListItem key={index} icon={item.icon} text={item.text} />
          ))}
        </ul>
      </Section>

      <Section title="Some things I believe:">
        <ul className={styles.list}>
          {beliefsItems.map((item, index) => (
            <ListItem key={index} icon={item.icon} text={item.text} />
          ))}
        </ul>
      </Section>

      <footer className={styles.footer}>
        <p className={styles.footerTitle}>
          Currently seeking interesting humans to build future with
        </p>
        
        <p className={styles.footerText}>
          <StyledLink href="mailto:sohamganatra1@gmail.com">
            sohamganatra1@gmail.com
          </StyledLink>
        </p>
      </footer>
    </div>
  );
}
