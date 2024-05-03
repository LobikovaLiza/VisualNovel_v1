import React from "react";
import "../styles/Dialogue.css";

export default function Dialogue({ handleNextPhrase, phrase }) {
  if (!phrase) {
    return <div>loading....</div>;
  }

  return (
    <div
      onClick={handleNextPhrase}
      style={{
        width: "100vw",
        height: "80vh",
      }}
    >
      {phrase.dg !== "bg0.png" && (
        <div>
          {!(phrase.person == "autor" || phrase.person == "autor_header") && (
            <div>
              <div className="har">
                <p style={{ padding: "1vh 5vw" }}>{phrase.person}</p>
              </div>

              {phrase.img_characters !== "none" && (
                <div>
                  <img
                    src={`../IMG/characters/${phrase.img_characters}`}
                    className="img_haracters"
                  />
                </div>
              )}
            </div>
          )}

          <div className="diolog">
            <p style={{ padding: "1vh 5vw" }}>{phrase.story}</p>
          </div>
        </div>
      )}

      {phrase.dg == "bg0.png" && (
        <div>
          <div
            className={
              phrase.person == "autor" ? "diolog_autor" : "diolog_autor_header"
            }
          >
            <p>{phrase.story}</p>
          </div>
        </div>
      )}
    </div>
  );
}
