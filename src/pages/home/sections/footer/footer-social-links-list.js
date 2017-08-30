import Icon from '<components>/icon'
import {StyleSheet, css} from 'aphrodite'
import sharedStyles from './shared-styles'

export default SocialIconGroup

function SocialIconGroup() {
  const {styles} = SocialIconGroup
  const itemList = [
    {href: 'https://twitter.com/JavaScriptAir', name: 'twitter', text: 'Twitter'},
    {href: 'https://plus.google.com/105493143005968326308', name: 'googlePlus', text: 'Google+'},
    {href: 'mailto:javascriptair+website@gmail.com', name: 'contactus', text: 'Contact us'},
    {href: 'https://jsair.io/calendar', name: 'calendar', text: 'Show Calendar'},
    {href: 'https://facebook.com/JavaScriptAir', name: 'facebook', text: 'Facebook'},
    {href: 'https://github.com/javascriptair/site', name: 'github', text: 'GitHub'},
  ]
  return (
    <ul className={css(sharedStyles.list, styles.socialList)}>
      {itemList.map((item, index) => (
        <li className={css(sharedStyles.item)} key={index}>
          <a className={css(sharedStyles.link)} href={item.href}>
            <Icon className={css(styles.icon)} name={item.name} />
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  )
}

SocialIconGroup.styles = StyleSheet.create({
  icon: {
    fill: 'white',
    width: 23,
    height: 23,
    marginRight: 5,
  },
  socialList: {
    '@media only screen and (min-width : 900px)': {
      height: '8em',
    },
  },
})
