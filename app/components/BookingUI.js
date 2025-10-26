"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Separator } from "@/components/ui/separator";

export default function BookingUI() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [timeFormat, setTimeFormat] = useState("12h");
    const [selectedSlot, setSelectedSlot] = useState(null);

    // Example dynamic slot data (can later be fetched from backend)
    const availableSlots = {
        "2025-10-20": ["18:30", "19:00", "19:30", "20:00", "20:30", "21:00"],
        "2025-10-21": ["17:00", "17:30", "18:00", "18:30", "19:00"],
        "2025-10-22": ["10:00", "10:30", "11:00", "11:30", "12:00"],
    };

    // Convert to readable key
    const formatDateKey = (date) => date.toISOString().split("T")[0];
    const slots = availableSlots[formatDateKey(selectedDate)] || [];

    // Format to 12h/24h
    const formatTime = (time) => {
        if (timeFormat === "24h") return time;
        const [hour, minute] = time.split(":").map(Number);
        const period = hour >= 12 ? "pm" : "am";
        const hr = hour % 12 || 12;
        return `${hr}:${minute.toString().padStart(2, "0")}${period}`;
    };

    return (
        <div className="min-h-screen bg-[#f0efed] flex flex-col items-center justify-center p-6">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Section */}
                <Card className="bg-white border-none shadow-md rounded-2xl p-4">
                    <CardHeader>
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarImage src="/profile.jpg" alt="Cedrik Stephen" />
                                <AvatarFallback>CS</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="font-semibold text-gray-800">Cedrik Stephen</h2>
                                <p className="text-sm text-gray-500">Discovery call (30 Minutes)</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-700 mt-2">
                            Stop guessing. Start building a brand that moves you forward.
                            A 30-minute conversation to learn about your business, goals, and challenges.
                            We’ll discuss your needs, see if we’re a good fit, and outline next steps.
                        </p>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <div>🕒 30m</div>
                            <div>💻 Call Video</div>
                        </div>
                        <div className="mt-4">
                            <Select defaultValue="Asia/Kolkata">
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Timezone" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Asia/Kolkata">Asia/Kolkata</SelectItem>
                                    <SelectItem value="America/New_York">America/New York</SelectItem>
                                    <SelectItem value="Europe/London">Europe/London</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Middle Section */}
                <Card className="bg-white border-none shadow-md rounded-2xl p-4">
                    <CardHeader>
                        <CardTitle className="text-gray-800">Select a Date</CardTitle>
                        <CardDescription>Choose your preferred day for the call</CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={(date) => setSelectedDate(date)}
                            className="rounded-md border"
                        />
                    </CardContent>
                </Card>

                {/* Right Section */}
                <Card className="bg-white border-none shadow-md rounded-2xl p-4">
                    <CardHeader>
                        <div className="flex items-center justify-between">
                            <CardTitle className="text-gray-800">
                                {selectedDate ? selectedDate.toDateString() : "Select a date"}
                            </CardTitle>
                            <ToggleGroup
                                type="single"
                                value={timeFormat}
                                onValueChange={(val) => val && setTimeFormat(val)}
                                className="bg-gray-100 rounded-md p-1"
                            >
                                <ToggleGroupItem value="12h" className="px-2 text-sm">12h</ToggleGroupItem>
                                <ToggleGroupItem value="24h" className="px-2 text-sm">24h</ToggleGroupItem>
                            </ToggleGroup>
                        </div>
                    </CardHeader>

                    <CardContent>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={formatDateKey(selectedDate)}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.25 }}
                                className="flex flex-col space-y-2"
                            >
                                {slots.length > 0 ? (
                                    slots.map((time) => (
                                        <Button
                                            key={time}
                                            variant={selectedSlot === time ? "default" : "outline"}
                                            className={`justify-start text-gray-800 ${selectedSlot === time ? "bg-gray-800 text-white" : "bg-white"
                                                }`}
                                            onClick={() => setSelectedSlot(time)}
                                        >
                                            {formatTime(time)}
                                        </Button>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm text-center py-4">
                                        No available slots for this date.
                                    </p>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
