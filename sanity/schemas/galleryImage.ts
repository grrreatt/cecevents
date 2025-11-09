export default {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'category', title: 'Category', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true }, validation: (Rule: any) => Rule.required() },
    { name: 'order', title: 'Order', type: 'number', description: 'Lower numbers appear first' },
  ],
}
