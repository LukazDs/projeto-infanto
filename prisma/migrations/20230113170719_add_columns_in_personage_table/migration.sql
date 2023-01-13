/*
  Warnings:

  - Added the required column `bibliography` to the `personages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `money` to the `personages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `race` to the `personages` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specie` to the `personages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "personages" ADD COLUMN     "bibliography" TEXT NOT NULL,
ADD COLUMN     "money" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "race" TEXT NOT NULL,
ADD COLUMN     "specie" TEXT NOT NULL;
