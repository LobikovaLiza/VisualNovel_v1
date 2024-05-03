export const NextPhrase = ({state, setEnd}) => async (dispatch) => {
    
  if (state.chapter_data_index < state.chapter_data.length - 1) {
      dispatch({
        type: "next_background_index",
        nextBackground: state.chapter_data[state.chapter_data_index + 1].dg,
      });
    }

  if (state.chapter_data_index == state.chapter_data.length - 1) {
    switch (state.chapter) {
      case 1:
        dispatch({
          type: "next_choice",
          nextChoice: [true, 2.1, 2.2, "Подойти и помочь", "Пойти дальше"],
        });
        break;

      case 2.1:
        dispatch({
          type: "next_choice",
          nextChoice: [true, 3.1, 3.2, "Пойти к гадалке", "Не идти"],
        });
        break;

      case 3.1:
        dispatch({ type: "meeting_with_a_with", nextChapter: 4 });
        break;

      case 3.2:
      case 2.2:
        dispatch({ type: "next_chapter", nextChapter: 4 });
        break;

      case 4:
        dispatch({
          type: "next_choice",
          nextChoice: [true, 5.1, 5.2, "Посмотреть откуда шум", "Не идти"],
        });
        break;

      case 5.1:
        dispatch({ type: "meeting_with_a_priest", nextChapter: 6 });
        break;

      case 5.2:
        dispatch({ type: "next_chapter", nextChapter: 6 });
        break;

      case 6:
        {
          if (state.priest) {
              dispatch({
                type: "next_choice",
                nextChoice: [
                  true,
                  7.2,
                  7.3,
                  "Посмотреть откуда шум",
                  "Не идти",
                ],
              });
            } else {
              dispatch({
                type: "next_choice",
                nextChoice: [
                  true,
                  7.1,
                  7.3,
                  "Посмотреть откуда шум",
                  "Не идти",
                ],
              });
            }
          }
          break;

        case 7.1:
        case 7.2:
          dispatch({ type: "meeting_with_an_elf", nextChapter: 8 });
          break;

        case 7.3:
          dispatch({ type: "next_chapter", nextChapter: 8 });
          break;

        case 8:
          {
            if (state.witch && state.priest && state.elf)
              dispatch({ type: "next_chapter", nextChapter: 9.1 });
            else if (state.witch && state.priest && !state.elf)
              dispatch({ type: "next_chapter", nextChapter: 9.2 });
            else if (state.witch && !state.priest && state.elf)
              dispatch({ type: "next_chapter", nextChapter: 9.3 });
            else if (state.witch && !state.priest && !state.elf)
              dispatch({ type: "next_chapter", nextChapter: 9.4 });
            else if (!state.witch && state.priest && state.elf)
              dispatch({ type: "next_chapter", nextChapter: 9.5 });
            else if (!state.witch && state.priest && !state.elf)
              dispatch({ type: "next_chapter", nextChapter: 9.6 });
            else if (!state.witch && !state.priest && state.elf)
              dispatch({ type: "next_chapter", nextChapter: 9.7 });
            else dispatch({ type: "next_chapter", nextChapter: 9.8 });
          }
          break;

        default:
          dispatch({ type: "end" });
          setEnd(true);
          break;
      }

      dispatch({ type: "next_index" });
    }
};

export const NextChoice = (new_choice) => async (dispatch) => {
  dispatch({ type: "next_chapter_and_choice", nextChapter: new_choice });
};

export const  NextHistory = ({new_chapter, new_witch, new_priest, new_elf}) => async (dispatch) => {
  dispatch({type: "next_history", nextChapter: new_chapter, nextWitch: new_witch, nextPriest: new_priest, nextElf: new_elf})
}

export const ActionSkip = (new_background) => async (dispatch) => {
  dispatch({type: "skip", nextBackground: new_background })
}


export const DeleteHistory= () => async (dispatch) => {
  dispatch({type: "delete_history"})
}