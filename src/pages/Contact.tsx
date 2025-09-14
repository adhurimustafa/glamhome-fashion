import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Temporary mailto solution
    const mailtoBody = `
${t("contact.form.name")}: ${formData.name}
${t("contact.form.email")}: ${formData.email}
${t("contact.form.phone")}: ${formData.phone}
${t("contact.form.subject")}: ${formData.subject}

${t("contact.form.message")}:
${formData.message}
    `.trim();

    const mailtoUrl = `mailto:contact@example.com?subject=${encodeURIComponent(formData.subject || t("contact.form.subject"))}&body=${encodeURIComponent(mailtoBody)}`;
    
    window.location.href = mailtoUrl;
    
    toast({
      title: t("contact.form.success"),
      description: t("contact.toast"),
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-accent mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-accent/80 leading-relaxed">
              {t("contact.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <Card className="border-0 shadow-elegant">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-accent">
                    {t("contact.formTitle")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">{t("contact.form.name")} *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t("contact.form.name") as string}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">{t("contact.form.email")} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+33 1 23 45 67 89"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">{t("contact.form.subject")} *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder={t("contact.form.subject") as string}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">{t("contact.form.message")} *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder={t("contact.form.message") as string}
                        rows={6}
                        required
                      />
                    </div>

                    <Button 
                      type="submit"
                      className="w-full gradient-primary hover:shadow-soft transition-all duration-300"
                      size="lg"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      {t("contact.form.send")}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-scale-in">
              <div>
                <h2 className="font-serif text-3xl font-light text-accent mb-6">
                  {t("contact.infoTitle")}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {t("contact.infoText")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Address */}
                <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-medium mb-2">{t("contact.address.title")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("contact.address.text")}
                    </p>
                  </CardContent>
                </Card>

                {/* Phone */}
                <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-medium mb-2">{t("contact.phone.title")}</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="tel:+33123456789" className="hover:text-primary transition-colors">
                        {t("contact.phone.text")}
                      </a>
                    </p>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-medium mb-2">Email</h3>
                    <p className="text-muted-foreground text-sm">
                      <a href="mailto:contact@glamhome.fashion" className="hover:text-primary transition-colors">
                        contact@glamhome.fashion
                      </a>
                    </p>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card className="border-0 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-serif text-lg font-medium mb-2">{t("contact.hours.title")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("contact.hours.text")}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* FAQ Quick Links */}
              <Card className="border-0 shadow-soft bg-neutral-warm">
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-medium text-accent mb-4">
                    {t("contact.faq.title")}
                  </h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("contact.faq.q1")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("contact.faq.q2")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("contact.faq.q3")}
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      {t("contact.faq.q4")}
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              {t("contact.cta.title")}
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              {t("contact.cta.text")}
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              className="px-8 py-3 text-lg hover:shadow-soft transition-all duration-300"
              onClick={() => window.location.href = "tel:+33123456789"}
            >
              {t("contact.cta.button")}
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
