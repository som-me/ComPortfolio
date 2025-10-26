'use client';
import { MdAccessTime } from "react-icons/md";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { ConHead, ConCTA, ConDesc, Title, TitleCTA, Time } from "../content";

export default function Bookings() {
    return (
        <section>
            <div className="flex flex-col items-center px-6 mt-12">
                <span className="text-3xl text-center tracking-wide">{ConHead}</span>
                <span className="pt-4 text-md text-center tracking-wide">{ConCTA}</span>

            </div>
            <div className="px-6 mt-12">
                {/*Left section*/}
                <Card className="bg-[#ffffff] rounded-none shadow-md">
                    <CardHeader>
                        <div className="flex items-center space-x-3">
                            <Avatar>
                                <AvatarImage src="./Avatar.svg" alt="Som Meher" />
                                <AvatarFallback>SM</AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="font-semibold text-gray-800">{Title}</h2>
                                <p className="text-sm text-gray-500">{TitleCTA}</p>
                            </div>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-700 mt-2">
                            {ConDesc}
                        </p>
                        <Separator className="my-4" />
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <div><MdAccessTime size={24} color="#555" />{Time}</div>
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
            </div>
        </section>
    )
}

