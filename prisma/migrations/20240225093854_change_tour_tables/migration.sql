/*
  Warnings:

  - You are about to drop the column `type` on the `tours` table. All the data in the column will be lost.
  - Added the required column `country` to the `tours` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tours" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "accommodation" BOOLEAN NOT NULL,
    "guide" BOOLEAN NOT NULL
);
INSERT INTO "new_tours" ("accommodation", "city", "data", "guide", "id", "name", "price") SELECT "accommodation", "city", "data", "guide", "id", "name", "price" FROM "tours";
DROP TABLE "tours";
ALTER TABLE "new_tours" RENAME TO "tours";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
