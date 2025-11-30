type FootnoteItem = {
  label: string;
  meaning: string;
};

type ImageFootnote = {
  image: () => React.ReactNode;      
  meaning: string; 
};

type FootnotesContainerProps = {
  left: FootnoteItem[];
  right: ImageFootnote[];
};

export const FootnotesContainer = ({ left, right }: FootnotesContainerProps) => {
  return (
    <div className="mt-6 p-4 border border-black/20 rounded-lg bg-white flex flex-col md:flex-row justify-between gap-6">
      
      {/* Left block */}
      <div className="flex-1">
        <h3 className="font-semibold mb-3 text-black">Vysvetlivky:</h3>
        <ul className="space-y-1">
          {left.map((item, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="font-mono text-black">{item.label}</span>
              <span className="text-black/70">{item.meaning}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE: image icons from function */}
      <div className="flex-1">
        <h3 className="font-semibold mb-3 text-black">Ikony:</h3>

        <div className="grid grid-cols-2 gap-4">
          {right.map((img, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center">{img.image()}</div>
                <p className="text-xs text-black/60 mt-1">{img.meaning}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
