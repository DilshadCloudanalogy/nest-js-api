/*
  Warnings:

  - You are about to drop the `Emnploye` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Emnploye";

-- CreateTable
CREATE TABLE "Emnployee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Emnployee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Emnployee_email_key" ON "Emnployee"("email");
