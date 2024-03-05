-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "type" TEXT DEFAULT 'email',
    "fullname" TEXT,
    "interests" JSONB,
    "phoneNumber" TEXT,
    "profilePic" TEXT,
    "roleId" INTEGER NOT NULL,
    "dob" TIMESTAMP(3),
    "gender" TEXT,
    "aboutMe" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Otp" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "otp" INTEGER,
    "otpExpiry" TIMESTAMP(3),
    "used" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Otp_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interest" (
    "id" SERIAL NOT NULL,
    "interest" TEXT NOT NULL,
    "level" JSONB NOT NULL,

    CONSTRAINT "Interest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActivityTypes" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ActivityTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Activities" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "typeId" INTEGER NOT NULL,

    CONSTRAINT "Activities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Otp_userId_key" ON "Otp"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Otp_otp_key" ON "Otp"("otp");

-- CreateIndex
CREATE UNIQUE INDEX "Interest_interest_key" ON "Interest"("interest");

-- CreateIndex
CREATE UNIQUE INDEX "Roles_role_key" ON "Roles"("role");

-- CreateIndex
CREATE UNIQUE INDEX "ActivityTypes_name_key" ON "ActivityTypes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Activities_name_key" ON "Activities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Activities_typeId_key" ON "Activities"("typeId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Otp" ADD CONSTRAINT "Otp_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activities" ADD CONSTRAINT "Activities_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ActivityTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
