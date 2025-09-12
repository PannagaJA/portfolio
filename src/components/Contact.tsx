import { Mail, Phone, MapPin, Send, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"; // Material icons
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Brand icons
import { SiGmail, SiWhatsapp, SiLinkedin, SiGithub } from "react-icons/si";



const Contact = () => {
  const contactInfo = [
  {
    icon: MdEmail,
    label: "Email",
    value: "pannaga.baradwaj@gmail.com",
    href: "mailto:pannaga.baradwaj@gmail.com",
  },
  {
    icon: MdPhone,
    label: "Phone",
    value: "+91 9741405534",
    href: "tel:+919741405534",
  },
  {
    icon: MdLocationOn,
    label: "Location",
    value: "Bengaluru, India",
    href: "#",
  },
];

const socialLinks = [
  { icon: SiLinkedin, href: "https://github.com/PannagaJA", label: "GitHub" },
  { icon: SiLinkedin, href: "https://linkedin.com/in/pannaga-ja", label: "LinkedIn" },
];

  const connectOptions = [
  {
    label: "Email",
    desc: "Perfect for detailed discussions",
    href: "mailto:pannaga.baradwaj@gmail.com",
    icon: SiGmail,
    color: "text-red-600", // Gmail red
    btnText: "Send an Email",
    btnClass: "bg-red-600 hover:bg-red-700 text-white",
  },
  {
    label: "WhatsApp",
    desc: "Quick messages",
    href: "https://wa.me/9741405534?text=Hello%20Pannaga",
    icon: SiWhatsapp,
    color: "text-green-500", // WhatsApp green
    btnText: "Chat on WhatsApp",
    btnClass: "bg-green-500 hover:bg-green-600 text-white",
  },
  {
    label: "LinkedIn",
    desc: "Professional network",
    href: "https://linkedin.com/in/pannaga-ja",
    icon: SiLinkedin,
    color: "text-blue-600", // LinkedIn blue
    btnText: "Connect",
    btnClass: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    label: "GitHub",
    desc: "Explore my projects",
    href: "https://github.com/PannagaJA",
    icon: SiGithub,
    color: "text-gray-200 dark:text-gray-100", // GitHub black / white in dark mode
    btnText: "Explore",
    btnClass: "bg-gray-900 hover:bg-gray-800 text-white",
  },
];

  return (
   <section id="contact" className="section-padding bg-card/30">
      <div className="container-responsive max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's build something amazing together.
          </p>
        </motion.div>

        {/* Let's Connect Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {connectOptions.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card glass-hover rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <item.icon className={`w-8 h-8 mb-4 ${item.color}`} />
                <h3 className="font-bold text-lg">{item.label}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
              <Button
                className={`mt-4 w-fit px-4 ${item.btnClass} rounded-lg flex items-center gap-2 transition-all duration-300`}
              >
                {item.btnText}
                <Send className="h-4 w-4" />
              </Button>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;