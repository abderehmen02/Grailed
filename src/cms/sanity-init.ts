import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: '0m1csq58',
  dataset: 'production',
  apiVersion: '2021-03-25', // use a UTC date string
  useCdn: true,
})

