export default {
  title: 'Components/Navigation/Anchor',
  argTypes: {
    text: {
      description: 'Text to be injected in the component slot.',
      control: { type: 'text' },
    },
    href: {
      description: 'The url to redirect to.',
      control: { type: 'text' },
    },
    external: {
      description:
        'Whether the href is to a site on a different domain, extenral to this one.',
      control: { type: 'boolean' },
    },
    toNewTab: {
      description:
        'Open the href in a new tab instead of redirecting this one.',
    },
  },
};

const Template = ({ text, href, external }) => `
  <sr-anchor ${href ? `href="${href}"` : ''} ${external ? 'external' : ''}>
    ${text}
  </sr-anchor>
`;

export const Link = Template.bind({});
Link.args = {
  text: 'Revision of versions',
  href: 'https://re-play.supernova-docs.io/spotify-re-play/latest/introduction.html',
  external: false,
  toNewTab: true,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  text: 'Spotify Wikipedia page',
  href: 'https://en.wikipedia.org/wiki/Spotify',
  external: true,
  toNewTab: true,
};
