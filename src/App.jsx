const nav = [
  ['Domov', '#domov'],
  ['O nás', '#o-nas'],
  ['Činnosti MP', '#cinnosti'],
  ['Podujatia', '#podujatia'],
  ['Novinky', '#novinky'],
  ['Galéria', '#galeria'],
  ['Pridaj sa k nám', '#pridaj-sa'],
  ['Kontakt', '#kontakt'],
]

const cinnosti = [
  {
    title: 'Organizácia podujatí',
    text: 'Pripravujeme kultúrne, spoločenské a športové podujatia pre mladých ľudí v meste Snina.',
  },
  {
    title: 'Dobrovoľníctvo',
    text: 'Podporujeme dobrovoľnícke aktivity, pomoc komunite, seniorom a mestu.',
  },
  {
    title: 'Participácia',
    text: 'Dávame mladým priestor vyjadriť svoje názory a zapojiť sa do života mesta.',
  },
]

const events = [
  ['Ples mladých', 'Každoročne · Snina'],
  ['Vianočný benefičný koncert', 'Každoročne · Snina'],
  ['Piknik kino', 'Sezónne podujatie · Snina'],
  ['Gaming Day', 'Tematické podujatie · Snina'],
  ['Color Run', 'Komunitné podujatie · Snina'],
]

const news = [
  {
    title: 'Mladí ľudia tvoria mesto',
    text: 'Mládežnícky parlament Snina vytvára priestor pre nové nápady, energiu a zapájanie mladých do života mesta.',
  },
  {
    title: 'Podujatia, ktoré spájajú komunitu',
    text: 'Od plesu mladých až po gaming day či benefičné aktivity – vytvárame spoločné zážitky a priestor pre komunitu.',
  },
  {
    title: 'Dobrovoľníctvo a participácia',
    text: 'Podporujeme pomoc komunite a zároveň dávame mladým hlas pri témach, ktoré sa ich priamo týkajú.',
  },
]

const gallery = [
  '/galeria1.jpg',
  '/galeria2.jpg',
  '/galeria3.jpg',
  '/galeria4.jpg',
  '/galeria5.jpg',
  '/galeria6.jpg',
  '/galeria7.jpg',
  '/galeria8.jpg',
]

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  )
}

