import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function Component() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
        services: []
    })

    const services = [
        "Website design",
        "UX design",
        "User research",
        "Content creation",
        "Strategy & consulting",
        "Other"
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission
    }

    return (
        <div className="w-full">
            <Navbar />

            <div className="pt-[120px] bg-[#f6f6f6] h-screen">
                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact our team</h1>
                    <p className="text-muted-foreground">
                        Got any questions about the product or scaling on our platform? We&apos;re here to help.
                        <br />
                        Chat to our friendly team 24/7 and get onboard in less than 5 minutes.
                    </p>
                </div>
                <div className="max-w-xl mx-auto">
                    <Card className="p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input
                                        id="firstName"
                                        placeholder="First name"
                                        value={formData.firstName}
                                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input
                                        id="lastName"
                                        placeholder="Last name"
                                        value={formData.lastName}
                                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="you@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>



                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Leave us a message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="min-h-[120px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label>Services</Label>
                                <div className="grid sm:grid-cols-2 gap-2">
                                    {services.map((service) => (
                                        <div key={service} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={service}
                                                checked={formData.services.includes(service)}
                                                onCheckedChange={(checked) => {
                                                    setFormData({
                                                        ...formData,
                                                        services: checked
                                                            ? [...formData.services, service]
                                                            : formData.services.filter((s) => s !== service)
                                                    })
                                                }}
                                            />
                                            <Label htmlFor={service} className="font-normal">
                                                {service}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button type="submit" className="w-full">
                                <Send className="mr-2 h-4 w-4" />
                                Send message
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    )
}
