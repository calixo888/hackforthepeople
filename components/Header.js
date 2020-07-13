import styles from '../styles/modules/header.module.scss'

export default ({ headerText, description }) => {
  return (
    <header className={styles.header}>
      <img src="/img/banners/about.svg" alt="" />
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
      </div>
    </header>
  )
}
