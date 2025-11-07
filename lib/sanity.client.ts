import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: '1tufa2jb',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: true,
})
