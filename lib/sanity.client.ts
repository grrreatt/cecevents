import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: '1tufa2jb',
  dataset: 'production',
  apiVersion: '2025-11-06',
  useCdn: true,
})
