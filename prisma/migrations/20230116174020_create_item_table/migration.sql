-- CreateEnum
CREATE TYPE "TypeItem" AS ENUM ('Food', 'Weapon', 'Shield', 'Armature', 'Potions', 'Map', 'Parchment', 'Others');

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TypeItem" NOT NULL,
    "personageId" INTEGER NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_personageId_fkey" FOREIGN KEY ("personageId") REFERENCES "personages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
