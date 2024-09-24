// List Component
import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";
import { useAppSelector } from "../store";

export type ListPropTypes = {
  listId: number;
  title: string;
}

export default function List({listId, title}:ListPropTypes) {
  const lists = useAppSelector((state) => state.toDoList.lists);
  const currentList = lists.filter(list => list.id === listId)[0];
  const cards = useAppSelector((state) => state.cardsList.cards);
  const currentCards = cards.filter(card => currentList.cards.includes(card.id));

  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton listId={listId} />
      <h3>{title}</h3>
      {currentCards.map((card, index) => (
          <Card cardId={card.id} title={card.title} description={card.description} key={index} />
      ))}
      <NewCardForm listId={listId} />
    </div>
  );
}
