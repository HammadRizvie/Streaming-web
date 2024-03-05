const { PrismaClient, Prisma } = require('../../src/generated/client')
const { errorName, successName } = require('../../utils/constants');
const { errorGenerator } = require('../../helper/helper')

const prisma = new PrismaClient({
    errorFormat: 'pretty'
})

const activityTypesResolver = {

    Query: {

        getAllActivityTypes: async (parent, args, { id }) => {
            try {
                const activityTypes = await prisma.activityTypes.findMany()
                return activityTypes

            } catch (err) {
                return errorGenerator(errorName.INTERNALSERVER)
            }
        }

    },
    Mutation: {

        createActivityType: async (parent, { input }, { id }) => {
            try {
                const { activityType } = input
                await prisma.activityTypes.create({
                    data: {
                        name: activityType
                    }
                })

                return {
                    message: successName.ACTIVITYTYPECREATED
                }

            } catch (err) {
                if (err instanceof Prisma.PrismaClientKnownRequestError) {
                    if (err.code === 'P2002') return errorGenerator(errorName.ROLEALREADYEXIST)
                    else return errorGenerator(errorName.INTERNALSERVER)
                }

                return errorGenerator(errorName.INTERNALSERVER)
            }
        },

        deleteActivityType: async (parent, { input }, { id }) => {
            try {
                const { activityTypeId } = input
                await prisma.activityTypes.delete({
                    where: {
                        id: activityTypeId
                    }
                })

                return {
                    message: successName.ACTIVITYTYPEDELETED
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


module.exports = activityTypesResolver;