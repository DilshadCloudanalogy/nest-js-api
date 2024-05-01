-- CreateEnum
CREATE TYPE "Role" AS ENUM ('INTERN', 'ENGINEER', 'ADMIN');

-- CreateTable
CREATE TABLE "Emnploye" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Emnploye_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Emnploye_name_key" ON "Emnploye"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Emnploye_email_key" ON "Emnploye"("email");
