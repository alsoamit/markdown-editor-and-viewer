import { EyeIcon, PencilIcon } from "@heroicons/react/outline";

import {
  addH2,
  addH3,
  formatBold,
  formatItalic,
  formatInlineCode,
} from "editor/actions";
import { useContext } from "react";
import { EditorStateContext } from "editor";

export const PreviewBtn = ({ preview, setPreview }) => {
  return (
    <button
      className="lowercase btn btn-sm btn-square"
      onClick={() => setPreview((preview) => !preview)}
    >
      {!preview ? (
        <EyeIcon className="w-5 h-5 text-base-content" />
      ) : (
        <PencilIcon className="w-5 h-5 text-base-content" />
      )}
    </button>
  );
};

export function FormattingBtns({ element, data, setData }) {
  const { setUpdateSelection } = useContext(EditorStateContext);

  const Button = ({ tooltip, onClick, children }) => {
    return (
      <div className="tooltip" data-tip={tooltip}>
        <button className="btn btn-sm" onClick={onClick}>
          {children}
        </button>
      </div>
    );
  };

  return (
    <>
      <Button
        tooltip="heading level 2"
        onClick={() => addH2(element, data, setData, setUpdateSelection)}
      >
        H2
      </Button>
      <Button
        tooltip="heading level 3"
        onClick={() => addH3(element, data, setData, setUpdateSelection)}
      >
        H3
      </Button>
      <Button
        tooltip="bold"
        onClick={() => {
          formatBold(element, data, setData, setUpdateSelection);
        }}
      >
        <strong className="bold">B</strong>
      </Button>
      <Button
        tooltip="italic"
        onClick={() => {
          formatItalic(element, data, setData, setUpdateSelection);
        }}
      >
        <italic className="italic">I</italic>
      </Button>
      <Button
        tooltip="inline code"
        onClick={() => {
          formatInlineCode(element, data, setData, setUpdateSelection);
        }}
      >
        <span>{"<>"}</span>
      </Button>
    </>
  );
}
