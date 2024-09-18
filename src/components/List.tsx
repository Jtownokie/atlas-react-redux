// List Component
import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

type ListPropTypes = {
  title: string;
}

export default function List({title}:ListPropTypes) {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton />
      <h3>{title}</h3>
      <NewCardForm />
    </div>
  );
}
