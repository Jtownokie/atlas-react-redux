// List Component
import DeleteListButton from "./DeleteListButton";
import Card from "./Card";
import NewCardForm from "./NewCardForm";

export default function List() {
  return (
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton />
      <h3>To Do</h3>
      <Card />
      <Card />
      <Card />
      <NewCardForm />
    </div>
  );
}
