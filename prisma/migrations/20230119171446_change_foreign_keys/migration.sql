/*
  Warnings:

  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `item` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_personageId_fkey";

-- DropForeignKey
ALTER TABLE "item" DROP CONSTRAINT "item_personageId_fkey";

-- DropTable
DROP TABLE "Skill";

-- DropTable
DROP TABLE "item";

-- CreateTable
CREATE TABLE "skills" (
    "id" SERIAL NOT NULL,
    "force" INTEGER NOT NULL DEFAULT 0,
    "resistance" INTEGER NOT NULL DEFAULT 0,
    "perception" INTEGER NOT NULL DEFAULT 0,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "precision" INTEGER NOT NULL DEFAULT 0,
    "reflection" INTEGER NOT NULL DEFAULT 0,
    "velocity" INTEGER NOT NULL DEFAULT 0,
    "wisdom" INTEGER NOT NULL DEFAULT 0,
    "intelligence" INTEGER NOT NULL DEFAULT 0,
    "charisma" INTEGER NOT NULL DEFAULT 0,
    "ruse" INTEGER NOT NULL DEFAULT 0,
    "psychological" INTEGER NOT NULL DEFAULT 0,
    "sensitivity" INTEGER NOT NULL DEFAULT 0,
    "immunity" INTEGER NOT NULL DEFAULT 0,
    "personageId" INTEGER NOT NULL,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "type" "TypeItem" NOT NULL,
    "personageId" INTEGER NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "skills_personageId_key" ON "skills"("personageId");

-- CreateIndex
CREATE UNIQUE INDEX "items_personageId_key" ON "items"("personageId");

-- AddForeignKey
ALTER TABLE "skills" ADD CONSTRAINT "skills_personageId_fkey" FOREIGN KEY ("personageId") REFERENCES "personages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_personageId_fkey" FOREIGN KEY ("personageId") REFERENCES "personages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
