import { cn } from "athletic/lib/utils"

export type Day = {
    day: string
    isFree: boolean
    training: string[]
}

type TableProps = {
    schedule: Day[]
}

export default function Table({schedule}: TableProps) {
    // should be 7 elems in arr
    let wrongLen = schedule.length != 7
    if (wrongLen) {
        return (
            <div className="flex flex-wrap text-center w-full h-full items-center">
                <h1>Something went wrong!</h1>
            </div>
        )
    }

    return (
        <div className="w-full flex flex-wrap flex-col lg:flex-row gap-4">
             {schedule.map((day, index) => (
                <div
                    key={index}
                    className={cn(
                        "flex-1 flex flex-col justify-start p-4 text-center rounded-3xl px-[5px] py-[10px]",
                        index % 2 == 0 ? "bg-[#D9D9D94D]" : "bg-[#D9D9D9D9]",
                    )}
                >
                    <h3 className="font-bold">{day.day}</h3>

                    {day.isFree ? <p>Free day</p> : <ul className="pl-6 space-y-2 list-disc">
                        {
                            day.training.map((training, index2) => (
                                <li key={index2}>{training}</li>
                            ))
                        }
                    </ul>}
                </div>
            ))}
        </div>
    )
}