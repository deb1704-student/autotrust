import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useState } from "react";

const initialBlocks = [
  { id: "c1", type: "condition", label: "Salary > 50000" },
  { id: "c2", type: "condition", label: "Employee Type = Full-Time" },
  { id: "a1", type: "action", label: "Generate Rent Receipt" },
  { id: "a2", type: "action", label: "Email CA" }
];

export default function WorkflowBuilder({ onSave }) {
  const [blocks, setBlocks] = useState(initialBlocks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(blocks);
    const [moved] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, moved);

    setBlocks(items);
  };

  return (
    <div>
      <h3>🧩 Advanced Automation Builder</h3>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="builder">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ border: "2px dashed #999", padding: 20 }}
            >
              {blocks.map((b, i) => (
                <Draggable key={b.id} draggableId={b.id} index={i}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        padding: 12,
                        marginBottom: 10,
                        background: b.type === "condition" ? "#e3f2fd" : "#e8f5e9",
                        ...provided.draggableProps.style
                      }}
                    >
                      <b>{b.type.toUpperCase()}</b>: {b.label}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <button onClick={() => onSave(blocks)} style={{ marginTop: 20 }}>
        Save Workflow
      </button>
    </div>
  );
}
