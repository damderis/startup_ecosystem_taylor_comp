"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Define the form schema
const formSchema = z.object({
  companyName: z.string().min(2, {
    message: "Company name must be at least 2 characters.",
  }),
  companySector: z.string().nonempty({ message: "Company sector is required" }),
  location: z.string().nonempty({ message: "Location is required" }),
  estYear: z.string().nonempty({ message: "Est. year is required" }),
  aboutCompany: z.string().min(10, {
    message: "About company must be at least 10 characters.",
  }),
  budget: z.string().nonempty({
    message: "Budget must be a positive number.",
  }),
  marketSegmentation: z.string().nonempty({ message: "Market segmentation is required" }),
  technology: z.string().nonempty({ message: "Technology is required" }),
  revenueStream: z.string().nonempty({ message: "Revenue stream is required" }),
})

function RegComp() {

  // Initialize the form using useForm and zodResolver
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      companySector: "",
      location: "",
      estYear: "",
      aboutCompany: "",
      budget: "",
      marketSegmentation: "",
      technology: "",
      revenueStream: "",
    },
  })

  // Define the submit handler
  const onSubmit = (data: any) => {
    // Extract only the fields to be sent to the backend
    const filteredData = {
      companySector: data.companySector,
      budget: data.budget,
      marketSegmentation: data.marketSegmentation,
      technology: data.technology,
      revenueStream: data.revenueStream,
    }

    // Make the API request
    axios.post('/api/submit', filteredData)
      .then(response => {
        console.log('Data submitted successfully:', response.data)
      })
      .catch(error => {
        console.error('Error submitting data:', error)
      })
  }

  return (
    <div className="w-full p-8">
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-bold">Company Details</h1>
        <h2 className="text-lg text-gray-600">Provide information of your company</h2>
        <div className="w-full border-t border-gray-300 my-4"></div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Tech Corp" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the name of your company.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="companySector"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Company Sector</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select sector" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Technology">Technology</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    This is the sector your company operates in.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Location</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Johor">Johor</SelectItem>
                        <SelectItem value="Perak">Perak</SelectItem>
                        <SelectItem value="Kuala Lumpur">Kuala Lumpur</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    This is the location of your company.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="estYear"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Est. Year</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    This is the year your company was established.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            <FormField
              control={form.control}
              name="aboutCompany"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>About Company</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about your company" {...field} />
                  </FormControl>
                  <FormDescription>
                    Provide a brief description of your company.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Budget</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 5000000" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the budget of your company.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="revenueStream"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Revenue Stream</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select revenue stream" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Subscription">Subscription</SelectItem>
                        <SelectItem value="Ads">Ads</SelectItem>
                        <SelectItem value="Sales">Sales</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    This is how your company generates revenue.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="marketSegmentation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Market Segmentation</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select market segmentation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="B2B">B2B</SelectItem>
                        <SelectItem value="B2C">B2C</SelectItem>
                        <SelectItem value="B2G">B2G</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Describe your market segmentation.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="technology"
              render={({ field }) => (
                <FormItem>
                  <FormLabel required>Technology</FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select technology" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AI">AI</SelectItem>
                        <SelectItem value="Blockchain">Blockchain</SelectItem>
                        <SelectItem value="IoT">IoT</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormDescription>
                    Describe the technology used by your company.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end">
            <Button className="p-6 bg-gradient-to-r from-purple-800 to-purple-500 transform transition-transform duration-300 hover:scale-105 text-white">
            <Link href={"/investor"}>Submit</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default RegComp
