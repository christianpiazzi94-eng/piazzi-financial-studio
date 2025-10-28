// schemaTypes/screener.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'screener',
  title: 'Screener',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Screener Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
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
      description: 'A short summary of the screener (for the card).',
    }),
    defineField({
      name: 'stockList',
      title: 'Stock List',
      type: 'array',
      description: 'The list of companies included in this screener.',
      of: [
        {
          type: 'reference',
          to: [{type: 'deepDive'}], // This links to your Deep Dive schema
        },
      ],
    }),
  ],
})