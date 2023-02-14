import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The title of the project',
      type: 'string',
    }, {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }, {
      name: 'description',
      title: 'Description',
      type: 'string',

    }, {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }, {
      name: 'githubLink',
      title: 'GithubLink',
      type: 'url',
    }
  ],
})
