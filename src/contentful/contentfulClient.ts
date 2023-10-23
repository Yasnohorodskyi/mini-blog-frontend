import { createClient } from 'contentful';

const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;
const previewAccessToken = import.meta.env.VITE_CONTENTFUL_PREVIEW_ACCESS_TOKEN;

if (!spaceId || !accessToken || !previewAccessToken) {
  throw new Error('Contentful space ID and access token must be provided');
}

export const client = createClient({
  space: spaceId,
  accessToken: accessToken,
});

const previewClient = createClient({
  space: spaceId!,
  accessToken: previewAccessToken,
  host: 'preview.contentful.com',
});

export default function contentfulClient({ preview = false }) {
  if (preview) {
    return previewClient;
  }

  return client;
}
