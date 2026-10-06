import {Block} from 'payload';

export const Hero: Block = {
    slug: 'hero',
    labels: {singular: 'Hero', plural: 'Hero'},
    fields: [
        {name: 'badge', type: 'text', label: 'лейба'},
        {name: 'anchor', type: 'text', label: 'id секції'},
        {name: 'title', type: 'text', label: 'Заголовок', required: true},
        {name: 'subtitle', type: 'textarea', label: 'під заголовок', required: true},
        {name: 'image', type: 'upload', relationTo: 'media', label: 'зображення', required: true},
        {name: 'buttons', type: 'array', label: 'кнопки', fields: [
            {name: 'text', type: 'text', required: true},
            {name: 'link', type: 'text', required: true},
            {name: 'variant', type: 'select', required: true, defaultValue: 'primary', options: [
                {label: 'Основна', value: 'primary'},
                {label: 'додаткова', value: 'secondary'},
            ]},

        ]},
    ]
}