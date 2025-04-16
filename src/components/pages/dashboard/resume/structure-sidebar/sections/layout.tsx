/* eslint-disable @typescript-eslint/no-explicit-any */
import { Columns3 } from "lucide-react"
import { SectionTitle } from "../../infos-sidebar/section-title"
import { useFieldArray, useFormContext } from "react-hook-form";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import { LayoutDragList } from '../layout-drag-list/index';
import { ResumeSchemaProps } from "../..";

export const LayoutSection = () => {
  const {
    control,
  } = useFormContext<ResumeSchemaProps>();

  const {
    fields: mainFields,
    move: moveMainFields,
    insert: insertMainFields,
    remove: removeMainFields,
  } = useFieldArray({
    control,
    name: 'structure.layout.mainSections'
  });

  const {
    fields: sidebarFields,
    move: moveSidebarFields,
    insert: insertSidebarFields,
    remove: removeSidebarFields,
  } = useFieldArray({
    control,
    name: 'structure.layout.sidebarSections'
  });

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    // Se o elemento for transferido para outro droppable
    if (source.droppableId !== destination.droppableId) {
      switch (source.droppableId) {
        case 'mainFields':
          // Correto: mover DE mainFields PARA sidebarFields
          insertSidebarFields(destination.index, [mainFields[source.index] as any]);
          removeMainFields(source.index);
          break;
        case 'sidebarFields':
          // Correto: mover DE sidebarFields PARA mainFields
          insertMainFields(destination.index, [sidebarFields[source.index] as any]);
          removeSidebarFields(source.index);
          break;
      }
      return;
    }

    // Se o elemento for transferido para o mesmo droppable
    if (source.droppableId === 'mainFields') {
      moveMainFields(source.index, destination.index);
    } else {
      moveSidebarFields(source.index, destination.index);
    }
  }
    
  return (
    <div>
      <SectionTitle title='Estrutura' icon={Columns3} />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Droppable droppableId="mainFields">
            {
              (provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <LayoutDragList title="Principal" fields={mainFields} />
                  {/* Evita erro com pulo de elementos */}
                  {provided.placeholder}
                </div>
              )
            }
          </Droppable>

          <Droppable droppableId="sidebarFields">
            {
              (provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <LayoutDragList title="Barra Lateral" fields={sidebarFields} />
                  {/* Evita erro com pulo de elementos */}
                  {provided.placeholder}
                </div>
              )
            }
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  )
}