export default function App() {
  return (
    <div>
      <header id="domov" className="hero">
        <div className="hero-overlay" />
        <nav className="nav container">
          <div className="brand">
            <img src="/mp-snina-logo.png" alt="Mládežnícky parlament Snina" />
            <div>
              <strong>Mládežnícky parlament</strong>
              <span>Snina</span>
            </div>
          </div>
          <div className="nav-links">
            {nav.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </div>
        </nav>

        <div className="container hero-content">
          <div className="hero-copy">
            <div className="pill">#mladáSnina · hlas mladých v meste</div>
            <h1>Mladí ľudia. Nápady. Energia, ktorá mení Sninu.</h1>
            <p>
              Mládežnícky parlament Snina vytvára priestor pre mladých ľudí,
              organizuje projekty a podujatia, prepája komunitu a prináša nové impulzy do života mesta.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#pridaj-sa">Pridaj sa k nám</a>
              <a className="btn btn-secondary" href="#o-nas">Zisti viac</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="info-card">
              <div className="label">Naša misia</div>
              <p>Vytvárať priestor, kde mladí ľudia nie sú bokom, ale sú súčasťou diania v meste.</p>
            </div>
            <div className="stats-grid">
              <div className="stat dark">
                <strong>13–20</strong>
                <span>cieľová skupina mladých ľudí</span>
              </div>
              <div className="stat yellow">
                <strong>Komunita</strong>
                <span>podujatia, participácia a dobrovoľníctvo</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="section container cards-three">
          <div className="mini-card"><h3>Projekty</h3><p>Organizujeme aktivity, ktoré dávajú mladým priestor zažiť, tvoriť a meniť svoje mesto.</p></div>
          <div className="mini-card"><h3>Komunita</h3><p>Prepájame školy, mladých ľudí, dobrovoľníkov a partnerov do jednej aktívnej siete.</p></div>
          <div className="mini-card"><h3>Príležitosť</h3><p>Dávame mladým možnosť zapojiť sa, získať skúsenosti a byť hlasom svojej generácie.</p></div>
        </section>

        <section id="o-nas" className="section container two-col">
          <div className="blue-panel">
            <div className="panel-grid">
              <div><span>Kto sme</span><p>Platforma mladých ľudí zo základných a stredných škôl.</p></div>
              <div><span>Čo robíme</span><p>Organizujeme projekty, eventy a dobrovoľnícke aktivity.</p></div>
              <div><span>Pre koho</span><p>Pre mladých ľudí, ktorí chcú byť súčasťou diania v meste.</p></div>
              <div><span>Prečo</span><p>Aby mladí v Snine mali hlas, priestor a reálnu možnosť ovplyvňovať veci.</p></div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="O nás"
              title="Mládežnícky parlament Snina je priestor pre mladých, ktorí chcú tvoriť veci okolo seba."
              text="Spájame aktivitu, nápady a komunitu. Prinášame potreby mladých a vytvárame podujatia, projekty a iniciatívy, ktoré zlepšujú život v meste."
            />
            <div className="value-grid">
              <article><h3>Zastupovanie mladých</h3><p>Prinášame názory a potreby mládeže bližšie k mestu.</p></article>
              <article><h3>Aktivita</h3><p>Podporujeme mladých, aby neboli iba divákmi, ale tvorcami.</p></article>
              <article><h3>Spolupráca</h3><p>Prepájame školy, organizácie a partnerov v prospech mládeže.</p></article>
              <article><h3>Komunita</h3><p>Budujeme prostredie, kde sa mladí cítia vítaní a vypočutí.</p></article>
            </div>
          </div>
        </section>

        <section id="cinnosti" className="section container">
          <SectionHeading
            eyebrow="Činnosti MP"
            title="Čomu sa venuje Mládežnícky parlament Snina"
            text="Našou úlohou je vytvárať aktivity pre mladých, zapájať ich do života mesta a podporovať dobrovoľníctvo a participáciu."
          />
          <div className="feature-grid">
            {cinnosti.map((item, index) => (
              <article className="feature-card" key={item.title}>
                <div className={`feature-banner banner-${index + 1}`}></div>
                <div className="feature-body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="podujatia" className="section alt-section">
          <div className="container">
            <SectionHeading
              eyebrow="Podujatia"
              title="Najbližšie akcie a spoločné zážitky"
              text="Táto sekcia môže neskôr fungovať aj ako reálny kalendár akcií s detailom podujatia a registráciou."
            />
            <div className="event-list">
              {events.map(([title, meta]) => (
                <div className="event-row" key={title}>
                  <div className="event-tag">Podujatie</div>
                  <div className="event-main">
                    <h3>{title}</h3>
                    <p>{meta}</p>
                  </div>
                  <a href="#kontakt">Detail</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="novinky" className="section container">
          <SectionHeading
            eyebrow="Novinky"
            title="Aktuálne informácie z Mládežníckeho parlamentu"
            text="Tu budú zverejňované novinky o podujatiach, aktivitách a dianí v Mládežníckom parlamente Snina."
          />
          <div className="news-grid">
            {news.map((item) => (
              <article className="news-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href="#kontakt">Čítať viac →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="galeria" className="section alt-section">
          <div className="container">
            <SectionHeading
              eyebrow="Galéria"
              title="Momenty, ktoré tvoria atmosféru MP Snina"
              text="Reálne fotografie z aktivít, stretnutí a podujatí Mládežníckeho parlamentu Snina."
            />
            <div className="gallery-grid">
              {gallery.map((src, index) => (
                <figure className="gallery-card" key={src}>
                  <img src={src} alt={`Fotografia z aktivity MP Snina ${index + 1}`} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="pridaj-sa" className="section container">
          <div className="cta-box">
            <div>
              <div className="eyebrow yellow-text">Pridaj sa k nám</div>
              <h2>Chceš byť súčasťou zmien, projektov a akcií pre mladých v Snine?</h2>
              <p>
                Hľadáme mladých ľudí, ktorí majú nápady, energiu a chuť niečo robiť. Ak chceš pomáhať organizovať
                podujatia a prinášať nové projekty, si na správnom mieste.
              </p>
            </div>
            <form className="join-form" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Meno a priezvisko" />
              <input placeholder="Škola" />
              <input placeholder="Vek" />
              <textarea placeholder="Prečo sa chceš pridať?" rows="5" />
              <button type="submit">Odoslať záujem</button>
            </form>
          </div>
        </section>
      </main>

      <footer id="kontakt" className="footer">
        <div className="container footer-grid">
          <div>
            <div className="eyebrow yellow-text">Kontakt</div>
            <h2>Spoj sa s nami</h2>
            <p>Napíš nám, sleduj naše sociálne siete alebo sa zastav osobne.</p>
            <ul className="contact-list">
              <li><strong>Organizácia:</strong> Mládežnícky parlament Snina</li>
              <li><strong>E-mail:</strong> <a href="mailto:mparlament.snina@gmail.com">mparlament.snina@gmail.com</a></li>
              <li><strong>Instagram:</strong> <a href="https://www.instagram.com/mp_snina/" target="_blank" rel="noreferrer">@mp_snina</a></li>
              <li><strong>Facebook:</strong> <a href="https://www.facebook.com/p/Ml%C3%A1de%C5%BEn%C3%ADcky-parlament-Snina-100092895751320/?locale=sk_SK" target="_blank" rel="noreferrer">Mládežnícky parlament Snina</a></li>
              <li><strong>Adresa:</strong> Strojárska 2060/95, 069 01 Snina</li>
              <li><strong>Hashtag:</strong> #mladáSnina</li>
            </ul>
          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Meno" />
            <input placeholder="Tvoj e-mail" />
            <textarea placeholder="Tvoja správa" rows="6" />
            <button type="submit">Odoslať správu</button>
          </form>
        </div>
      </footer>
    </div>
  )
}
