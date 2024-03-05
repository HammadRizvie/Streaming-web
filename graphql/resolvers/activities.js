const { PrismaClient, Prisma } = require('../../src/generated/client')
const { errorName, successName } = require('../../utils/constants');

const prisma = new PrismaClient({
    errorFormat: 'pretty'
})

const activitiesResolver = {

    Query: {

        getAllActivities: async (parent, args, { id }) => {
            try {
                const activities = await prisma.activities.findMany()
                return activities

            } catch (err) {
                return errorGenerator(errorName.INTERNALSERVER)
            }
        }

    },
    Mutation: {

        createActivity: async (parent, { input }, { id }) => {
            try {
                const { activity, typeId } = input
                await prisma.activities.create({
                    data: {
                        name: activity,
                        typeId
                    }
                })

                return {
                    message: successName.ACTIVITYCREATED
                }

            } catch (err) {
                if (err instanceof Prisma.PrismaClientKnownRequestError) {
                    if (err.code === 'P2002') return errorGenerator(errorName.ACTIVITYALREADYEXIST)
                    else return errorGenerator(errorName.INTERNALSERVER)
                }
                return errorGenerator(errorName.INTERNALSERVER)
            }
        },

        updateActivity: async (parent, { input }, { id }) => {
            try {
                const { activityId, activity, typeId } = input
                const updatedActivity = await prisma.activities.update({
                    where: {
                        id: activityId
                    },
                    data: {
                        name: activity,
                        typeId
                    }
                })

                return {
                    message: successName.ACTIVITYUPDATED,
                    data: {
                        updatedActivity
                    }
                }

            } catch (err) {
                if (err instanceof Prisma.PrismaClientKnownRequestError) {
                    if (err.code === 'P2002') return errorGenerator(errorName.ACTIVITYALREADYEXIST)
                    else return errorGenerator(errorName.INTERNALSERVER)
                }
                return errorGenerator(errorName.INTERNALSERVER)
            }
        },

        deleteActivity: async (parent, { input }, { id }) => {
            try {
                const { activityId } = input
                await prisma.activities.delete({
                    where: {
                        id: activityId
                    }
                })

                return {
                    message: successName.ACTIVITYDELETED
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


module.exports = activitiesResolver;