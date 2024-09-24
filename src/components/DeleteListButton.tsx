// Delete List Button Component
import { useAppDispatch, useAppSelector } from "../store";
import { deleteList } from "../slices/listsSlice";
import { deleteCard } from "../slices/cardsSlice";

export type DeleteButtonProps = {
  listId: number;
};

export default function DeleteListButton({listId}:DeleteButtonProps) {
  const lists = useAppSelector((state) => state.toDoList.lists);
  const dispatch = useAppDispatch();

  const handleDelete = (listId: number) => {
    if (listId !== null) {
      const currentList = lists.filter(list => list.id === listId)[0];
      const currentCards = currentList.cards;
      currentCards.map((cardId) => {
        dispatch(deleteCard(cardId));
      });
      dispatch(deleteList(listId));
    }
  }

  return (
    <button className="h-[30px]" onClick={() => handleDelete(listId)}>
      <svg
        className="hidden h-[30px] w-[30px] cursor-pointer group-hover/list:block"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
}
