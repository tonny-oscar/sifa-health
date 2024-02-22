import { Blog, Service } from "./types"

export const services: Service[] = [
  {
    title: 'Individual Coaching Sessions',
    description: "These sessions are a very intuitive process and consist of a blend of coaching utilizing psychotherapy, somatics and hypnotherapy. We set a very specific intention and goal during our time together. Six session minimum required in order to maximize our time together and achieve the best results. Sessions run between 60-90 minutes depending on what is needed.",
    image: { src: '../../public/images/candles.png', alt: 'decorative image: two orange candles with bokeh lighting'}
  }, 
  {
    title: 'Astrological Psyche Session',
    description: 'A 50 minute coaching session with astrology as the starting point, guide, and map for our entire session. These are booked individually.',
    image: { src: '../../public/images/coffe.png', alt: 'decorative image: soothing cup of coffee laid on a plate with greenery and babies breath flowers' }
  }, 
  {
    title: 'Big 5 Astrological Recording',
    description: 'A 30 minute recording of your BIG FIVE in Astrology and practical tools, tips and strategies to work with the energies of your birth chart from a holistic perspective.',
    image: { src: '../../public/images/book.png', alt: 'decorative image: blue book with pages open, laying on sand next to a glass water bottle filled with lemons' }
  }
]

export const blogs: Blog[] = [
  {
    title: 'Do Nothing.',
    tag: 'Lifestyle',
    tagline: 'the power of doing nothing in times of uncertainty',
    link: 'https://katiesanger.substack.com/p/do-nothing',
    coverImg: '../../public/images/ks-flowers.png'
  },
  {
    title: 'Lots of feelings + gratitude',
    tag: 'Gratitude', 
    tagline: 'let\'s start the week off right. sharing some insights i\'ve gained this past year.',
    link: 'https://katiesanger.substack.com/p/lots-of-feelings-gratitude',
    coverImg: '../../public/images/bodhi.png'
  },
  {
    title: 'We\'re Human',
    tag: 'Motivation',
    tagline: 'and full of magic + potential',
    link: 'https://katiesanger.substack.com/p/were-human',
    coverImg: '../../public/images/ks-laughing.png'
  }, 
  {
    title: 'Breaking Open',
    tag: 'Growth',
    tagline: 'the start of something new',
    link: 'https://katiesanger.substack.com/p/breaking-open',
    coverImg: '../../public/images/light.png'
  },
]