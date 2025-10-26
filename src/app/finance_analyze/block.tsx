type BlockProps = {
    title: string,
    children: React.ReactNode // text 
}

export default function Block({title, children}: BlockProps) {
    return (
        <div>
            <h1 className="font-bold text-5xl font-[Jost] pb-[20px] pt-[50px]">{title}</h1>
            <div className="font-[Jost] text-3xl">{children}</div>
        </div>
    )
}