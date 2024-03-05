const { PrismaClient, Prisma } = require('../../src/generated/client')
const { errorName, successName } = require('../../utils/constants');
const { errorGenerator } = require('../../helper/helper')

const prisma = new PrismaClient({
    errorFormat: 'pretty'
})

const categoriesResolver = {

    Query: {

        getAllCategories: async (parent, { input }, { id }) => {
            try {

                let filter = {}
                if (input?.activityId) filter = input
                const categories = await prisma.categories.findMany({
                    where: filter
                })
                return categories

            } catch (err) {
                return errorGenerator(errorName.INTERNALSERVER)
            }
        }

    },

    Mutation: {

        addCategory: async (parent, { input }, { id }) => {
            try {
                await prisma.categories.create({
                    data: input
                })

                return {
                    message: successName.CATEGORYCREATED
                }

            } catch (err) {
                if (err instanceof Prisma.PrismaClientKnownRequestError) {
                    if (err.code === 'P2002') return errorGenerator(errorName.CATEGORYALREADYEXIST)
                    else return errorGenerator(errorName.INTERNALSERVER)
                }
                return errorGenerator(errorName.INTERNALSERVER)
            }
        },

        deleteCategory: async (parent, { input }, { id }) => {
            try {
                const { categoryId } = input
                await prisma.roles.delete({
                    where: {
                        id: categoryId
                    }
                })

                return {
                    message: successName.CATEGORYDELETED
                }

            } catch (err) {
                if (err instanceof Prisma.PrismaClientKnownRequestError) {
                    if (err.code === 'P2025') return errorGenerator(errorName.NORECORDFOUND)
                    else return errorGenerator(errorName.INTERNALSERVER)
                }

                return errorGenerator(errorName.INTERNALSERVER)
            }
        },

        updateCategory: async (parent, { input }, { id }) => {
            try {
                const { activityId } = input
                const data = input
                await prisma.roles.update({
                    where: {
                        activityId
                    },
                    data
                })

                return {
                    message: successName.CATEGORYUPDATED
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


module.exports = categoriesResolver;