import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Blog & Articles</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Thoughts, tutorials, and insights on web development, AI, and entrepreneurship
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredArticles.map((article, index) => (
            <Card 
              key={article.title}
              className="group hover-lift transition-spring border-border/40 bg-card/60 backdrop-blur-sm overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
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
              </div>
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
                <Button variant="outline" className="group/btn">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Articles */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Recent Posts</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {recentArticles.map((article, index) => (
              <Card 
                key={article.title}
                className="group hover-lift transition-spring border-border/40 bg-card/40 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 text-xs">
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
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button size="lg" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;