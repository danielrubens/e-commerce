import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'p4zyz1e4',
    dataset: 'production',
    apiVersion: '2022-11-03',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

// gives access to the url where images are stored
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);