import React from "react";
import { history } from "./interface";
import Ps1 from "../Ps1";

const History: React.FC<{ history: Array<history> }> = ({ history }) => {
  return (
    <>
      {history?.map((entry: history, index: number) => (
        <div key={entry.command + index}>
          <div className="flex gap-2">
            <div className="shrink">
              <Ps1 />
            </div>
            <p className="grow">{entry.command}</p>
          </div>
          <p
            className="whitespace-pre-wrap mb-2"
            style={{ lineHeight: "normal" }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;
