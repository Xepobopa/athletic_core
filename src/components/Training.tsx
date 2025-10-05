import Image, { StaticImageData } from "next/image"
import Table, { Day } from "./Table"

type TrainingProps = {
    text: string,
    image: StaticImageData
    schedule: Day[],
}

export default function Training({ text, image, schedule }: TrainingProps) {
 return (
        <div>
            <section className="flex flex-wrap text-center pt-[20px] gap-x-[100px]">
              <div className="flex-1 min-w-[300px] flex flex-col justify-center items-center gap-y-[15px]">
                <p className="font-[400] text-[24px] lg:text-[32px]">{text}</p>
              </div>
              <div className="flex-1 min-w-[300px] flex flex-col items-center">
                <Image alt="list" src={image} />
                {/* <Image className="absolute w-[55%] bottom-0 right-0 z-30 pt-[100%]" alt="list" src={Images.Children2} /> */}
              </div>
            </section>

            <section className="pt-[50px]">
              <Table schedule={schedule} />
            </section>
        </div>
    );
}