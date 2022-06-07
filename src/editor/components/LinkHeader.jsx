const { addLink } = require("editor/actions");

export default function LinkHeader({
  element,
  data,
  setData,
  link,
  setLink,
  setShowLinkHeader,
  setUpdateSelection,
}) {
  const handleAddLink = (e) => {
    addLink(element, data, setData, setShowLinkHeader, setUpdateSelection, {
      link,
    });
  };
  return (
    <div className="absolute left-0 right-0 p-4 space-y-2 dropdown top-full bg-neutral">
      <span className="block text-xs font-bold uppercase">
        Insert hyperlink
      </span>
      <div className="flex justify-start gap-x-2">
        <input
          type="text"
          autoFocus
          className="flex-1 w-full input input-sm"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button className="btn btn-sm btn-primary" onClick={handleAddLink}>
          Add
        </button>
        <button
          className="btn btn-sm btn-ghost"
          onClick={() => setShowLinkHeader(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
