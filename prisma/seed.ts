import { PrismaAdapter } from '@next-auth/prisma-adapter'

import { prisma } from '../src/lib/prisma'

const adapter = PrismaAdapter(prisma)

async function main() {
  console.log('Seeding companies...')

  const timestamp = +new Date()

  const seller = await adapter.createUser({
    name: `Seller ${timestamp}`,
    email: `seller.${timestamp}@domain.tld`,
    emailVerified: new Date(),
  })

  console.log(`Seller ID: ${seller.id}`)

  const buyer = await adapter.createUser({
    name: `Buyer ${timestamp}`,
    email: `buyer.${timestamp}@domain.tld`,
    emailVerified: new Date(),
  })

  console.log(`Buyer ID: ${buyer.id}`)

  const service = await prisma.service.create({
    data: {
      title: `Service ${timestamp}`,
      description: 'A few words',
      price: 42,
      sellerId: seller.id,
    },
  })

  console.log(`Service ID: ${service.id}`)

  const order1 = await prisma.order.create({
    data: {
      serviceId: service.id,
      buyerId: buyer.id,
      price: 42,
    },
  })

  console.log(`Order1 ID: ${order1.id}`)

  const order2 = await prisma.order.create({
    data: {
      serviceId: service.id,
      buyerId: buyer.id,
      price: 42,
    },
  })

  console.log(`Order2 ID: ${order2.id}`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
