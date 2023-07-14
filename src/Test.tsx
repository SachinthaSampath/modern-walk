import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  DatePickerWithRange,
  OptionDropdown,
  Toaster,
} from "./ui-core";

import { useToast } from "./ui-core";

import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "./ui-core";

import { CustomDropdown } from "./ui-core";

import { Popover, PopoverContent, PopoverTrigger } from "./ui-core";

import { Calendar } from "./ui-core";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "./lib/utils";
import { TestForm } from "./TestForm";
import { ParentComponentTestRef } from "./TestRef";

import { Switch } from "./ui-core";

const links = [
  { href: "/", label: "Home" },
  { href: "/mens", label: "Men's clothing" },
  { href: "/womens", label: "Womens's clothing" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
  { href: "/login", label: "Log Out" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Test = () => {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <div className="mx-10 grid grid-cols-3 gap-10 ">
        <div>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex flex-wrap space-x-4 space-y-4 py-2">
          <Button variant="primary">Button</Button>
          <Button variant="outline">Button</Button>
          <Button disabled variant="outline">
            Button
          </Button>
          <Button variant="default">Button</Button>
          <Button variant="danger">Button</Button>
          <Button disabled variant="danger">
            Button
          </Button>
          <Button variant="link">Button</Button>
          <Button disabled variant="link">
            Button
          </Button>
          <Button variant="ghost">Button</Button>
          <Button variant="secondary">Button</Button>
        </div>
        <div>
          <CustomDropdown
            variant="primary"
            items={[
              {
                text: "Delete Properties",
                click: () => {
                  console.log("Dropdown click");
                },
              },
            ]}
            text="Global Action"
          />
          <OptionDropdown
            variant="outline"
            items={[
              {
                text: "View Properties",
                click: () => {
                  console.log("view");
                },
              },
              {
                text: "Delete",
                click: () => {
                  console.log("delete");
                },
              },
            ]}
          />
        </div>

        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

        <div>
          <Popover>
            <PopoverTrigger>Open</PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>

        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"primary"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>

        <DatePickerWithRange />

        <TestForm />

        <Button
          onClick={() => {
            toast({
              title: "Scheduled: Catch up",
              description: "Friday, February 10, 2023 at 5:57 PM",
            });
          }}
        >
          Show Toast
        </Button>

        <ParentComponentTestRef />

        <Switch />
      </div>

      <Toaster />
    </>
  );
};

export default Test;
