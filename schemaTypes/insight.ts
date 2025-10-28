// schemas/insight.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  // These two lines are updated:
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
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
      validation: (Rule) => Rule.required(), // Make slug required
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
      validation: (Rule) => Rule.required(), // Make author required
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true, // Allows focusing the image better
      },
      // You might want to add fields for image alt text here later
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(), // Default to now
      validation: (Rule) => Rule.required(), // Make publish date required
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent', // This uses the blockContent schema for rich text
      validation: (Rule) => Rule.required(), // Make body required
    }),
    defineField({ // Adding a short summary field
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'A short summary of the insight (for previews).',
      validation: (Rule) => Rule.max(200).warning('Summary should be concise.'),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})