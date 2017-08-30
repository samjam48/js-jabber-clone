import {StyleSheet, css} from 'aphrodite'
import {atLeastExtraSmall, atLeastSmall} from '<styles>/media-queries'
import Icon from '<components>/icon'

export default Heading

function Heading() {
  const {styles} = Heading
  // const sponsorLinkClassName = css(styles.sponsorLink)
  return (
    <div className={css(styles.heading)}>
      <Icon
        name="logo"
        className={css(styles.logo)}
        viewBox="0 0 99 100"
      />
      <h1 className={css(styles.title)}>
        Growth Mindset <span className={css(styles.titleAir)}>Podcast</span>
      </h1>
      <p className={css(styles.subtext)}>
        Individuals who believe their talents can be developed have a growth mindset.
      </p>
      <p className={css(styles.subtext)}>
        (through hard work, good strategies, and input from others)
      </p>
      <p className={css(styles.subtext)}>
        They tend to achieve more than those with a more fixed mindset
      </p>
      <p className={css(styles.subtext)}>
        (those who believe their talents are innate gifts).
      </p>
    </div>
  )
}

Heading.styles = StyleSheet.create({
  heading: {
    marginBottom: 45,
    display: 'inline-block',
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '3em',
    letterSpacing: -1,
    [atLeastSmall]: {
      fontSize: '4.45em',
    },
  },
  titleAir: {fontWeight: '300'},
  logo: {
    width: 115,
    height: 115,
    fill: '#F7F7F7',
    transform: 'rotate(-25deg)',
    [atLeastExtraSmall]: {
      position: 'absolute',
      left: -68,
      top: -80,
    },
    [atLeastSmall]: {
      left: -98,
      top: -80,
    },
  },
  subtext: {
    fontSize: '1.5em',
    color: '#634806',
    marginTop: 10,
    lineHeight: '1.35em',
  },
  sponsorLink: {
    color: '#634806',
    textDecoration: 'underline',
    ':hover': {
      color: '#61590F',
    },
  },
})
