import { Rating } from "@smastrom/react-rating"
import '@smastrom/react-rating/style.css'

type BlockProps = {
    title: string,
    probabilityScore: number,
    impactScore: number,
    desc: string,
    conseq: string,
    solution: string
}

export default function Block({title, desc, probabilityScore, impactScore, conseq, solution}: BlockProps) {
    return (
        <div className="w-1/2 mx-auto mt-12 bg-white rounded-2xl shadow-xl p-10 font-[Jost] text-3xl flex flex-col gap-[30px]">
            <h1 className="font-bold text-5xl font-[Jost] pb-[20px] pt-[50px]">{title}</h1>
            {/* <div className="font-[Jost] text-3xl">{children}</div> */}
            <div>
                <div className="flex flex-row">
                    <span className="font-bold">Pravdepdoobnosť:  </span>
                    <Rating
                        style={{ maxWidth: 180 }}
                        value={probabilityScore}
                        readOnly
                        />
                </div>
                <div className="flex flex-row">
                    <span className="font-bold">Dopad:</span>
                    <Rating
                    style={{ maxWidth: 180 }}
                    value={impactScore}
                    readOnly
                    />
                </div>
            </div>

            <div>
                <p className="font-bold">Popis:</p>
                {desc}
            </div>

            <div>
                <p className="font-bold">Možné následky:</p>
                {conseq}
            </div>

            <div>
                <p className="font-bold">Riešenie:</p>
                {solution}
            </div>
        </div>
    )
}