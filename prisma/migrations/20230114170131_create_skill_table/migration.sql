-- CreateTable
CREATE TABLE "Skill" (
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

    CONSTRAINT "Skill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_personageId_fkey" FOREIGN KEY ("personageId") REFERENCES "personages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
