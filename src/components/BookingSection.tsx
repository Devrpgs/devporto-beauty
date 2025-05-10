
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { CalendarIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const services = [
  { id: '1', name: 'Corte de Cabelo', price: 'R$ 80', duration: '45 min' },
  { id: '2', name: 'Coloração', price: 'R$ 150', duration: '2 h' },
  { id: '3', name: 'Manicure', price: 'R$ 60', duration: '40 min' },
  { id: '4', name: 'Pedicure', price: 'R$ 70', duration: '50 min' },
  { id: '5', name: 'Hidratação', price: 'R$ 90', duration: '1 h' },
  { id: '6', name: 'Design de Sobrancelhas', price: 'R$ 50', duration: '30 min' },
];

const professionals = [
  { id: '1', name: 'Ana Silva', specialty: 'Cabelereiro' },
  { id: '2', name: 'Carlos Oliveira', specialty: 'Colorista' },
  { id: '3', name: 'Juliana Mendes', specialty: 'Manicure' },
  { id: '4', name: 'Roberto Santos', specialty: 'Esteticista' },
];

const timeSlots = [
  '9:00', '9:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

const BookingSection = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedProfessional, setSelectedProfessional] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState(1);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Agendamento Confirmado!",
      description: `Seu horário foi agendado para ${selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''} às ${selectedTime}. Enviaremos uma confirmação por e-mail.`,
    });
    
    // Reset form
    setSelectedService('');
    setSelectedProfessional('');
    setSelectedDate(undefined);
    setSelectedTime('');
    setName('');
    setPhone('');
    setEmail('');
    setStep(1);
  };

  return (
    <section id="booking" className="bg-salon-light py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Agende Seu Horário</h2>
        <p className="section-subtitle">
          Sem filas, sem espera. Seu tempo é valioso, economize-o agendando online.
        </p>
        
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 max-w-4xl mx-auto mt-12">
          <div className="flex justify-between mb-8 border-b pb-4">
            <div 
              className={cn(
                "flex flex-col items-center",
                step === 1 ? "text-salon" : "text-salon-muted"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center mb-2",
                step === 1 ? "bg-salon text-white" : "bg-salon-light text-salon-muted"
              )}>
                1
              </div>
              <span className="text-sm">Serviço</span>
            </div>
            <div 
              className={cn(
                "flex flex-col items-center",
                step === 2 ? "text-salon" : "text-salon-muted"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center mb-2",
                step === 2 ? "bg-salon text-white" : "bg-salon-light text-salon-muted"
              )}>
                2
              </div>
              <span className="text-sm">Profissional</span>
            </div>
            <div 
              className={cn(
                "flex flex-col items-center",
                step === 3 ? "text-salon" : "text-salon-muted"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center mb-2",
                step === 3 ? "bg-salon text-white" : "bg-salon-light text-salon-muted"
              )}>
                3
              </div>
              <span className="text-sm">Data & Hora</span>
            </div>
            <div 
              className={cn(
                "flex flex-col items-center",
                step === 4 ? "text-salon" : "text-salon-muted"
              )}
            >
              <div className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center mb-2",
                step === 4 ? "bg-salon text-white" : "bg-salon-light text-salon-muted"
              )}>
                4
              </div>
              <span className="text-sm">Seus Dados</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      className={cn(
                        "border rounded-lg p-4 cursor-pointer transition-all",
                        selectedService === service.id ? 
                        "border-salon bg-salon/5 shadow-md" : 
                        "border-gray-200 hover:border-salon/50"
                      )}
                      onClick={() => setSelectedService(service.id)}
                    >
                      <h3 className="font-medium mb-1">{service.name}</h3>
                      <div className="flex justify-between text-sm text-salon-muted">
                        <span>{service.price}</span>
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-end mt-8">
                  <Button 
                    className="bg-salon hover:bg-salon/90 text-white"
                    onClick={() => setStep(2)}
                    disabled={!selectedService}
                  >
                    Próximo: Escolher Profissional
                  </Button>
                </div>
              </div>
            )}
            
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {professionals.map((professional) => (
                    <div 
                      key={professional.id}
                      className={cn(
                        "border rounded-lg p-4 cursor-pointer transition-all",
                        selectedProfessional === professional.id ? 
                        "border-salon bg-salon/5 shadow-md" : 
                        "border-gray-200 hover:border-salon/50"
                      )}
                      onClick={() => setSelectedProfessional(professional.id)}
                    >
                      <h3 className="font-medium mb-1">{professional.name}</h3>
                      <div className="text-sm text-salon-muted">
                        <span>{professional.specialty}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(1)}
                  >
                    Voltar
                  </Button>
                  <Button 
                    className="bg-salon hover:bg-salon/90 text-white"
                    onClick={() => setStep(3)}
                    disabled={!selectedProfessional}
                  >
                    Próximo: Escolher Data
                  </Button>
                </div>
              </div>
            )}
            
            {step === 3 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Label className="mb-2 block">Selecione uma data</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, 'PPP') : <span>Escolha uma data</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 pointer-events-auto">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          initialFocus
                          disabled={(date) => 
                            date < new Date() || 
                            date.getDay() === 0 // Sunday
                          }
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Selecione um horário</Label>
                    <Select
                      value={selectedTime}
                      onValueChange={setSelectedTime}
                      disabled={!selectedDate}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Escolha um horário" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((time) => (
                          <SelectItem key={time} value={time}>
                            {time}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {selectedDate && <p className="text-sm mt-2 text-salon">
                      <span className="font-medium text-red-500">Apenas 3 horários disponíveis</span> para {format(selectedDate, 'dd/MM/yyyy')}
                    </p>}
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(2)}
                  >
                    Voltar
                  </Button>
                  <Button 
                    className="bg-salon hover:bg-salon/90 text-white"
                    onClick={() => setStep(4)}
                    disabled={!selectedDate || !selectedTime}
                  >
                    Próximo: Seus Dados
                  </Button>
                </div>
              </div>
            )}
            
            {step === 4 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input 
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input 
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="flex items-start space-x-2 mt-4">
                  <Checkbox id="terms" />
                  <div className="grid gap-1.5 leading-none">
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Aceito receber notificações por email e SMS
                    </label>
                  </div>
                </div>
                
                <div className="border-t pt-4 mt-6">
                  <h4 className="font-medium mb-2">Resumo do Agendamento</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-salon-muted">Serviço:</span>
                    <span>{services.find(s => s.id === selectedService)?.name}</span>
                    
                    <span className="text-salon-muted">Profissional:</span>
                    <span>{professionals.find(p => p.id === selectedProfessional)?.name}</span>
                    
                    <span className="text-salon-muted">Data:</span>
                    <span>{selectedDate ? format(selectedDate, 'dd/MM/yyyy') : ''}</span>
                    
                    <span className="text-salon-muted">Horário:</span>
                    <span>{selectedTime}</span>
                  </div>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button 
                    variant="outline" 
                    onClick={() => setStep(3)}
                  >
                    Voltar
                  </Button>
                  <Button 
                    type="submit"
                    className="bg-salon hover:bg-salon/90 text-white"
                    disabled={!name || !phone || !email}
                  >
                    Confirmar Agendamento
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
