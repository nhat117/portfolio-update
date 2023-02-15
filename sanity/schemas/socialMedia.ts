import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialMedia',
  title: 'SocialMedia',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name:'url',
      title: 'Url',
      type: 'url',
    }
  ],
})
