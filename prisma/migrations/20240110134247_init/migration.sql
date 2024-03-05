-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" JSONB NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "availableAt" TIMESTAMP(3) NOT NULL,
    "unavailableAt" TIMESTAMP(3) NOT NULL,
    "capacity" INTEGER NOT NULL,
    "minThreshold" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,
    "activityId" INTEGER NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_name_key" ON "Categories"("name");

-- AddForeignKey
ALTER TABLE "Categories" ADD CONSTRAINT "Categories_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
