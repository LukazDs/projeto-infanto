-- CreateEnum
CREATE TYPE "Classification" AS ENUM ('Mage', 'Warrior', 'Archer', 'Healer', 'Hunter');

-- CreateTable
CREATE TABLE "personage" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "player" BOOLEAN NOT NULL,
    "classification" "Classification" NOT NULL DEFAULT 'Warrior',
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "personage_pkey" PRIMARY KEY ("id")
);
