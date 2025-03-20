"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { format } from "date-fns"
import { sv } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import emailjs from '@emailjs/browser'; // Importera EmailJS


// Modal Button Component
function ModalButton({ color }: { color: string }) {
  return (
    <button
      className={`group flex items-center space-x-2 text-xl font-medium text-${color} transition-all hover:text-secondary`}
    >
      <span>Boka oss nu</span>
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </button>
  )
}

// TypeScript interface for form data
interface FormData {
  startDate: Date
  endDate: Date | null
  time: string
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  address: string
  city: string
  postalCode: string
  additionalInfo: string
}

// TypeScript interface for form errors
interface FormErrors {
  startDate?: string
  endDate?: string
  time?: string
  firstName?: string
  lastName?: string
  phoneNumber?: string
  email?: string
  address?: string
  city?: string
  postalCode?: string
}

export default function BookingModal() {
  const [open, setOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [date, setDate] = useState<{ from: Date; to: Date | undefined }>({
    from: new Date(),
    to: undefined,
  })

  const EMAILJS_SERVICE_ID = 'service_ak38e0t';
const EMAILJS_TEMPLATE_ID_USER = 'template_q7rau7w';
const EMAILJS_USER_ID = '6gLAIoDcMd6QCQKYI'

  // Form state
  const [formData, setFormData] = useState<FormData>({
    startDate: new Date(),
    endDate: null,
    time: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    additionalInfo: "",
  })

  // Form errors state
  const [errors, setErrors] = useState<FormErrors>({})

  // Handle input changes
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  // Handle select changes
  const handleSelectChange = (value: string, name: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when field is edited
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  // Form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    // Validera steget innan inskick
    if (!validateStep3()) return;
  
    try {
      // Skicka e-post till användaren och en kopia till dig själv
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID_USER,
        {
          to_email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          start_date: format(formData.startDate, 'd MMM yyyy', { locale: sv }),
          end_date: formData.endDate ? format(formData.endDate, 'd MMM yyyy', { locale: sv }) : 'Inget slutdatum',
          time: formData.time,
          address: formData.address,
          city: formData.city,
          postal_code: formData.postalCode,
          phone: formData.phoneNumber,
          additional_info: formData.additionalInfo,
        },
        EMAILJS_USER_ID
      );
  
      console.log('E-post skickad!');
      setOpen(false);
      setStep(1);
      resetForm();
    } catch (error) {
      console.error('E-post kunde inte skickas:', error);
    }
  };
  

  // Reset form
  const resetForm = () => {
    setFormData({
      startDate: new Date(),
      endDate: null,
      time: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      additionalInfo: "",
    })
    setErrors({})
  }

  // Validate step 1
  const validateStep1 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.time) {
      newErrors.time = "Välj en tid."
    }

    if (!date.to) {
      newErrors.endDate = "Välj ett slutdatum."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Validate step 2
  const validateStep2 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.firstName || formData.firstName.length < 2) {
      newErrors.firstName = "Förnamn måste vara minst 2 tecken."
    }

    if (!formData.lastName || formData.lastName.length < 2) {
      newErrors.lastName = "Efternamn måste vara minst 2 tecken."
    }

    if (!formData.phoneNumber || formData.phoneNumber.length < 10) {
      newErrors.phoneNumber = "Telefonnummer måste vara minst 10 siffror."
    }

    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ange en giltig e-postadress."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Validate step 3
  const validateStep3 = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.address || formData.address.length < 5) {
      newErrors.address = "Adress måste vara minst 5 tecken."
    }

    if (!formData.city || formData.city.length < 2) {
      newErrors.city = "Stad måste vara minst 2 tecken."
    }

    if (!formData.postalCode || formData.postalCode.length < 5) {
      newErrors.postalCode = "Postnummer måste vara minst 5 tecken."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (step === 1) {
      if (!validateStep1()) return
    } else if (step === 2) {
      if (!validateStep2()) return
    }

    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const handleDateSelect = (range: { from: Date; to: Date | undefined }) => {
    setDate(range)
    setFormData({
      ...formData,
      startDate: range.from,
      endDate: range.to || null,
    })

    // Clear date errors
    if (errors.startDate || errors.endDate) {
      setErrors({
        ...errors,
        startDate: undefined,
        endDate: undefined,
      })
    }
  }

  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

  return (
    <Dialog open={open} onOpenChange={setOpen} >
      <DialogTrigger asChild>
        <div>
          <ModalButton color="primary" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-2xl">
        <DialogHeader>
          <DialogTitle>Boka din tid</DialogTitle>
          <DialogDescription>
            {step === 1 && "Välj önskat datum och tid"}
            {step === 2 && "Ange dina personuppgifter"}
            {step === 3 && "Ange din adress"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <Label>Datum</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "d MMM yyyy", { locale: sv })} -{" "}
                            {format(date.to, "d MMM yyyy", { locale: sv })}
                          </>
                        ) : (
                          format(date.from, "d MMM yyyy", { locale: sv })
                        )
                      ) : (
                        <span>Välj datumintervall</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date.from}
                      selected={date}
                      onSelect={handleDateSelect as any}
                      numberOfMonths={2}
                      locale={sv}
                    />
                  </PopoverContent>
                </Popover>
                {errors.startDate && <p className="text-sm text-destructive">{errors.startDate}</p>}
                {errors.endDate && <p className="text-sm text-destructive">{errors.endDate}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="time">Tid</Label>
                <Select onValueChange={(value) => handleSelectChange(value, "time")} value={formData.time}>
                  <SelectTrigger>
                    <SelectValue placeholder="Välj en tid" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.time && <p className="text-sm text-destructive">{errors.time}</p>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="firstName">Förnamn</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="Anna"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                </div>

                <div className="flex flex-col space-y-2">
                  <Label htmlFor="lastName">Efternamn</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Andersson"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                  {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="phoneNumber">Telefonnummer</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="070-123 45 67"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                {errors.phoneNumber && <p className="text-sm text-destructive">{errors.phoneNumber}</p>}
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">E-post</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="anna.andersson@exempel.se"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="address">Adress till event</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="Storgatan 1"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                {errors.address && <p className="text-sm text-destructive">{errors.address}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="city">Stad</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="Stockholm"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                  {errors.city && <p className="text-sm text-destructive">{errors.city}</p>}
                </div>

                <div className="flex flex-col space-y-2">
                  <Label htmlFor="postalCode">Postnummer</Label>
                  <Input
                    id="postalCode"
                    name="postalCode"
                    placeholder="123 45"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                  {errors.postalCode && <p className="text-sm text-destructive">{errors.postalCode}</p>}
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <Label htmlFor="additionalInfo">Typ av event? Antal gäster och annan viktig info
                </Label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  placeholder="Anatl gäster 8 st, bröllop, födelsedagsfest, företagsevent"
                  className="resize-none"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
          )}

          <DialogFooter className="flex justify-between">
            {step > 1 ? (
              <button type="button" onClick={prevStep} className=" p-2 rounded-md text-sm px-3 hover:cursor-pointer"> 
                Tillbaka
              </button>
            ) : (
              <button type="button" onClick={() => setOpen(false)} className=" bg-red-700 text-white p-2 rounded-md text-sm px-3 hover:cursor-pointer">
                Avbryt
              </button>
            )}

            {step < 3 ? (
              <button type="button" onClick={nextStep} className=" bg-secondary p-2 rounded-md text-sm px-3 hover:cursor-pointer">
                Nästa
              </button>
            ) : (
              <button className="p-2 rounded-md text-sm px-3 hover:cursor-pointer bg-secondary" type="submit">Boka</button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

