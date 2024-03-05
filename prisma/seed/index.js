const { PrismaClient } = require('../../src/generated/client')

const prisma = new PrismaClient({
    errorFormat: 'pretty'
})

async function main() {
    const interestsToAdd = [
        {
            interest: 'cricket',
            level: [1, 2, 3],
        },
        {
            interest: 'football',
            level: [1, 2, 3],
        },
        {
            interest: 'basketball',
            level: [1, 2, 3],
        },
        // Add more objects for additional rows
    ];

    const roles = [
        {
            role: 'user'
        },
        {
            role: 'vendor',
        },
        {
            role: 'admin'
        },
        // Add more objects for additional rows
    ];


    const createdInterests = await Promise.all([
        ...interestsToAdd.map(interest =>
            prisma.interest.upsert({
                where: { id: -1 }, // Choose a unique identifier
                update: {},
                create: interest,
            })
        ),
        ...roles.map(role =>
            prisma.roles.upsert({
                where: { id: -1 }, // Choose a unique identifier
                update: {},
                create: role,
            })
        )
    ]);

    console.log('Created interests:', createdInterests);
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })