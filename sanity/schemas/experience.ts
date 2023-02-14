import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'CompanyName',
      type: 'text',
    },
    {
      name: 'companyLogo',
      title: 'CompanyLogo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'startDate',
      title: 'StartDate',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'EndDate',
      type: 'date',
    },
    {
      name: 'isCurrent',
      title: 'IsCurrent',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
})
