import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { GerenciamentoMicroareas } from '../gerenciamentoMicroareas';
import { GerenciamentoAgentes } from '../gerenciamentoAgentes';
import { MapIcon, Users } from 'lucide-react';

export function TabsGerenciamento() {
    return (
        <Tabs defaultValue="microareas" className="w-full text-gray-800">
            <TabsList className="grid grid-cols-2 w-full bg-gray-100">
                <TabsTrigger
                    value="microareas"
                    className="py-3 flex items-center gap-2 text-gray-700">
                    <MapIcon size={18} />
                    <span>Microáreas</span>
                </TabsTrigger>
                <TabsTrigger
                    value="agentes"
                    className="py-3 flex items-center gap-2 text-gray-700">
                    <Users size={18} />
                    <span>Agentes</span>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="microareas" className="p-4 text-gray-800">
                <GerenciamentoMicroareas />
            </TabsContent>

            <TabsContent value="agentes" className="p-4 text-gray-800">
                <GerenciamentoAgentes />
            </TabsContent>
        </Tabs>
    );
}
