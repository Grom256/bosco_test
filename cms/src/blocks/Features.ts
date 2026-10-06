import {Block} from 'payload';

export const Features: Block = {
    slug: 'features',
    labels: {plural: 'Переваги', singular: "Переваги"},
    fields: [
        {name:'anchor', type: 'text', label: 'id'},
        {name:'title', type: 'text', label: 'заголовок', required: true},
        {name:'items', type: 'array', label: 'фічі', fields: [
            {name: 'icon', type: 'text', label: 'іконка', required: true},
            {name: 'title', type: 'text', label: 'назва', required: true},
            {name: 'text', type: 'textarea', label: 'опис'},
        ]},
    ]
}