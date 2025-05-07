const { PrismaClient } = require('../src/generated/prisma'); // Ajuste o caminho se necessário
const prisma = new PrismaClient();

async function main() {
    console.log(`Começar função de seeding...`);

    // Criar uma microárea padrão
    const microarea1 = await prisma.microarea.upsert({
        where: { nome: 'Microárea Padrão' }, // Use um identificador único
        update: {},
        create: {
            nome: 'Microárea Padrão',
            descricao: 'Microárea padrão criada pelo sistema.',
        },
    });
    console.log(`Microárea padrão criada com ID: ${microarea1.id}`);

    // Você pode adicionar mais dados de seed aqui (agentes, etc.)

    console.log(`Seeding finalizada.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
