import React, { Fragment } from "react";
import { Menu, Switch, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui-core";

import { Button, Tabs, TabsContent, TabsList, TabsTrigger } from "./ui-core";

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
  return (
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
    </div>
  );
};

export default Test;
