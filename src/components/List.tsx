// List Component
import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

export type ListPropTypes = {
  id: number;
  title: string;
}

export default function List({id, title}:ListPropTypes) {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton id={id} />
      <h3>{title}</h3>
      <NewCardForm />
    </div>
  );
}
