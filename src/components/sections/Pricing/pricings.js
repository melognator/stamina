const pricings = [
    {
        title: 'Básico',
        price: '$100',
        description: 'Para probar el gimnasio antes de suscribirte',
        daily: true,
        features: [
            'Acceso a máquinas',
            'Acceso a agua',
            'Acceso a vestidores',
        ]
    },
    {
        title: 'Estándar',
        description: 'Para personas que quieren empezar a entrenar',
        price: '$800',
        monthly: true,
        features: [
            'Acceso a máquinas',
            'Acceso a agua',
            'Acceso a vestidores',
        ],
        tag: 'Recomendado'
    },
    {
        title: 'Premium',
        price: '$1200',
        description: 'Para personas que quieren entrenar como profesionales',
        monthly: true,
        features: [
            'Lo mismo que el plan estándar',
            'Acceso a clases grupales',
            'Acceso a entrenador personal',
        ]
    }
]

export default pricings