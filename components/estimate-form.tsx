"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const formSchema = z.object({
  itemName: z.string().min(2, {
    message: "Item name must be at least 2 characters.",
  }),
  unitType: z.string({
    required_error: "Please select a unit type.",
  }),
  ratePerUnit: z.coerce.number().min(0, {
    message: "Rate per unit must be a positive number.",
  }),
  quantity: z.coerce.number().int().min(1, {
    message: "Quantity must be a positive integer.",
  }),
})

export function EstimateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      itemName: "",
      ratePerUnit: 0,
      quantity: 1,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="itemName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter item name" {...field} />
              </FormControl>
              <FormDescription>The name of the item or service being estimated.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="unitType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Unit Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a unit type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m2">m² (Square Meter)</SelectItem>
                  <SelectItem value="m3">m³ (Cubic Meter)</SelectItem>
                  <SelectItem value="cum">CUM</SelectItem>
                  <SelectItem value="bag">Bag</SelectItem>
                  <SelectItem value="nos">Nos (Number)</SelectItem>
                  <SelectItem value="mt">MT (Metric Ton)</SelectItem>
                  <SelectItem value="kg">KG</SelectItem>
                  <SelectItem value="ltr">LTR</SelectItem>
                  <SelectItem value="rmt">RMT (Running Meter)</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>The unit of measurement for this item.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ratePerUnit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rate per Unit</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter rate per unit" {...field} />
              </FormControl>
              <FormDescription>The cost per unit of the item.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter quantity" {...field} />
              </FormControl>
              <FormDescription>The number of units required.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Add Item</Button>
      </form>
    </Form>
  )
}

