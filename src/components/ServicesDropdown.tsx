
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const services = [
  { id: 1, name: 'Web Development', description: 'Custom websites and web applications' },
  { id: 2, name: 'Mobile App Development', description: 'iOS and Android applications' },
  { id: 3, name: 'UI/UX Design', description: 'User interface and experience design' },
  { id: 4, name: 'Digital Marketing', description: 'SEO, social media, and advertising' },
  { id: 5, name: 'Brand Strategy', description: 'Brand identity and positioning' },
  { id: 6, name: 'Content Creation', description: 'Copywriting and visual content' },
]

export default function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setIsOpen(false)
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-card border border-border rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-accent transition-colors duration-200 shadow-sm"
        >
          <span className="text-foreground">
            {selectedService ? selectedService.name : 'Select a Service'}
          </span>
          <ChevronDown 
            className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-lg shadow-lg z-10 overflow-hidden">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className="w-full px-4 py-3 text-left hover:bg-accent transition-colors duration-150 border-b border-border last:border-b-0"
              >
                <div className="font-medium text-foreground">{service.name}</div>
                <div className="text-sm text-muted-foreground mt-1">{service.description}</div>
              </button>
            ))}
          </div>
        )}
      </div>

      {selectedService && (
        <div className="mt-4 p-4 bg-muted rounded-lg">
          <h3 className="font-semibold text-foreground">{selectedService.name}</h3>
          <p className="text-muted-foreground mt-1">{selectedService.description}</p>
        </div>
      )}
    </div>
  )
}
