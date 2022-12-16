export default {
  title: 'Components/Navigation/Anchor',
  argTypes: {
    variant: {
      description: 'Anchor variants',
      control: { type: 'select' },
      options: ['normal', 'underline'],
    },
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
        'Whether the href is to a site on a different domain, external to this one.',
      control: { type: 'boolean' },
    },
    openInNewTab: {
      description:
        'Open the href in a new tab instead of redirecting this one.',
    },
  },
};

const InlineTemplate = ({ variant, text, href, external }) => `
  <sr-paragraph> Lorem ipsum dolor sit <sr-anchor variant="${
    variant ? variant : 'normal'
  }" ${href ? `href="${href}"` : ''} ${
  external ? 'external' : ''
}>${text}</sr-anchor>.
  </sr-paragraph>
`;

const Template = ({ variant, text, href, external }) => `
  <sr-anchor variant="${variant ? variant : 'normal'}" ${
  href ? `href="${href}"` : ''
} ${external ? 'external' : ''}>
    ${text}
  </sr-anchor>
`;

export const NormalAnchor = Template.bind({});
NormalAnchor.args = {
  text: 'Revision of versions',
  href: 'https://re-play.supernova-docs.io/spotify-re-play/latest/introduction.html',
  external: false,
  openInNewTab: true,
};

export const InlineAnchor = InlineTemplate.bind({});
InlineAnchor.args = {
  text: 'amet',
  href: 'https://re-play.supernova-docs.io/spotify-re-play/latest/introduction.html',
  external: false,
  openInNewTab: true,
};

export const UnderlinedAnchor = Template.bind({});
UnderlinedAnchor.args = {
  variant: 'underline',
  text: 'Revision of versions',
  href: 'https://re-play.supernova-docs.io/spotify-re-play/latest/introduction.html',
  external: false,
  openInNewTab: true,
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  text: 'Spotify Wikipedia page',
  href: 'https://en.wikipedia.org/wiki/Spotify',
  external: true,
  openInNewTab: true,
};
