import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Blog = () => {
  const articles = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and maintain web applications, from automated testing to intelligent code generation.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "AI & Development",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop",
      featured: true
    },
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices and architectural patterns for creating React applications that can grow with your business needs while maintaining performance.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "React",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
      featured: true
    },
    {
      title: "Startup Lessons: From Idea to Product",
      excerpt: "Key insights and practical advice from my journey of building multiple startups, including common pitfalls and how to avoid them.",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Entrepreneurship",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=300&fit=crop",
      featured: false
    },
    {
      title: "Modern CSS Techniques for Better UX",
      excerpt: "Advanced CSS techniques and modern approaches to create better user experiences with improved animations and interactions.",
      date: "2023-12-20",
      readTime: "6 min read",
      category: "CSS & Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
      featured: false
    }
  ];

  const featuredArticles = articles.filter(a => a.featured);
  const recentArticles = articles.filter(a => !a.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="section-padding">
      <div className="container-responsive">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Blog & Articles</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and insights on web development, AI, and entrepreneurship
          </p>
        </motion.div>

        {/* Featured Articles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group glass-card glass-hover overflow-hidden h-full">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {article.category}
                    </Badge>
                  </div>
                </motion.div>
                <CardHeader>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-smooth line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="group/btn glass-card">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Recent Articles */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Recent Posts
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {recentArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group glass-card glass-hover h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <motion.img 
                        src={article.image} 
                        alt={article.title}
                        className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div className="flex-1">
                        <Badge variant="secondary" className="mb-2 text-xs glass-card">
                          {article.category}
                        </Badge>
                        <h4 className="font-semibold mb-2 group-hover:text-primary transition-smooth line-clamp-2">
                          {article.title}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                          <span>{formatDate(article.date)}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="glass-card glass-hover">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Blog;