import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Building, CalendarDays, CircleUserRound, ClipboardPen, Globe, IdCard, Mail, MapPin, Phone, ReceiptText, Scroll, Smartphone } from "lucide-react";

import React from "react";

const page = () => {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <ScrollArea className="h-[80vh] w-[80vw]">
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
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Building className="ml-2" />
                    <Input id="company-name" className="" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="customer-short-name">
                    Customer Short Name
                    <span className="text-red-500 font-bold">*</span>
                  </Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <CircleUserRound className="ml-2" />
                    <Input id="customer-short-name" className="" required />
                  </div>
                </div>
                <div className="row-start-2">
                  <Label htmlFor="start-date">Company Start Date</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <CalendarDays  className="ml-2" />
                    <Input id="start-date" className="" required />
                  </div>
                </div>
                <div className="row-start-2">
                  <Label htmlFor="close-date">Company Close Date</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <CalendarDays  className="ml-2" />
                    <Input id="close-date" className="" required />
                  </div>
                </div>
              </div>
              <hr className="border-[#dfdfdf] border mt-6 mb-6" />
              <p className="mb-5">Contact Information</p>
              <div className="grid grid-cols-4 grid-rows-4 gap-4">
                <div className="col-start-1 col-span-4">
                  <Label htmlFor="address">
                    Address<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="ml-2" />
                    <Input id="address" className="" required />
                  </div>
                </div>
                <div className="col-start-1 row-start-2">
                  <Label htmlFor="city">
                    City<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="ml-2" />
                    <Input id="city" className="" required />
                  </div>
                </div>
                <div className="col-start-2 row-start-2">
                  <Label htmlFor="district">
                    District<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="ml-2" />
                    <Input id="district" className="" required />
                  </div>
                </div>
                <div className="col-start-4 row-start-2">
                  <Label htmlFor="state">
                    State<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="ml-2" />
                    <Input id="state" className="" required />
                  </div>
                </div>
                <div className="col-start-3 row-start-2">
                  <Label htmlFor="country">
                    Country<span className="text-red-500 font-bold">*</span>
                  </Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="ml-2" />
                    <Input id="country" className="" required />
                  </div>
                </div>
                <div className="row-start-3">
                  <Label htmlFor="pin">PIN</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <MapPin className="ml-2" />
                    <Input id="pin" className="" required />
                  </div>
                </div>
                <div className="col-start-2 row-start-3">
                  <Label htmlFor="landline1">Landline No 1</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Phone className="ml-2" />
                    <Input id="landline1" className="" required />
                  </div>
                </div>
                <div className="col-start-3 row-start-3">
                  <Label htmlFor="landline2">Landline No 2</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Phone className="ml-2" />
                    <Input id="landline2" className="" required />
                  </div>
                </div>
                <div className="col-start-4 row-start-3">
                  <Label htmlFor="mobile1">Mobile No 1</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Smartphone className="ml-2" />
                    <Input id="mobile1" className="" required />
                  </div>
                </div>
                <div className="col-start-1 row-start-4">
                  <Label htmlFor="mobile2">Mobile No 2</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Smartphone className="ml-2" />
                    <Input id="mobile2" className="" required />
                  </div>
                </div>
                <div className="row-start-4 col-span-2">
                  <Label htmlFor="email">Email ID</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Mail className="ml-2" />
                    <Input id="email" className="" required />
                  </div>
                </div>
                <div className="row-start-4">
                  <Label htmlFor="website">Web Site Address</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Globe className="ml-2" />
                    <Input id="website" className="" required />
                  </div>
                </div>
              </div>
              <hr className="border-[#dfdfdf] border mt-6 mb-6" />
              <p className="mb-5">Statutory Information</p>
              <div className="grid grid-cols-3 grid-rows-3 gap-4">
                <div>
                  <Label htmlFor="pan">PAN</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <IdCard className="ml-2" />
                    <Input id="pan" className="" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="gstin">GSTIN</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <ReceiptText className="ml-2" />
                    <Input id="gstin" className="" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="gst-state-code">GST State Code</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <Scroll className="ml-2" />
                    <Input id="gst-state-code" className="" required />
                  </div>
                </div>
                <div className="row-start-2">
                  <Label htmlFor="cin">CIN</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <IdCard className="ml-2" />
                    <Input id="cin" className="" required />
                  </div>
                </div>
                <div className="row-start-2 col-span-2">
                  <Label htmlFor="auth-signatory">Authorized Signatory</Label>
                  <div className="flex justify-center items-center border rounded focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
                    <ClipboardPen className="ml-2" />
                    <Input id="auth-signatory" className="" required />
                  </div>
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
