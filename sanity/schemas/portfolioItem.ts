export default {
  name: 'portfolioItem',
  title: 'Portfolio Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Medical', value: 'Medical' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Academic', value: 'Academic' },
          { title: 'Exhibition', value: 'Exhibition' },
        ],
      },
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'attendees',
      title: 'Attendees',
      type: 'string',
      description: 'e.g. 3,500+',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{ type: 'file' }],
      validation: (Rule) => Rule.max(2),
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Stethoscope', value: 'Stethoscope' },
          { title: 'Building2', value: 'Building2' },
          { title: 'GraduationCap', value: 'GraduationCap' },
          { title: 'Heart', value: 'Heart' },
          { title: 'Rocket', value: 'Rocket' },
          { title: 'Store', value: 'Store' },
        ],
      },
    },
  ],
}
