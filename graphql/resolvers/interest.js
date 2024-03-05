const { PrismaClient, Prisma } = require('../../src/generated/client')
const { errorName, successName } = require('../../utils/constants');
const { errorGenerator } = require('../../helper/helper')

const prisma = new PrismaClient({
    errorFormat: 'pretty'
})

const interestResolver = {

    Query: {

        getAllInterests: async (parent, args, { id }) => {
            try {
                const interests = await prisma.interest.findMany()
                return interests

            } catch (err) {
                return errorGenerator(errorName.INTERNALSERVER)
            }
        }

    },

    Mutation: {

        addInterest: async (parent, { input }, { id }) => {
            try {
                const { interest, level } = input
                await prisma.interest.create({
                    data: {
                        interest,
                        level
                    }
                })

                return {
                    message: successName.INTERESTCREATED
                }

            } catch (err) {
                if (err instanceof Prisma.PrismaClientKnownRequestError) {
                    if (err.code === 'P2002') return errorGenerator(errorName.INTERESTALREADYEXIST)
                    else return errorGenerator(errorName.INTERNALSERVER)
                }
                return errorGenerator(errorName.INTERNALSERVER)
            }
        },

        deleteInterest: async (parent, { input }, { id }) => {
            try {
                const { interestId } = input
                await prisma.roles.delete({
                    where: {
                        id: interestId
                    }
                })

                return {
                    message: successName.INTERESTDELETED
                }

            } catch (err) {
                if (err instanceof Prisma.PrismaClientKnownRequestError) {
                    if (err.code === 'P2025') return errorGenerator(errorName.NORECORDFOUND)
                    else return errorGenerator(errorName.INTERNALSERVER)
                }

                return errorGenerator(errorName.INTERNALSERVER)
            }
        }

    }


};


module.exports = interestResolver;