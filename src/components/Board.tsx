// Board Component
import List from "./List";
import { useAppSelector, useAppDispatch } from "../store";
import { DndContext, useSensors, useSensor, PointerSensor } from '@dnd-kit/core';
import { removeCardFromList, addCardToList } from "../slices/listsSlice";

export default function Board() {
  const dispatch = useAppDispatch();
  const lists = useAppSelector((state) => state.toDoList.lists);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      }
    })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const cardId = parseInt(active.id, 10);
      const sourceListId = lists.find(list => list.cards.includes(cardId))?.id;
      const targetListId = parseInt(over.id, 10);

      if (sourceListId !== targetListId && sourceListId !== undefined && targetListId !== undefined) {
        dispatch(removeCardFromList({ listId: sourceListId, cardId }));
        dispatch(addCardToList({ listId: targetListId, newCardId: cardId }));
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
        <div className="flex h-full space-x-4">
          {lists.map((list, index) => (
            <List listId={list.id} title={list.title} key={index} />
          ))}
        </div>
      </div>
    </DndContext>
  );
}
