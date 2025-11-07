import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity.client'

export const urlFor = (source: any) => imageUrlBuilder(client).image(source)
