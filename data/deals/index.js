import {sortBy} from 'lodash'
import {isFuture} from '<utils>/utils'

const deals = [
  {
    imgSrc: '/data/deals/dotjs.png',
    organization: 'dotJS',
    tagline: 'The largest JavaScript conference in Europe',
    link: 'http://jsair.io/dotjs-discount',
    deal: 'Use code **JSAIR** for 20% off your ticket',
    expires: '2016-12-05',
    description: `
      [dotJS](http://dotjs.io) is the largest JavaScript conference in Europe.
      Its 5th edition will happen on December 5th in Paris at the Théâtre Mogador.
      A lot of amazing speakers will be announced soon. Meanwhile you can check the
      dotJS 2015 talks [here](http://www.thedotpost.com/conference/dotjs-2015).
    `,
  },
  {
    imgSrc: '/data/deals/digitalocean.png',
    organization: 'Digital Ocean',
    tagline: 'Simple Cloud Infrastructure for Developers',
    link: 'http://jsair.io/digitalocean',
    deal: '**JSAIR10** - good for $10 credit on a new DigitalOcean account.',
    expires: '',
    description: `
      DigitalOcean is the best place to get your application off the ground quickly,
      and the easiest to scale when you find success.
      Start with the pre-configured NodeJS one-click to get up and running in 55 seconds,
      or build the exact infrastructure you need, with root access to servers running 100%
      SSD's in state-of-the-art datacenters around the world.
    `,
  },
  {
    imgSrc: '/data/deals/dinosaurjs.png',
    organization: 'Dinosaur.js',
    tagline: 'JavaScript Conference in Denver, Colorado on June 24, 2016',
    link: 'http://jsair.io/dinosaurjs',
    deal: 'Get a 10% discount with the code **jsonair** (click the link to have it automatically applied)',
    expires: '2016-04-30',
    description: `
      A non-profit, community-driven JavaScript conference happening in Denver, Colorado on Friday, June 24, 2016.
      One day. One track.
    `,
  },
  {
    imgSrc: '/data/deals/turing.png',
    organization: 'Turing School of Software and Design',
    tagline: 'Seven month developer training program in Denver, Colorado',
    link: 'http://jsair.io/turing',
    deal: 'Refer a student with the code **FEE2016**. You get $500 cash & the student gets $500 off their tuition.',
    expires: '2016-12-31',
    description: `
      We turn great people into outstanding developers. Turing believes in community-driven education. Our community is
      built on three core values which guide our work: love, respect, and curiosity.
      We believe in community-driven education. We're not a co-working space, and we're not a handful of folks in a
      conference room. Turing is a growing, thriving community of over a hundred people helping each other become more
      than what they thought to be possible.
    `,
  },
  {
    imgSrc: '/data/deals/full-stack-fest.png',
    organization: 'Full Stack Fest',
    tagline: 'Problems of today, ideas from the future',
    link: 'http://jsair.io/full-stack-fest',
    deal: 'Get a 5% discount with the code is **JSAIR** (click the link to have it automatically applied)',
    expires: '2016-09-09',
    description: `
      A week-long full stack development conference with a focus on solving current problems with new & inspiring
      perspectives. Barcelona 5-9 September.
    `,
  },
  {
    imgSrc: '/data/deals/nodeconflondon.png',
    organization: 'Node Conf London',
    tagline: 'Conference all about Node in London',
    link: 'http://jsair.io/nodeconflondon-25',
    deal: `
      Get a 50% discount (while they last) with the code [**jsair-50**](http://jsair.io/nodeconflondon-50)
      or a 25% discount with the code [**jsair-25**](http://jsair.io/nodeconflondon-25).
    `,
    expires: '2016-05-11',
    description: `
      NodeConf London is a one-day, single-track conference with a laser focus on what people need to know about
      Node.js.

      It brings together the sharpest minds from the enterprise with the industry’s leading software development
      heavyweights and the finest talent that London has to offer.
    `,
  },
  {
    imgSrc: '/data/deals/sentry.png',
    organization: 'Sentry',
    tagline: 'Cross-platform crash-reporting',
    link: 'http://jsair.io/sentry-deal',
    deal: `
      Use the code **javascriptair** for $50 credit on a new Sentry account.
    `,
    expires: '',
    description: `
      Users experience way more errors than they report. When they do report errors, they tell you about the
      experience, not the cause. Sentry’s error tracking shows you every crash in your stack as it happens, with the
      details needed to reproduce and fix each issue, information your support team can use to reach out to and help
      affected users, and tools that let users send you feedback for peace of mind.
    `,
  },
  {
    imgSrc: '/data/deals/ReactRally.png',
    organization: 'React Rally',
    tagline: 'A community React conference',
    link: 'http://jsair.io/react-rally-deal',
    deal: `
      Use the code **JSAIR** for 15% of React Rally tickets.
    `,
    expires: '2016-08-26',
    description: `
      React Rally is a community React conference in Salk Lake City, UT on August 25th-26th featuring interesting
      people doing exciting things with React. Learn how to build better applications faster, expand your mind, and meet
      the great people in the React community.
    `,
  },
]

const sortedDeals = sortBy(deals, d => d.organization.toLowerCase())
const filteredDeals = sortedDeals.filter(d => (d.expires ? isFuture(d.expires) : true))

export default filteredDeals
