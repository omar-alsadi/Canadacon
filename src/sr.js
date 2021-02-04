import ScrollReveal from 'scrollreveal';

const isSSR = typeof window !== 'undefined';
const sr = isSSR ? ScrollReveal() : null;

export default sr;
