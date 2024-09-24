// Footer Component
import { useAppDispatch } from "../store";
import { addList, clearLists } from "../slices/listsSlice";

export default function Footer() {
  const dispatch = useAppDispatch();

  const handleNewList = (title: string) => {
    if (title !== "") {
      dispatch(addList(title));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const titleInput = (event.target as HTMLFormElement).elements.namedItem("title") as HTMLInputElement;
    const title = titleInput.value;
    handleNewList(title);
  };

  const handleClear = () => {
    dispatch(clearLists());
  };

  return (
    <footer
      className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8"
    >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="List title"
          name="title"
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Save
        </button>
        <button
          onClick={handleClear}
          type="button"
          className="rounded bg-teal px-6 py-4 ml-1 text-xl font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </footer>
  );
}
