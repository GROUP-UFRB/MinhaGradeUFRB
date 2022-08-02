/*
  Warnings:

  - You are about to drop the column `unit` on the `ComplementActivity` table. All the data in the column will be lost.
  - You are about to drop the column `semeter` on the `CourseRequireSubject` table. All the data in the column will be lost.
  - Added the required column `semester` to the `CourseRequireSubject` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ComplementActivity" DROP COLUMN "unit";

-- AlterTable
ALTER TABLE "CourseRequireSubject" DROP COLUMN "semeter",
ADD COLUMN     "semester" TEXT NOT NULL;
