import React from 'react'
import { useController } from 'react-hook-form'
import { FormItem, FormLabel, FormControl, FormMessage, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import * as z from 'zod'

interface RenderFieldProps {
  control: any
  name: string
  fieldSchema: any
}

export const RenderField: React.FC<RenderFieldProps> = ({ control, name, fieldSchema }) => {
  const isTextarea =
    fieldSchema instanceof z.ZodString &&
    fieldSchema._def.checks.some(
      (check: any) => check.kind === 'min' && check.value > 50
    )

  const { field: controllerField } = useController({
    name,
    control,
  })

  return (
    <FormField
    
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <FormLabel>
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </FormLabel>
          <FormControl>
            {isTextarea ? (
              <Textarea
                placeholder={`Enter your ${name}`}
                {...controllerField}
              />
            ) : (
              <Input
                placeholder={`Enter your ${name}`}
                {...controllerField}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}