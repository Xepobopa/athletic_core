type BlockProps = {
    title: string,
    children: React.ReactNode // text 
}

export default function Block({title, children}: BlockProps) {
    return (
        <div>
            <h1 className="font-bold text-2xl text-center font-[Jost] italic pb-[20px] pt-[50px]">{title}</h1>
            <div className="font-[Jost] font-medium text-xl">{children}</div>
        </div>
    )
}