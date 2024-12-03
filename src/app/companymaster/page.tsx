import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

import React from "react";

const page = () => {
  return (
    <main className="bg-[#dfdfdf] h-full flex justify-center items-center p-0 m-0">
      <ScrollArea className="h-[90vh] w-[90vw]">
        <Card>
          <CardHeader>
            <CardTitle>Company Master</CardTitle>
          </CardHeader>
          <hr className="border-[#dfdfdf] border-2 mb-6" />
          <CardContent>
            <p className="mb-5">General Information</p>
            <form>
              <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div>
                  <Label htmlFor="company-name">
                    Company Name
                    <span className="text-red-500 font-bold">*</span>
                  </Label>
                  <Input id="company-name" required />
                </div>
                <div>
                  <Label htmlFor="customer-short-name">
                    Customer Short Name
                    <span className="text-red-500 font-bold">*</span>
                  </Label>
                  <Input id="customer-short-name" required />
                </div>
                <div className="row-start-2">
                  <Label htmlFor="start-date">Company Start Date</Label>
                  <Input id="start-date" />
                </div>
                <div className="row-start-2">
                  <Label htmlFor="close-date">Company Close Date</Label>
                  <Input id="close-date" />
                </div>
              </div>
              <hr className="border-[#dfdfdf] border mt-6 mb-6" />
              <p className="mb-5">Contact Information</p>
              <div className="grid grid-cols-4 grid-rows-4 gap-4">
                <div className="col-start-1 col-span-4">
                  <Label htmlFor="address">
                    Address<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <Input id="address" required />
                </div>
                <div className="col-start-1 row-start-2">
                  <Label htmlFor="city">
                    City<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <Input id="city" required />
                </div>
                <div className="col-start-2 row-start-2">
                  <Label htmlFor="district">
                    District<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <Input id="district" required />
                </div>
                <div className="col-start-4 row-start-2">
                  <Label htmlFor="state">
                    State<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <Input id="state" required />
                </div>
                <div className="col-start-3 row-start-2">
                  <Label htmlFor="country">
                    Country<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <Input id="country" required />
                </div>
                <div className="row-start-3">
                  <Label htmlFor="pin">PIN</Label>
                  <Input id="pin" />
                </div>
                <div className="col-start-1 row-start-4">
                  <Label htmlFor="landline1">Landline No 1</Label>
                  <Input id="landline1" />
                </div>
                <div className="col-start-4 row-start-3">
                  <Label htmlFor="landline2">Landline No 2</Label>
                  <Input id="landline2" />
                </div>
                <div className="col-start-3 row-start-3">
                  <Label htmlFor="mobile1">Mobile No 1</Label>
                  <Input id="mobile1" />
                </div>
                <div className="col-start-2 row-start-3">
                  <Label htmlFor="mobile2">Mobile No 2</Label>
                  <Input id="mobile2" />
                </div>
                <div className="row-start-4 col-span-2">
                  <Label htmlFor="email">Email ID</Label>
                  <Input id="email" />
                </div>
                <div className="row-start-4">
                  <Label htmlFor="website">Web Site Address</Label>
                  <Input id="website" />
                </div>
              </div>
              <hr className="border-[#dfdfdf] border mt-6 mb-6" />
              <p className="mb-5">Statutory Information</p>
              <div className="grid grid-cols-3 grid-rows-3 gap-4">
                <div>
                  <Label htmlFor="pan">PAN</Label>
                  <Input id="pan" />
                </div>
                <div>
                  <Label htmlFor="gstin">GSTIN</Label>
                  <Input id="gstin" />
                </div>
                <div>
                  <Label htmlFor="gst-state-code">GST State Code</Label>
                  <Input id="gst-state-code" />
                </div>
                <div className="row-start-2">
                  <Label htmlFor="cin">CIN</Label>
                  <Input id="cin" />
                </div>
                <div className="row-start-2 col-span-2">
                  <Label htmlFor="auth-signatory">Authorized Signatory</Label>
                  <Input id="auth-signatory" />
                </div>
                <div className="row-start-3 col-start-3 col-span-1 justify-self-end">
                  <button
                    type="submit"
                    className="bg-[#0275d8] text-white px-8 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  >
                    Submit Form
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </ScrollArea>
    </main>
  );
};

export default page;
