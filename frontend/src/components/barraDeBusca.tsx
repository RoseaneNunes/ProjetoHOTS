type props = {
    search: string;
    setSearch: (value: string) => void;
};

export function BarraDeBusca({ search, setSearch }: props) {
    return (
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar Paciente..."
            className="rounded-md w-full border-2 hover:ring-2 border-[#00332c]  px-3 py-2 text-sm "
        />
    );
}
