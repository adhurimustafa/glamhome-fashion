import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const dressModels = [
  { id: 1, name: "Robe Émeraude Élégance", color: "Vert émeraude" },
  { id: 2, name: "Robe Fuchsia Glamour", color: "Fuchsia" },
  { id: 3, name: "Robe Noire Asymétrique", color: "Noir" },
  { id: 4, name: "Robe Rose Poudrée", color: "Rose poudré" },
  { id: 5, name: "Robe Noire Dentelle", color: "Noir" },
  { id: 6, name: "Robe Grise Métallisée", color: "Gris perle" },
  { id: 7, name: "Robe Noire Paillettes", color: "Noir" }
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colors = ["Noir", "Blanc", "Rouge", "Bleu marine", "Vert émeraude", "Fuchsia", "Rose poudré", "Gris perle"];

const QuickOrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    size: "",
    color: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.model || !formData.size) {
      toast({
        title: "Champs requis manquants",
        description: "Veuillez remplir au minimum votre nom, email, modèle et taille.",
        variant: "destructive"
      });
      return;
    }

    // Mock submit - show success message
    toast({
      title: "Commande envoyée !",
      description: "Nous vous contacterons dans les plus brefs délais pour confirmer votre commande.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      model: "",
      size: "",
      color: "",
      message: ""
    });
  };

  const generateWhatsAppMessage = () => {
    const selectedModel = dressModels.find(dress => dress.id.toString() === formData.model);
    const modelName = selectedModel ? selectedModel.name : "modèle sélectionné";
    
    return `Bonjour, je souhaite commander le modèle ${modelName} en taille ${formData.size || "[taille]"} — Glam Home Fashion.`;
  };

  const handleWhatsApp = () => {
    if (!formData.model || !formData.size) {
      toast({
        title: "Informations manquantes",
        description: "Veuillez sélectionner au minimum un modèle et une taille.",
        variant: "destructive"
      });
      return;
    }

    const message = encodeURIComponent(generateWhatsAppMessage());
    const whatsappUrl = `https://wa.me/33123456789?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Nom complet *
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Votre nom et prénom"
            className="focus:ring-2 focus:ring-primary/50"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="votre@email.com"
            className="focus:ring-2 focus:ring-primary/50"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium">
          Téléphone
        </Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          placeholder="+33 6 XX XX XX XX"
          className="focus:ring-2 focus:ring-primary/50"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="model" className="text-sm font-medium">
            Modèle *
          </Label>
          <Select value={formData.model} onValueChange={(value) => handleInputChange("model", value)}>
            <SelectTrigger className="focus:ring-2 focus:ring-primary/50">
              <SelectValue placeholder="Choisir un modèle" />
            </SelectTrigger>
            <SelectContent>
              {dressModels.map((dress) => (
                <SelectItem key={dress.id} value={dress.id.toString()}>
                  {dress.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="size" className="text-sm font-medium">
            Taille *
          </Label>
          <Select value={formData.size} onValueChange={(value) => handleInputChange("size", value)}>
            <SelectTrigger className="focus:ring-2 focus:ring-primary/50">
              <SelectValue placeholder="Taille" />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="color" className="text-sm font-medium">
            Couleur
          </Label>
          <Select value={formData.color} onValueChange={(value) => handleInputChange("color", value)}>
            <SelectTrigger className="focus:ring-2 focus:ring-primary/50">
              <SelectValue placeholder="Couleur" />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Informations supplémentaires, questions, demandes spéciales..."
          className="min-h-[100px] focus:ring-2 focus:ring-primary/50"
          rows={4}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button
          type="submit"
          className="flex-1 gradient-primary hover:shadow-elegant transition-all duration-300 focus:ring-2 focus:ring-primary/50"
          size="lg"
        >
          <Send className="h-4 w-4 mr-2" />
          Envoyer la Commande
        </Button>
        
        <Button
          type="button"
          variant="outline"
          onClick={handleWhatsApp}
          className="flex-1 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300 focus:ring-2 focus:ring-green-500/50"
          size="lg"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          WhatsApp
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center pt-2">
        * Champs obligatoires. Vos données sont protégées et utilisées uniquement pour traiter votre commande.
      </p>
    </form>
  );
};

export default QuickOrderForm;