"use client";
import Page from "@/app/sign-up/[[...sign-up]]/page";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-xl py-8 animate-bounce">
          Book your free Seat Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px] ">
        {/* <DialogHeader>
          <DialogTitle>Book your free Seat Now</DialogTitle>
          <DialogDescription>Book your free Seat Now</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex  flex-col gap-4">
            <Label htmlFor="name" className="mb-1">
              Name
            </Label>
            <Input id="name" placeholder="Name" className="col-span-3" />
          </div>
          <div className="flex  flex-col gap-4">
            <Label htmlFor="username" className="mb-1">
              Email
            </Label>
            <Input
              type="email"
              id="username"
              className="col-span-3"
              placeholder="@gmail.com"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="username" className="mb-1">
              Phone
            </Label>
            <Input
              type="number"
              id="phone"
              placeholder="phone number"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button>Reserver Seat Now</Button>
        </DialogFooter> */}
        <Page />
      </DialogContent>
    </Dialog>
  );
}
