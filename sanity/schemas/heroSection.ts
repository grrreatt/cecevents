export default {
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'subtitle', title: 'Subtitle', type: 'text' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'ctaPrimaryLabel', title: 'Primary CTA Label', type: 'string' },
    { name: 'ctaPrimaryLink', title: 'Primary CTA Link', type: 'url' },
    { name: 'ctaSecondaryLabel', title: 'Secondary CTA Label', type: 'string' },
    { name: 'ctaSecondaryLink', title: 'Secondary CTA Link', type: 'url' },
    {
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
        ],
      }],
    },
  ],
}