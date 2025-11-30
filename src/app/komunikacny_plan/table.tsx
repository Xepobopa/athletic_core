import { Images } from "athletic/images/images";
import Image from "next/image";

export const Telegram = () => {
    return (
        <Image src={Images.TG_Logo} width={40} alt="telegram"/>
    )
}

export const Timeghost = () => {
    return (
        <Image src={Images.Timeghost} width={40} alt="telegram"/>
    )
}

const Frequency = ({ value }: { value: number }) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: value }).map((_, i) => (
        <span key={i} className="text-lg font-bold">
          ↑
        </span>
      ))}
    </div>
  );
};

export default Frequency;


export const TableSection = () => {
  return (
    <div className="overflow-x-auto my-10">
      <table className="min-w-full border border-black/30 rounded-lg overflow-hidden">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left">Stakeholder</th>
            <th className="px-4 py-3 text-left">Predmet kom.</th>
            <th className="px-4 py-3 text-left">Forma kom.</th>
            <th className="px-4 py-3 text-left">Frekvencia</th>
          </tr>
        </thead>

        <tbody>
          {/* Row 1 */}
          <tr className="border-t border-black/20">
            <td className="px-4 py-3">Pavlo Tsera</td>
            <td className="px-4 py-3">Disajn / UX</td>
            <td className="px-4 py-3"><Telegram/></td>
            <td className="px-4 py-3"><Frequency value={1}/></td>
          </tr>

          {/* Row 2 */}
          <tr className="border-t border-black/20 bg-black/5">
            <td className="px-4 py-3">Artem Roshko</td>
            <td className="px-4 py-3">Hlavný obsah</td>
            <td className="px-4 py-3">
                <div
                className={[
                    "flex",
                    `gap-[10px]`,
                    "items-center",
                ].join(" ")}
                >
                <Telegram/><Timeghost/>
                </div>
            </td>
            <td className="px-4 py-3"><Frequency value={2}/></td>
          </tr>

          {/* Row 3 */}
          <tr className="border-t border-black/20">
            <td className="px-4 py-3">Anton Pilhui</td>
            <td className="px-4 py-3">Hlavný obsah</td>
            <td className="px-4 py-3">
                <div
                className={[
                    "flex",
                    `gap-[10px]`,
                    "items-center",
                ].join(" ")}
                >
                <Telegram/><Timeghost/>
                </div>
            </td>
            <td className="px-4 py-3"><Frequency value={2}/></td>
          </tr>

          {/* Row 4 */}
          <tr className="border-t border-black/20 bg-black/5">
            <td className="px-4 py-3">Dmytro Ivanov</td>
            <td className="px-4 py-3">Rozdeľovanie úloh / Vývoj webu</td>
            <td className="px-4 py-3"><div
                className={[
                    "flex",
                    `gap-[10px]`,
                    "items-center",
                ].join(" ")}
                >
                <Telegram/><Timeghost/>
                </div></td>
            <td className="px-4 py-3"><Frequency value={3}/></td>
          </tr>

          {/* Row 5 */}
          <tr className="border-t border-black/20">
            <td className="px-4 py-3">Sviatoslav ...</td>
            <td className="px-4 py-3">Text prezentácie</td>
            <td className="px-4 py-3"><Telegram/></td>
            <td className="px-4 py-3"><Frequency value={1}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
