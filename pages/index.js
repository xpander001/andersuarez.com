import styles from './index.module.css'

function HomePage() {
  return (
    <main className={styles.mainSection}>
      <div className={styles.mainSectionContent}>
        <h1 className={styles.title}>Ander Suárez Martínez</h1>
        <h2 className={styles.subtitle}>
          Product and integrations at{' '}
          <a className={styles.inlineLink} href="https://www.jointriple.com">
            Triple
          </a>
          . I build products and websites.
        </h2>
        <p className={styles.text}>
          Previously, Senior Frontend Developer at{' '}
          <a className={styles.inlineLink} href="https://www.unbound.com">
            Unbound
          </a>
          . I also led frontend development at{' '}
          <a className={styles.inlineLink} href="https://www.jinnapp.com">
            Jinn
          </a>
          . I co-founded{' '}
          <a className={styles.inlineLink} href="http://perpetuall.net/">
            Perpetuall
          </a>
          . I was born in Bilbao, and moved to the UK looking for new
          challenges. Now I work remotely from Bilbao. I like music & arts. I
          play guitar for{' '}
          <a className={styles.inlineLink} href="http://walnut.bandcamp.com">
            Walnut
          </a>
          .
        </p>
        <p className={styles.text}>
          Find me at{' '}
          <a className={styles.inlineLink} href="mailto:me@andersuarez.com">
            me@andersuarez.com
          </a>
        </p>
      </div>
    </main>
  )
}

export default HomePage
