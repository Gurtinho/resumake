
import { LayoutTemplate } from 'lucide-react';
import { SectionTitle } from '../../infos-sidebar/section-title';
import { useFormContext } from 'react-hook-form';
import { ResumeSchemaProps } from '../..';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect } from 'react';

type ResumeTemplate = ResumeSchemaProps['structure']['template'];

const templates: ResumeTemplate[] = ['onix', 'jynx', 'eevee', 'ditto']; 

export const TemplatesListSection = () => {
  const { watch, setValue, formState: { errors } } = useFormContext<ResumeSchemaProps>();

  return (
    <div>
      <SectionTitle title='Modelos' icon={LayoutTemplate} />

      <div className='w-full grid grid-cols-2 gap-4 mt-4'>
        {templates.map((template) => {
          const isSelected = template === watch('structure.template');

          return (
            <button
              key={`template-${template}`}
              type='button'
              className={cn(
                'w-full aspect-auto relative rounded border-2 morder-muted overflow-hidden hover:brightness-125 transition-all',
                isSelected && 'border-muted-foreground',
              )}
              onClick={() => {
                setValue('structure.template', template); // Atualiza o valor do campo
              }}
            >
              <Image
                className='w-full h-full object-cover'
                width={150}
                height={130}
                src={`/images/templates/${template}.webp`}
                alt={`Template ${template}`}
              />
              <div className={cn(
                'absolute text-sm inset-0 w-full h-full flex flex-col font-bold font-title capitalize',
                'items-center justify-end p-2 bg-gradient-to-t from-background',
              )}>
                {template}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}