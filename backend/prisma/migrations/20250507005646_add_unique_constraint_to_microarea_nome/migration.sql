/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Microareas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Microareas_nome_key" ON "Microareas"("nome");
