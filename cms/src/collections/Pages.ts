import type { CollectionConfig } from 'payload'
import {Hero} from '../blocks/hero';
import { Features } from '../blocks/Features';

export const Pages: CollectionConfig = {
    slug: 'pages',
    labels:{plural:'сторінки', singular: 'сторінка'},
    access: {read: () => true},
    admin: {useAsTitle: 'title'},
    fields: [
        {
            name: 'path',
            type: 'text',
            label: 'url storinky',
            required: true,
            unique: true,
            defaultValue: '/'
        },
        {
            name: 'blocks',
            type: 'blocks',
            label: 'blocki',
            blocks:[Hero,Features]
        }
    ]
}