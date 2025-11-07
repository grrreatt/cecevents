import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './sanity/schemas'

export default defineConfig({
  projectId: '1tufa2jb',
  dataset: 'production',
  title: 'cecevents CMS',
  basePath: '/studio',
  plugins: [
    deskTool(),
    visionTool(),
  ],
  schema: { types: schemas },
})
