-- DropForeignKey
ALTER TABLE "Activities" DROP CONSTRAINT "Activities_typeId_fkey";

-- DropForeignKey
ALTER TABLE "Categories" DROP CONSTRAINT "Categories_activityId_fkey";

-- DropForeignKey
ALTER TABLE "Otp" DROP CONSTRAINT "Otp_userId_fkey";

-- AddForeignKey
ALTER TABLE "Otp" ADD CONSTRAINT "Otp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ActivityTypes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;
