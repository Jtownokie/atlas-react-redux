// New Card Form Component
import { useAppDispatch } from "../store";
import { addCard } from "../slices/cardsSlice";
import { updateList } from "../slices/listsSlice";
import { useAppSelector } from "../store";

export type NewCardFormProps = {
  listId: number;
};

export default function NewCardForm({listId}: NewCardFormProps) {
  const cards = useAppSelector((state) => state.cardsList.cards);
  const dispatch = useAppDispatch();

  const handleNewCard = (title: string, description: string) => {
    if (title !== "" && description !== "") {
      const newCard = {
        id: cards.length < 1 ? 1 : cards[cards.length - 1].id + 1,
        title: title,
        description: description,
      };
      dispatch(addCard(newCard));
      dispatch(updateList({listId, newCardId: newCard.id}));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const titleInput = (event.target as HTMLFormElement).elements.namedItem("title") as HTMLInputElement;
    const descriptionInput = (event.target as HTMLFormElement).elements.namedItem("description") as HTMLInputElement;
    const title = titleInput.value;
    const description = descriptionInput.value;
    handleNewCard(title, description);
  };

  return (
    <div className="group/new-card m-3 flex h-44 w-full justify-center">
      <form
        onSubmit={handleSubmit}
        className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
      >
        <input
          className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
          autoFocus
          type="text"
          placeholder="Title"
          name="title"
        />
        <textarea
          className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
          placeholder="Description"
          name="description"
        ></textarea>
        <div className="buttons w-full hover:bg-teal">
          <button type="submit" className="w-full p-4">Save</button>
        </div>
      </form>
    </div>
  );
}
