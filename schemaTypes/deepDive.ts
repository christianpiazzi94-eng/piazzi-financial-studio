// schemaTypes/deepDive.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'deepDive',
  title: 'Deep Dive (Company)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title (Company Name)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ticker',
      title: 'Ticker Symbol',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
      description: 'A short summary of the research (for the card).',
    }),
    defineField({
      name: 'researchBody',
      title: 'Research Body',
      type: 'array',
      description: 'The full research content, charts, and data.',
      of: [
        {
          type: 'block', // This is the rich text editor
        },
        {
          type: 'image', // You can also add images directly
        },
      ],
    }),
  ],
})