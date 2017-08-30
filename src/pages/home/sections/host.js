import Person from '<components>/person'
import {StyleSheet, css} from 'aphrodite'
import sharedStyles from './shared-styles'

export default Host

function Host() {
  const {styles} = Host
  const personClassNames = {
    twitter: css(sharedStyles.personTwitter),
    name: css(sharedStyles.personName),
  }
  return (
    <section id="host">
      <span className={css(styles.hostPerson)}>
        <Person
          className={css(styles.host, sharedStyles.panelist)}
          name="Kent C. Dodds"
          twitter="kentcdodds"
          imgSrc="resources/kentcdodds.png"
          link="https://twitter.com/kentcdodds"
          personClassNames={personClassNames}
          customStyles={{name: {color: '#f8f8f8'}, twitter: {color: '#f8f8f8'}}}
        />
      </span>
      <p className={css(sharedStyles.caption)}>
        <a
          className={css(sharedStyles.link)}
          href="https://egghead.io/instructors/kentcdodds"
          title="Egghead.io instructor page"
        >
          Egghead.io instructor
        </a>
        {' - '}
        <a
          className={css(sharedStyles.link)}
          href="https://developers.google.com/experts/people/kent-c-dodds"
          title="Google Developer Expert Page"
        >
          Google Developer Expert
        </a>
      </p>
    </section>
  )
}

Host.styles = StyleSheet.create({
  hostPerson: {
    '@media only screen and (min-width: 730px)': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  },
  host: {
    padding: '0 15px',
    '@media only screen and (min-width: 730px)': {
      width: 303,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
})
